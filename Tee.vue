<template>
  <ul class="tree">
    <li v-for="(node,index) in data" :key="node[defaultProps.label]" class="tree-node">
      <i class="iconfont icon-down" 
      :class="{
          'icon-down':!showChildren[index],
          'icon-right': showChildren[index],
      }"
      />
      <span class="node-label"  @click="handleClick(index)">
        {{ node[defaultProps.label] }}
      </span>
      <keep-alive>
      <base-tree :data="node[defaultProps.children]"
      v-if="showChildren[index]&&node[defaultProps.children]"
      />
      </keep-alive>
    </li>
  </ul>
</template>

<script>
export default {
  name: "base-tree",
  props: {
    data: {
      type: Array,
      required: true,
    },
    defaultProps: {
      type: Object,
      default: () => ({
        label: "label",
        children: "children",
      }),
    },
  },
  data(){
      return {
          showChildren: [],
      }
  },
  methods: {
      handleClick(index){
          console.log(index)
          const flag = !this.showChildren[index]
          this.$set(this.showChildren,index,flag)
      }
  },
  created() {
      console.log(this.data)
  },
};
</script>

<style scoped>
@import "./assets/font.css";

li {
  list-style: none;
}

.tree-node {
  cursor: pointer;
}

.tree-node .iconfont {
  color: #c0c4cc;
  font-size: 12px;
  margin-right: 5px;
  vertical-align: middle;
}

.tree-node .node-label {
  font-size: 14px;
  color: #606266;
  vertical-align: middle;
}
</style>
