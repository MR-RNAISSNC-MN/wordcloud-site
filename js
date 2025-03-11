const words = [
  ["Email", 15, "mailto:your@email.com"],
  ["Twitter", 20, "https://twitter.com/yourhandle"],
  ["Shop", 25, "https://yourstore.com"],
  ["Donate", 18, "https://yourdonationlink.com"],
  ["Audio", 22, "https://yourmusicplatform.com"]
];

const wordCloudElement = document.getElementById("wordcloud");

WordCloud(wordCloudElement, {
  list: words,
  gridSize: 10,
  weightFactor: 10,
  color: "random-light",
  rotateRatio: 0.5,
  click: function(item) {
    window.location.href = item[2];
  }
});
