<template>
  <div>
    <a-tabs tabPosition="left" v-model:activeKey="activeKey" type="card">
      <a-tab-pane key="1" tab="Tab Title 1">
        <a-button @click="onClick">Weblogic</a-button>
        <span>{{display}}</span>
      </a-tab-pane>
      <a-tab-pane key="2" tab="Tab Title 2">
        <p>Content of Tab Pane 2</p>
        <p>Content of Tab Pane 2</p>
        <p>Content of Tab Pane 2</p>
      </a-tab-pane>
      <a-tab-pane key="3" tab="Tab Title 3">
        <p>Content of Tab Pane 3</p>
        <p>Content of Tab Pane 3</p>
        <p>Content of Tab Pane 3</p>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import {WebLogic_10271} from "../../../../wailsjs/go/exp/Exp"

export default defineComponent({
  name: "Home",
  components: {},

  setup() {
    let display = ref('pach')
    const onClick = () => {
      WebLogic_10271("http://127.0.0.1").then((result) =>{
        display.value = result
      })

    };

    return {
      onClick,
      display,
      activeKey: ref("2"),
    };
  },
});
</script>
<style lang="scss">
</style>
