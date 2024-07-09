export interface DeleteCasterLayoutResponse {
    /**
     * 导播台ID。可作为修改导播台布局、查询导播台布局列表、添加导播台组件、查询导播台组件列表的请求参数。
     * @example `a2b8e671-2fe5-4642-a2ec-bf93880e****`
     */
    CasterId: string;
    /**
     * 布局ID。可作为查询导播台布局列表的请求参数。
     * @example `21926b36-7dd2-4fde-ae25-51b5bc8e****`
     */
    LayoutId: string;
    /**
     * 请求ID。
     * @example `16A96B9A-F203-4EC5-8E43-CB92E68F4CD8`
     */
    RequestId: string;
}
