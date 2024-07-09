export interface ListVpcEndpointsRequest {
    /**
     * 实例ID。
     * @example `es-cn-2r429tctl000d****`
     */
    "InstanceId": string;
    /**
     * 分页查询时设置的每页条数。默认值：20。
     * @example `10`
     */
    "size"?: number;
    /**
     * 列表的页码。
     * 起始值：1，默认值：1。
     * @example `1`
     */
    "page"?: number;
}
