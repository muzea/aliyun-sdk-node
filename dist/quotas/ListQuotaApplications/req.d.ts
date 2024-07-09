export interface ListQuotaApplicationsRequest {
    /**
     * 用来标记开始查询数据的位置。置空表示从头开始。
     * @example `1`
     */
    "NextToken"?: string;
    /**
     * 本次查询的最大记录条数。
     * 取值范围：1~200。默认值：30。
     * @example `1`
     */
    "MaxResults"?: number;
    /**
     * 云产品的缩写名称。
     * @example `csk`
     */
    "ProductCode"?: string;
    /**
     * 配额ID。
     * @example `q_i5uzm3`
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
     * 配额提升申请的搜索关键字。
     * @example `集群`
     */
    "KeyWord"?: string;
    /**
     * 配额维度。
     */
    "Dimensions"?: {
        /**
         * 配额维度的Key。
         * > N的取值范围取决于云产品支持的维度个数。
         * @example `regionId`
         */
        Key: string;
        /**
         * 配额维度的Value。
         * > N的取值范围取决于云产品支持的维度个数。
         * @example `cn-hangzhou`
         */
        Value: string;
    }[];
    /**
     * 配额种类。取值：
     * - CommonQuota：通用配额。
     * - FlowControl：API速率配额。
     * - WhiteListLabel：权益配额。
     * @example `CommonQuota`
     */
    "QuotaCategory"?: string;
}
