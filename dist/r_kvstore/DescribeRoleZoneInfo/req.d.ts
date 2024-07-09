export interface DescribeRoleZoneInfoRequest {
    /**
     * 实例ID，可调用[DescribeInstances](~~60933~~)接口获取。
     * @example `r-t4nlenc2p04uvb****`
     */
    "InstanceId": string;
    /**
     * 查询的目标节点类型，取值：
     * * **0**：Proxy（代理）节点。
     *   > 该参数仅支持集群与读写分离架构实例。
     * * **1**：数据节点，默认值。
     * @example `0`
     */
    "QueryType"?: number;
    /**
     * 页码，大于**0**且不超过Integer数据类型的最大值，默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页可展示的记录数，取值：**10**、**20**、**50**，默认值为**10**.
     * @example `10`
     */
    "PageSize"?: number;
}
