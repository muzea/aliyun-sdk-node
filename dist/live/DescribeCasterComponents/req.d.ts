export interface DescribeCasterComponentsRequest {
    /**
     * 导播台ID。
     * - 如果您通过[CreateCaster接口](~~69338~~)创建导播台，请查看CreateCaster接口调用返回的参数CasterId值。
     * - 如果您通过直播控制台创建导播台，请通过**直播控制台** > **导播台** > **云导播台**页面查看。
     * > 直播控制台云导播台页面导播台列表中的导播台名称即导播台ID。
     * @example `LIVEPRODUCER_POST-cn-0pp1czt****`
     */
    "CasterId": string;
    /**
     * 组件ID。如果您通过[AddCasterComponent接口](~~63160~~)添加导播台组件，请查看AddCasterComponent接口调用返回的参数ComponentId值。
     * @example `21926b36-7dd2-4fde-ae25-51b5bc8e****`
     */
    "ComponentId"?: string;
}
