export interface ListProvisionedProductPlansRequest {
    /**
     * 过滤条件。
     */
    "Filters"?: {
        /**
         * 过滤条件的名称。取值：
         * - ProvisionedProductPlanName：按计划名称查找，完整匹配（忽略大小写）。
         * - ProvisionedProductPlanApprover：按审批人精确查找，格式为`RamUser/RamRole:<审批人名称>`，可多选。
         * - ProvisionedProductPlanApproverName：按审批人名称查找，直接输入审批人的RAM实体名称，可多选。
         * - ProvisionedProductPlanStatus：按计划状态查找，直接输入计划状态，可多选。
         * - ProvisionedProductPlanOwnerUid：按计划归属云账号ID精确查找。
         * - FullTextSearch：全文检索，按计划名称查找，模糊匹配。
         * @example `FullTextSearch`
         */
        Key: string;
        /**
         * 过滤条件的值。
         * @example `ECS`
         */
        Value: string;
    }[];
    /**
     * 排序字段。
     * 取值为CreateTime，表示计划创建时间。
     * @example `CreateTime`
     */
    "SortBy"?: string;
    /**
     * 排序方式。取值：
     * - Asc：正序。
     * - Desc（默认值）：倒序。
     * @example `Desc`
     */
    "SortOrder"?: string;
    /**
     * 页码。
     * 起始值：1。默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页时每页显示的数据行数。
     * 取值范围：1~100。起始值：1。默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 访问过滤器。取值：
     * - User（默认值）：用户。
     * - Account：账号。
     * - ResourceDirectory：资源目录。
     * @example `User`
     */
    "AccessLevelFilter"?: string;
    /**
     * 审批维度访问过滤器。取值：
     * - ReceivedRequests：待我审批。
     * - ApprovalHistory：审批历史。
     * - AccountRequests：账号级别全部审批。
     * - ResourceDirectoryRequests：资源目录级别全部审批。
     * @example `ReceivedRequests`
     */
    "ApprovalFilter"?: string;
    /**
     * 实例ID。
     * @example `pp-bp1ddg1n2a****`
     */
    "ProvisionedProductId"?: string;
}
