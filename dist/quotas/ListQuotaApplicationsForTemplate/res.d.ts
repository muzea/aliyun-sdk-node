export interface ListQuotaApplicationsForTemplateResponse {
    /**
     * 请求ID。
     * @example `D47B3A10-CDAC-5412-B2EE-EC9A3DBE9053`
     */
    RequestId: string;
    /**
     * 配额申请历史列表。
     */
    QuotaBatchApplications: {
        /**
         * 云服务名称缩写。
         * @example `vpc`
         */
        ProductCode: string;
        /**
         * 配额ID。
         * @example `q_fhoz4k`
         */
        QuotaActionCode: string;
        /**
         * 配额申请批次ID。
         * @example `d314d6ae-867d-484c-9009-3d421a80****`
         */
        BatchQuotaApplicationId: string;
        /**
         * 配额生效的UTC时间。
         * @example `2023-05-22T16:00:00Z`
         */
        EffectiveTime: string;
        /**
         * 配额失效的UTC时间。
         * @example `2024-05-14T02:08:56Z`
         */
        ExpireTime: string;
        /**
         * 配额提升申请的UTC时间。
         * @example `2022-09-23T02:38:18Z`
         */
        ApplyTime: string;
        /**
         * 配额申请的值。
         * @example `105`
         */
        DesireValue: number;
        /**
         * 配额种类。取值：
         * - CommonQuota：通用配额。
         * - FlowControl：API速率配额。
         * - WhiteListLabel：权益配额。
         * @example `CommonQuota`
         */
        QuotaCategory: string;
        /**
         * 不同审批状态的申请单数量。
         */
        AuditStatusVos: {
            /**
             * 配额提升申请的审批状态。取值：
             * - Disagree：拒绝。
             * - Agree：审核通过。
             * - Process：审核中。
             * - Cancel：已关闭。
             * @example `Agree`
             */
            Status: string;
            /**
             * 审批单数量。
             * @example `4`
             */
            Count: number;
        }[];
        /**
         * 配额维度。
         * 格式：{"regionId":"cn-hangzhou"}。
         * @example `{"regionId":"cn-hangzhou"}`
         */
        Dimensions: any;
        /**
         * 配额申请的资源目录成员的阿里云账号（主账号）列表。
         */
        AliyunUids: string[];
        /**
         * 配额提升申请的原因。
         * @example `配额满`
         */
        Reason: string;
    }[];
    /**
     * 用来标记开始读取数据的位置。
     * @example `1`
     */
    NextToken: string;
    /**
     * 本次请求返回的全部记录条数。
     * @example `67`
     */
    TotalCount: number;
    /**
     * 本次查询的最大记录条数。
     * @example `30`
     */
    MaxResults: number;
}
