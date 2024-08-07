export interface DescribeCasterLayoutsRequest {
    /**
     * 导播台ID。
     * - 如果您通过[CreateCaster接口](~~69338~~)创建导播台，请查看CreateCaster接口调用返回的参数CasterId值。
     * - 如果您通过直播控制台创建导播台，请通过**直播控制台** > **导播台** > **云导播台**页面查看。
     * > 直播控制台云导播台页面导播台列表中的导播台名称即导播台ID。
     * @example `LIVEPRODUCER_POST-cn-0pp1czt****`
     */
    "CasterId": string;
    /**
     * 布局ID。
     * 如果您不提供LayoutId值，则返回导播台下所有布局列表。
     * @example `72d2ec7a-4cd7-4a01-974b-7cd53947****`
     */
    "LayoutId"?: string;
}
