export interface CreateCasterResponse {
    /**
     * 导播台ID。可作为查询导播台流地址、启动导播台、添加导播台视频资源、添加导播台布局、查询导播台布局列表、添加导播台组件和添加导播台节目单的请求参数。
     * @example `a2b8e671-2fe5-4642-a2ec-bf93880e****`
     */
    CasterId: string;
    /**
     * 请求ID。
     * @example `16A96B9A-F203-4EC5-8E43-CB92E68F4CD8`
     */
    RequestId: string;
}
