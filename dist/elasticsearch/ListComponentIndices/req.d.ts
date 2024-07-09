export interface ListComponentIndicesRequest {
    /**
     * 实例ID。
     * @example `es-cn-tl329rbpc0001****`
     */
    "InstanceId": string;
    /**
     * 组合模板名称。
     * @example `template`
     */
    "name"?: string;
    /**
     * 分页查询时设置的页数。默认值：1。
     * @example `5`
     */
    "page"?: number;
    /**
     * 分页查询时设置的每页条数。默认值：10。
     * @example `10`
     */
    "size"?: number;
}
