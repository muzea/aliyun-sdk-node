export interface ListLogstashPluginsRequest {
    /**
     * 实例ID。
     * @example `ls-cn-oew1qbgl****`
     */
    "InstanceId": string;
    /**
     * 插件名称。
     * @example `logstash-filter-clone`
     */
    "name"?: string;
    /**
     * 插件列表的分页数。默认值：1，最小值：1，最大值：200。
     * @example `10`
     */
    "page"?: number;
    /**
     * 分页查询时设置的每页条数。最小值：1，最大值：200。
     * @example `3`
     */
    "size"?: number;
    /**
     * 插件来源。可选值：
     * - USER：自定义插件
     * - SYSTEM：系统预置插件
     * @example `USER`
     */
    "source"?: string;
}
