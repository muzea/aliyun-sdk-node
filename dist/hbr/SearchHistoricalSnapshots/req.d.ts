export interface SearchHistoricalSnapshotsRequest {
    /**
     * 数据源类型。取值范围：
     * * **ECS_FILE**：表示ECS文件的备份快照。
     * * **OSS**：表示阿里云OSS的备份快照。
     * * **NAS**：表示阿里云NAS的备份快照。
     * @example `ECS_FILE`
     */
    "SourceType"?: string;
    /**
     * 查询条件。Query示例如下：
     * ```
     * [
     *   {
     *     "field": "VaultId",
     *     "value": "v-0003rf9m*****qx5",
     *     "operation": "MATCH_TERM"
     *   },
     *   {
     *     "field": "InstanceId",
     *     "value": "i-bp1i20zq2*****e9368m",
     *     "operation": "MATCH_TERM"
     *   },
     *   {
     *     "field": "PlanId",
     *     "value": "plan-0005vk*****gkd1iu4f",
     *     "operation": "MATCH_TERM"
     *   },
     *   {
     *     "field": "CompleteTime",
     *     "value": 1626769913,
     *     "operation": "GREATER_THAN_OR_EQUAL"
     *   }
     * ]
     * ```
     * - 支持的field如下：
     *     - VaultId：必选参数，表示仓库ID。
     *     - InstanceId：仅当SourceType=ECS_FILE时，必选参数，表示ECS实例ID。
     *     -  Bucket ：仅当SourceType=OSS时，必选参数，表示OSS bucket名称。
     *     - FileSystemId：仅当SourceType=NAS时，必选参数，表示NAS文件系统ID。
     *     - CreateTime ：仅当SourceType=NAS时，必选参数，表示NAS文件系统创建时间。
     *     - CompleteTime：快照完成时间。
     *     - PlanId：备份计划ID。
     * - 支持的operation如下：
     *     - MATCH_TERM：精确匹配。
     *     - GREATER_THAN：大于。
     *     - GREATER_THAN_OR_EQUAL：大于等于。
     *     - LESS_THAN：小于。
     *     - LESS_THAN_OR_EQUAL：小于等于。
     *     - BETWEEN：区间，value为JSON数组` [下界,上界]`。
     *     - IN：在集合中，value为数组。
     *     - NOT_IN：不在集合中，value为数组。
     * @example `[   {     "field": "VaultId",     "value": "v-0003rf9m17pap3ltpqx5",     "operation": "MATCH_TERM"   },   {     "field": "InstanceId",     "value": "i-bp1i20zq2wuzdie9368m",     "operation": "MATCH_TERM"   },   {     "field": "PlanId",     "value": "plan-0005vkqhpesqgkd1iu4f",     "operation": "MATCH_TERM"   },   {     "field": "CompleteTime",     "value": 1626769913,     "operation": "GREATER_THAN_OR_EQUAL"   } ]`
     */
    "Query"?: any[];
    /**
     * 本次查询需要返回的最大数量。
     * 如果只为了获取行数，无需具体数据，可以设置`limit=0`，即不返回任意一行数据。
     * @example `10`
     */
    "Limit"?: number;
    /**
     * 获取下一页快照所需的Token。
     * @example `caeba0bbb2be03f84eb48b699f0a****`
     */
    "NextToken"?: string;
    /**
     * 排序字段。
     * @example `CreatedTime`
     */
    "SortBy"?: string;
    /**
     * 排序方式，默认值为ASC。
     * - ASC：升序
     * - DESC：降序
     * @example `ASC`
     */
    "Order"?: string;
}
