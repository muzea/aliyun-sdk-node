export interface ListQuotaApplicationsForTemplateRequest {
    /**
     * 云产品的缩写名称。
     * > 关于如何获取云产品的缩写名称，请参见[ListProducts](~~440555~~)中的`ProductCode`。
     * @example `ecs-spec`
     */
    "ProductCode"?: string;
    /**
     * 配额ID。
     * @example `ecs.g5.2xlarge`
     */
    "QuotaActionCode"?: string;
    /**
     * 配额申请批次ID。
     * @example `d314d6ae-867d-484c-9009-3d421a80****`
     */
    "BatchQuotaApplicationId"?: string;
    /**
     * 配额种类。取值：
     * - CommonQuota：通用配额。
     * - FlowControl：API速率配额。
     * - WhiteListLabel：权益配额。
     * @example `CommonQuota`
     */
    "QuotaCategory"?: string;
    /**
     * 用来标记开始读取数据的位置。
     * > 不设置该参数，表示从头开始。
     * @example `4`
     */
    "NextToken"?: string;
    /**
     * 单次请求返回结果的最大条数。
     * 取值范围：1~100。默认值：30。
     * @example `30`
     */
    "MaxResults"?: number;
    /**
     * 配额申请开始的UTC时间。
     * > `ApplyStartTime`和`ApplyEndTime`之间的时间间隔必须小于等于7天。如果未设置这两个参数，则配额申请时间为最近7天。
     * @example `2023-05-22T16:00:00Z
    `
     */
    "ApplyStartTime"?: string;
    /**
     * 配额申请结束的UTC时间。
     * > `ApplyStartTime`和`ApplyEndTime`之间的时间间隔必须小于等于7天。如果未设置这两个参数，则配额申请时间为最近7天。
     * @example `2023-05-22T16:00:00Z
    `
     */
    "ApplyEndTime"?: string;
}
