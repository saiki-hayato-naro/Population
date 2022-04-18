module.exports = {
  resas: {
    demographicsAPI:
      "https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear",
    prefecturesAPI: "https://opendata.resas-portal.go.jp/api/v1/prefectures",
    apiKey: process.env.VUE_APP_RESAS_APIKEY
  }
};
