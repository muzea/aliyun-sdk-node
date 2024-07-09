export interface ListQuotaApplicationsDetailForTemplateResponse {
    /**
     * 配额申请详情列表。
     */
    QuotaApplications: {
        /**
         * 配额申请批次ID。
         * @example `d314d6ae-867d-484c-9009-3d421a80****`
         */
        BatchQuotaApplicationId: string;
        /**
         * 云服务名称缩写。
         * @example `ecs`
         */
        ProductCode: string;
        /**
         * 配额ID。
         * @example `ecs.n1.large`
         */
        QuotaActionCode: string;
        /**
         * 配额名称。
         * @example `集群最大节点数`
         */
        QuotaName: string;
        /**
         * 配额描述。
         * @example `集群最大节点数`
         */
        QuotaDescription: string;
        /**
         * 配额单位。
         * @example `GiB`
         */
        QuotaUnit: string;
        /**
         * 配额ARN。
         * @example `acs:quotas:*:120886317861****:quota/csk/q_i5uzm3`
         */
        QuotaArn: string;
        /**
         * 配额维度。
         */
        QuotaDimension: any;
        /**
         * 配额提升申请的ID。
         * @example `b926571d-cc09-4711-b547-58a615f0****`
         */
        ApplicationId: string;
        /**
         * 配额提升申请的配额值。
         * @example `60`
         */
        DesireValue: number;
        /**
         * 配额提升申请的原因。
         * @example `业务扩张`
         */
        Reason: string;
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
         * 配额提升申请审批通过的配额值。
         * @example `101`
         */
        ApproveValue: number;
        /**
         * 配额生效的UTC时间。
         * @example `2021-01-15T11:46:25Z`
         */
        EffectiveTime: string;
        /**
         * 配额失效的UTC时间。
         * @example `2021-01-17T11:46:25Z`
         */
        ExpireTime: string;
        /**
         * 配额提升申请的UTC时间。
         * @example `2021-01-15T09:13:53Z`
         */
        ApplyTime: string;
        /**
         * 配额提升申请的审批意见。
         * @example `同意`
         */
        AuditReason: string;
        /**
         * 配额提升申请结果是否通知。取值：
         * - 0：否。
         * - 3：是。
         * @example `3`
         */
        NoticeType: number;
        /**
         * 阿里云账号（主账号）。
         * @example `175376458581****`
         */
        AliyunUid: string;
        /**
         * 配额种类。取值：
         * - CommonQuota（默认值）：通用配额。
         * - WhiteListLabel：权益配额。
         * - FlowControl：API速率配额。
         * @example `CommonQuota`
         */
        QuotaCategory: string;
        /**
         * 配额告警通知的语言。取值：
         * - zh：中文。
         * - en：英文。
         * @example `zh`
         */
        EnvLanguage: string;
        /**
         * 配额计算周期。
         */
        Period: {
            /**
             * 配额计算周期单位。
             * @example `second`
             */
            PeriodUnit: string;
            /**
             * 配额计算周期值。
             * @example `1`
             */
            PeriodValue: number;
        };
    }[];
    /**
     * 用来标记开始查询数据的位置。
     * @example `1`
     */
    NextToken: string;
    /**
     * 本次请求返回的全部记录条数。
     * @example `9`
     */
    TotalCount: number;
    /**
     * 本次查询的最大记录条数。
     * @example `30`
     */
    MaxResults: number;
    /**
     * 请求ID。
     * @example `D47B3A10-CDAC-5412-B2EE-EC9A3DBE9053`
     */
    RequestId: string;
}
