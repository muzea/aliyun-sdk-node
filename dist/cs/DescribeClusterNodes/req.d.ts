export interface DescribeClusterNodesRequest {
    /**
     * 集群ID。
     * @example `c82e6987e2961451182edacd74faf****`
     */
    "ClusterId": string;
    /**
     * 节点实例ID列表，多值使用英文逗号（,）分隔。
     * @example `"i-bp11xjhwkj8k966u****,i-bp1dmhc2bu5igkyq****"`
     */
    "instanceIds"?: string;
    /**
     * 节点池ID。
     * @example `np****`
     */
    "nodepool_id"?: string;
    /**
     * 集群节点状态，按照集群节点运行状态进行过滤，取值：
     * - `all`：以下4种状态的集群节点。
     * - `running`：正在运行的集群节点。
     * - `removing`：正在删除的集群节点。
     * - `initial`：正在初始化的集群节点。
     * - `failed`：创建失败的集群节点。
     * 默认值：`all`。
     * @example `running`
     */
    "state"?: string;
    /**
     * 每页显示的记录数。取值范围为[1,100]。
     * 默认值：10。
     * @example `10`
     */
    "pageSize"?: string;
    /**
     * 页码。
     * 默认值：1。
     * @example `1`
     */
    "pageNumber"?: string;
}
