<template>
  <div>
    <h1 class="title">都道府県別人口推移</h1>
    <prefectures></prefectures>
    <line-chart :chart-data="chartData"></line-chart>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Prefectures from "@/components/Prefectures";
import LineChart from "@/components/LineChart";

export default {
  components: {
    Prefectures,
    LineChart
  },
  name: "Home",
  data() {
    return {};
  },
  computed: {
    ...mapState("lineChart", ["datasets", "yAxesLabels"]),
    chartData() {
      return { labels: this.yAxesLabels, datasets: this.datasets };
    }
  }
};
</script>

<style scoped>
.title {
  text-align: center;
}
</style>
