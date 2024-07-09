export interface GetQuotaApplicationResponse {
    /**
     * 请求ID。
     * @example `7BBD1D37-094C-4485-8B7D-64682F82BC18`
     */
    RequestId: string;
    /**
     * 配额提升申请详情。
     */
    QuotaApplication: {
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
         * 配额提升申请值。
         * @example `804`
         */
        DesireValue: number;
        /**
         * 配额ID。
         * @example `q_security-groups`
         */
        QuotaActionCode: string;
        /**
         * 配额名称。
         * @example `安全组总数量上限`
         */
        QuotaName: string;
        /**
         * 配额提升申请ID。
         * @example `d314d6ae-867d-484c-9009-3d421a80****`
         */
        ApplicationId: string;
        /**
         * 配额提升申请原因。
         * @example `扩容`
         */
        Reason: string;
        /**
         * 配额提升申请审批意见。
         * @example `同意`
         */
        AuditReason: string;
        /**
         * 配额描述。
         * @example `当前账户可拥有的安全组的最大数量`
         */
        QuotaDescription: string;
        /**
         * 云服务名称缩写。
         * @example `ecs`
         */
        ProductCode: string;
        /**
         * 配额ARN。
         * @example `acs:quotas:cn-hangzhou:120886317861****:quota/ecs/q_security-groups/`
         */
        QuotaArn: string;
        /**
         * 配额提升申请时间。
         * @example `2021-01-19T09:25:56Z`
         */
        ApplyTime: string;
        /**
         * 配额审批额度。
         * @example `10`
         */
        ApproveValue: number;
        /**
         * 配额维度。
         * 格式：`{"regionId":"地域"}`。
         * @example `["cn-shanghai","cn-hangzhou"]`
         */
        Dimension: any;
        /**
         * 通知类型。取值：
         * - 0：无需通知。
         * - 1：邮件通知。
         * - 2：短信通知。
         * @example `0`
         */
        NoticeType: number;
        /**
         * 配额生效时间。
         * @example `2021-01-19 15:30:00`
         */
        EffectiveTime: string;
        /**
         * 配额过期时间。
         * @example `2023-06-29 15:30:00`
         */
        ExpireTime: string;
        /**
         * 配额单位。
         * @example `个`
         */
        QuotaUnit: string;
    };
}
