export interface ListQuotaApplicationsDetailForTemplateRequest {
    /**
     * 配额提升申请的阿里云账号（主账号）。
     * @example `135048337611****`
     */
    "AliyunUid"?: string;
    /**
     * 云产品的缩写名称。
     * > 关于如何获取云产品的缩写名称，请参见[ListProducts](~~440555~~)中的`ProductCode`。
     * @example `ecs`
     */
    "ProductCode"?: string;
    /**
     * 配额ID。
     * @example `ecs.c5.large`
     */
    "QuotaActionCode"?: string;
    /**
     * 配额提升申请的审批状态。取值：
     * - Disagree：拒绝。
     * - Agree：审核通过。
     * - Process：审核中。
     * - Cancel：已关闭。
     * @example `Agree`
     */
    "Status"?: string;
    /**
     * 配额申请批次ID。
     * @example `d314d6ae-867d-484c-9009-3d421a80****
    `
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
     * 用来标记开始查询数据的位置。
     * > 不设置该参数，表示从头开始。
     * @example `4`
     */
    "NextToken"?: string;
    /**
     * 本次查询的最大记录条数。
     * 取值范围：1~100。默认值：30。
     * @example `30`
     */
    "MaxResults"?: number;
}
