export interface ListApmRequest {
    /**
     * 实例名称。
     * @example `APMtest`
     */
    "description"?: string;
    /**
     * 实例ID。
     * @example `apm-cn-i7m2fuae****`
     */
    "instanceId"?: string;
    /**
     * 关联的Elasticsearch实例ID。
     * @example `es-cn-i7m2fsfhc001x****`
     */
    "output"?: string;
    /**
     * 实例列表的页码。默认值：1。
     * @example `1`
     */
    "page"?: number;
    /**
     * 分页查询时设置的每页条数。默认值：20。
     * @example `10`
     */
    "size"?: number;
}
