export interface ListInstanceIndicesRequest {
    /**
     * 实例ID。
     * @example `es-cn-tl329rbpc0001****`
     */
    "InstanceId": string;
    /**
     * 是否获取所有索引，取值含义如下：
     * - true：返回包含系统索引在内的索引列表。
     * - false（默认值）：返回除系统索引外的索引列表。
     * @example `false`
     */
    "all"?: boolean;
    /**
     * 索引名称，支持模糊匹配。
     * @example `log-0001`
     */
    "name"?: string;
    /**
     * 是否只查看托管中的索引，取值含义如下：
     * - true：只查看托管中的索引。
     * - false（默认值）：查看全部索引。
     * @example `false`
     */
    "isManaged"?: boolean;
    /**
     * 是否仅查看OpenStore冷阶段索引。可选值：
     * - true：仅查看OpenStore冷阶段索引。
     * - false（默认值）：查看全部索引。
     * @example `false`
     */
    "isOpenstore"?: boolean;
    /**
     * 实例列表的页码。起始值：1，默认值：1。
     * @example `1`
     */
    "page"?: number;
    /**
     * 分页查询时设置的每页条数。最大值：100，默认值：20。
     * @example `15`
     */
    "size"?: number;
}
