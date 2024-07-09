export interface ModifyCasterVideoResourceResponse {
    /**
     * 导播台ID。可作为查询导播台视频源、添加导播台布局、查询导播台布局列表的请求参数。
     * @example `LIVEPRODUCER_POST-cn-0pp1czt****`
     */
    CasterId: string;
    /**
     * 请求ID。
     * @example `CF60DB6A-7FD6-426E-9288-122CC1A52FA7`
     */
    RequestId: string;
    /**
     * 资源ID。
     * @example `98461064-1c94-4dc1-85ce-94098764****`
     */
    ResourceId: string;
}
