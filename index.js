module.exports = (serializedJsonString) => {
  var deserializedJsonString = serializedJsonString
    .replace(/(\\n)/g, "")
    .replace(/(\\r)/g, "")
    .replace(/(\\t)/g, "")
    .replace(/(\\f)/g, "")
    .replace(/(\\b)/g, "")
    .replace(/(\")/g, "\"")
    .replace(/("{)/g, "{")
    .replace(/(}")/g, "}")
    .replace(/(\\)/g, "")
    .replace(/(\/)/g, "/");
  return JSON.parse(deserializedJsonString);
}