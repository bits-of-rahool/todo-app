exports.getDate = function () {
  let options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: 'Asia/Kolkata'
  };
  return (today = new Date().toLocaleDateString("en-IN", options));
};

exports.getTime = function () {
  return (today = new Date().toLocaleTimeString("en-IN"));
};
