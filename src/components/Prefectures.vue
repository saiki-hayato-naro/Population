<template>
  <div class="prefectures-container">
    <h3 class="">都道府県一覧</h3>
    <div class="checkboxes">
      <ul v-for="pref in prefectures" :key="pref.prefCode">
        <input
          type="checkbox"
          :id="pref.prefName"
          @click="toggleLine($event, pref)"
        />
        <label :for="pref.prefName">
          {{ pref.prefName }}
        </label>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Prefectures",
  data: function() {
    return {};
  },
  mounted() {
    this.requestPrefectures();
  },
  computed: {
    ...mapState("prefectures", ["prefectures"])
  },
  methods: {
    ...mapActions("prefectures", ["requestPrefectures"]),
    ...mapActions("lineChart", ["requestDemographics", "removeDemographics"]),
    toggleLine(event, pref) {
      const element = event.target;
      if (element.checked) {
        this.requestDemographics({
          pref: pref,
          element: element
        });
      } else {
        this.removeDemographics(pref);
      }
    }
  }
};
</script>

<style scoped>
.prefectures-container {
  margin: 2% 2% 10% 2%;
}
.checkboxes {
  display: grid;
  grid-template-columns: repeat(auto-fit, 150px);
}
ul {
  margin: 5px;
}
</style>
