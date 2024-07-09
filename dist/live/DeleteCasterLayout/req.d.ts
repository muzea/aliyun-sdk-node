export interface DeleteCasterLayoutRequest {
    /**
     * 导播台ID。
     * - 如果您通过[CreateCaster接口](~~69338~~)创建导播台，请查看CreateCaster接口调用返回的参数CasterId值。
     * - 如果您通过直播控制台创建导播台，请通过**直播控制台** > **导播台** > **云导播台**页面查看。
     * > 直播控制台云导播台页面导播台列表中的导播台名称即导播台ID。
     * @example `a2b8e671-2fe5-4642-a2ec-bf93880e****`
     */
    "CasterId": string;
    /**
     * 布局ID。如果您通过[AddCasterLayout接口](~~60249~~)添加导播台布局，请查看AddCasterLayout接口调用返回的参数LayoutId值。
     * @example `21926b36-7dd2-4fde-ae25-51b5bc8e****`
     */
    "LayoutId": string;
}
