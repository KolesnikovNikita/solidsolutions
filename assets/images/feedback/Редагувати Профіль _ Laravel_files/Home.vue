import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/resources/js/Pages/Home.vue");import FrontendLayout from "/resources/js/Layouts/FrontendLayout.vue?t=1708349706969";
    import PostFlow from "/resources/js/Components/Frontend/PostFlow.vue";
    import {provide} from "/node_modules/.vite/deps/vue.js?v=c5628822";
    import {Head} from "/node_modules/.vite/deps/@inertiajs_vue3.js?v=c5628822";

    
const _sfc_main = {
  __name: 'Home',
  props: {
        posts: Object,
        filters: Object,
        currentFilter: Number
    },
  setup(__props, { expose: __expose }) {
  __expose();

const props = __props;

    

    var allPosts = props.posts.data;
    var currentFilter = props.currentFilter;
    provide('allPosts', allPosts);
    provide('currentFilter', currentFilter);

const __returned__ = { props, get allPosts() { return allPosts }, set allPosts(v) { allPosts = v }, get currentFilter() { return currentFilter }, set currentFilter(v) { currentFilter = v }, FrontendLayout, PostFlow, provide, get Head() { return Head } }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
import { createElementVNode as _createElementVNode, withCtx as _withCtx, createVNode as _createVNode, Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock } from "/node_modules/.vite/deps/vue.js?v=c5628822"

const _hoisted_1 = ["href"]

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock(_Fragment, null, [
    _createVNode($setup["Head"], null, {
      default: _withCtx(() => [
        _createElementVNode("link", {
          rel: "canonical",
          href: _ctx.route('home')
        }, null, 8 /* PROPS */, _hoisted_1)
      ]),
      _: 1 /* STABLE */
    }),
    _createVNode($setup["FrontendLayout"], null, {
      default: _withCtx(() => [
        _createVNode($setup["PostFlow"], { class: "tablet:ml-[11.75rem]" })
      ]),
      _: 1 /* STABLE */
    })
  ], 64 /* STABLE_FRAGMENT */))
}


_sfc_main.__hmrId = "4307d078"
typeof __VUE_HMR_RUNTIME__ !== 'undefined' && __VUE_HMR_RUNTIME__.createRecord(_sfc_main.__hmrId, _sfc_main)
import.meta.hot.accept(mod => {
  if (!mod) return
  const { default: updated, _rerender_only } = mod
  if (_rerender_only) {
    __VUE_HMR_RUNTIME__.rerender(updated.__hmrId, updated.render)
  } else {
    __VUE_HMR_RUNTIME__.reload(updated.__hmrId, updated)
  }
})
import _export_sfc from "/@id/__x00__plugin-vue:export-helper"
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/Users/a1111/Documents/venture/resources/js/Pages/Home.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiSG9tZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdCBzZXR1cD5cbiAgICBpbXBvcnQgRnJvbnRlbmRMYXlvdXQgZnJvbSAnQC9MYXlvdXRzL0Zyb250ZW5kTGF5b3V0LnZ1ZSc7XG4gICAgaW1wb3J0IFBvc3RGbG93IGZyb20gXCJAL0NvbXBvbmVudHMvRnJvbnRlbmQvUG9zdEZsb3cudnVlXCI7XG4gICAgaW1wb3J0IHtwcm92aWRlfSBmcm9tIFwidnVlXCI7XG4gICAgaW1wb3J0IHtIZWFkfSBmcm9tIFwiQGluZXJ0aWFqcy92dWUzXCI7XG5cbiAgICBjb25zdCBwcm9wcyA9IGRlZmluZVByb3BzKHtcbiAgICAgICAgcG9zdHM6IE9iamVjdCxcbiAgICAgICAgZmlsdGVyczogT2JqZWN0LFxuICAgICAgICBjdXJyZW50RmlsdGVyOiBOdW1iZXJcbiAgICB9KTtcblxuICAgIHZhciBhbGxQb3N0cyA9IHByb3BzLnBvc3RzLmRhdGE7XG4gICAgdmFyIGN1cnJlbnRGaWx0ZXIgPSBwcm9wcy5jdXJyZW50RmlsdGVyO1xuICAgIHByb3ZpZGUoJ2FsbFBvc3RzJywgYWxsUG9zdHMpO1xuICAgIHByb3ZpZGUoJ2N1cnJlbnRGaWx0ZXInLCBjdXJyZW50RmlsdGVyKTtcbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgPGxpbmsgcmVsPVwiY2Fub25pY2FsXCIgOmhyZWY9XCJyb3V0ZSgnaG9tZScpXCIgLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8RnJvbnRlbmRMYXlvdXQ+XG5cbiAgICAgICAgPFBvc3RGbG93IGNsYXNzPVwidGFibGV0Om1sLVsxMS43NXJlbV1cIiAvPlxuXG4gICAgICAgIDwvRnJvbnRlbmRMYXlvdXQ+XG48L3RlbXBsYXRlPlxuIl0sIm1hcHBpbmdzIjoiQUFDSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzlELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM5RCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDaEMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3pDO0FBQ0EsQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7Ozs7OztBQU5XO0FBQ2QsQ0FBQyxDQUFDLENBQUMsQ0FTSTtBQUNQO0FBQ0EsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDcEMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzVDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbEMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7OztJQUlwQyxhQUVPO3dCQURILENBQThDO1FBQTlDLG9CQUE4QztVQUF4QyxHQUFHLEVBQUMsV0FBVztVQUFFLElBQUksRUFBRSxVQUFLOzs7OztJQUV0QyxhQUlpQjt3QkFGakIsQ0FBeUM7UUFBekMsYUFBeUMsc0JBQS9CLEtBQUssRUFBQyxzQkFBc0IifQ==