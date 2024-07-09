export interface DeleteCasterComponentResponse {
    /**
     * 导播台ID。可作为查询导播台组件列表、添加导播台节目单、修改导播台组件的请求参数。
     * @example `a2b8e671-2fe5-4642-a2ec-bf93880****`
     */
    CasterId: string;
    /**
     * 组件ID。可作为查询导播台组件列表、修改导播台组件的请求参数。
     * @example `21926b36-7dd2-4fde-ae25-51b5bc8e****`
     */
    ComponentId: string;
    /**
     * 请求ID。
     * @example `16A96B9A-F203-4EC5-8E43-CB92E68F4CD8`
     */
    RequestId: string;
}
