export interface ListProductQuotasRequest {
    /**
     * 用来标记开始查询数据的位置。置空表示从头开始。
     * @example `1`
     */
    "NextToken"?: string;
    /**
     * 本次查询的最大记录条数。
     * 取值范围：1~100。默认值：30。
     * @example `30`
     */
    "MaxResults"?: number;
    /**
     * 云产品的缩写名称。
     * > 关于如何获取云产品的缩写名称，请参见[ListProducts](~~440555~~)中的`ProductCode`。
     * @example `ecs`
     */
    "ProductCode": string;
    /**
     * 配额ID。
     * @example `q_security-groups`
     */
    "QuotaActionCode"?: string;
    /**
     * 配额的搜索关键字。
     * @example `security`
     */
    "KeyWord"?: string;
    /**
     * 配额支持的排序方式。取值：
     * - TIME：按最近更新时间排序。
     * - TOTAL：按总配额用量排序。
     * - RESERVED：按预留配额用量排序。
     * > 该参数仅针对云服务器ECS规格配额（ecs-spec），如果不设置，则为空。
     * @example `TIME`
     */
    "SortField"?: string;
    /**
     * 配额支持的排序方式。取值：
     * - Ascending：升序。
     * - Descending：降序。
     * > 该参数仅针对云服务器ECS规格配额（ecs-spec），如果不设置，则为空。
     * @example `Ascending`
     */
    "SortOrder"?: string;
    /**
     * 配额维度。
     */
    "Dimensions"?: {
        /**
         * 配额维度的Key。
         * > N的取值范围取决于对应云产品支持的维度个数。
         * @example `regionId`
         */
        Key: string;
        /**
         * 配额维度的Value。
         * > N的取值范围取决于对应云产品支持的维度个数。
         * @example `cn-hangzhou`
         */
        Value: string;
    }[];
    /**
     * 配额种类。取值：
     * - CommonQuota（默认值）：通用配额。
     * - FlowControl：API速率配额。
     * - WhiteListLabel：权益配额。
     * @example `FlowControl`
     */
    "QuotaCategory"?: string;
    /**
     * 维度组代码。
     * @example `entconsole_w1j3msbo2g`
     */
    "GroupCode"?: string;
}
