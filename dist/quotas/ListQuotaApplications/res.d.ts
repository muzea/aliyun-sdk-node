export interface ListQuotaApplicationsResponse {
    /**
     * 配额提升申请总数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 配额提升申请的详情。
     */
    QuotaApplications: {
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
         * 配额提升申请的备注。
         * @example `test`
         */
        Comment: string;
        /**
         * 配额提升申请的过期时间。
         * @example `2021-01-17T11:46:25Z`
         */
        ExpireTime: string;
        /**
         * 配额单位。
         * @example `Node`
         */
        QuotaUnit: string;
        /**
         * 配额提升申请的配额值。
         * @example `101`
         */
        DesireValue: number;
        /**
         * 配额提升申请结果是否通知。取值：
         * - 0：否。
         * - 3：是。
         * @example `3`
         */
        NoticeType: number;
        /**
         * 配额ID。
         * @example `q_i5uzm3`
         */
        QuotaActionCode: string;
        /**
         * 配额提升申请的配额维度。
         * @example `{"regionId":"cn-hangzhou"}`
         */
        Dimension: any;
        /**
         * 配额描述。
         * @example `集群最大节点数`
         */
        QuotaDescription: string;
        /**
         * 配额ARN。
         * @example `acs:quotas:*:120886317861****:quota/csk/q_i5uzm3`
         */
        QuotaArn: string;
        /**
         * 配额提升申请的生效时间。
         * @example `2021-01-15T11:46:25Z`
         */
        EffectiveTime: string;
        /**
         * 配额提升申请审批通过的配额值。
         * @example `101`
         */
        ApproveValue: number;
        /**
         * 配额名称。
         * @example `集群最大节点数`
         */
        QuotaName: string;
        /**
         * 配额提升申请的ID。
         * @example `b926571d-cc09-4711-b547-58a615f0****`
         */
        ApplicationId: string;
        /**
         * 配额提升申请的审批意见。
         * @example `同意`
         */
        AuditReason: string;
        /**
         * 配额提升申请的原因。
         * @example `业务扩张`
         */
        Reason: string;
        /**
         * 配额提升申请的时间。
         * @example `2021-01-15T09:13:53Z`
         */
        ApplyTime: string;
        /**
         * 云服务名称缩写。
         * @example `csk`
         */
        ProductCode: string;
        /**
         * 配额计算周期。
         */
        Period: {
            /**
             * 配额计算周期的取值。
             * @example `1`
             */
            PeriodValue: number;
            /**
             * 配额计算周期的单位。取值：
             * - second：秒。
             * - minute：分钟。
             * - hour：小时。
             * - day：天。
             * - week：周
             * @example `second`
             */
            PeriodUnit: string;
        };
    }[];
    /**
     * 用来标记返回查询数据的位置。空表示数据已经查询完毕。
     * @example `1`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `730925FB-0BD0-40AC-AF3A-A6C6E9716879`
     */
    RequestId: string;
    /**
     * 本次查询返回的最大记录条数。
     * @example `1`
     */
    MaxResults: number;
}
