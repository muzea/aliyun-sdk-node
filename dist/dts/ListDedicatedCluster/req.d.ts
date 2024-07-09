export interface ListDedicatedClusterRequest {
    /**
     * 区域，指定的查询条件。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 查询的键，取值为：
     * - **NAME**：集群名称。
     * - **INSTANCE**：集群实例ID。
     * - **DEDICAETEDCLUSTERID**：独享集群ID。
     * > 您需要传入**Params**，指定查询条件的具体内容。
     * @example `NAME`
     */
    "Type"?: string;
    /**
     * 查询条件的具体内容。
     * > 您需要提前传入**Type**，指定查询条件。
     * @example `dtspk3f13r731m****`
     */
    "Params"?: string;
    /**
     * 集群状态，取值为：
     * - **init**：初始化。
     * - **schedule**：待调度。
     * - **running**：运行中。
     * - **upgrade**：升级中。
     * - **downgrade**,：降级中。
     * - **locked**：已锁定。
     * - **releasing**：释放中。
     * - **released**：已经释放。
     * @example `init`
     */
    "State"?: string;
    /**
     * 排序方向，取值为：
     * - asc：正序，为默认值。
     * - desc：倒序。
     * @example `asc`
     */
    "OrderDirection"?: string;
    /**
     * 当返回结果包含多个DTS独享集群实例时，传入本参数指定实例的排序依据，取值：
     * - **gmtCreated**：创建时间
     * - **orderCount**：节点数
     * @example `gmtCreated`
     */
    "OrderColumn"?: string;
    /**
     * 每页记录集群数量。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 页码，取值为大于0且不超过Integer数据类型的最大值，默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    "ResourceGroupId"?: string;
}
