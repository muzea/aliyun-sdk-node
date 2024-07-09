export interface ListKibanaPluginsRequest {
    /**
     * 实例ID。
     * @example `es-cn-oew1q8bev0002****`
     */
    "InstanceId": string;
    /**
     * 实例列表的页码。默认值：1。
     * @example `1`
     */
    "page"?: string;
    /**
     * 分页查询时设置的每页条数。
     * @example `10`
     */
    "size"?: number;
}
