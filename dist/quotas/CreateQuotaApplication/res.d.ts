export interface CreateQuotaApplicationResponse {
    /**
     * 请求ID。
     * @example `D47B3A10-CDAC-5412-B2EE-EC9A3DBE9053`
     */
    RequestId: string;
    /**
     * 配额提升申请的审批状态。取值：
     * - Disagree：拒绝。
     * - Agree：审核通过。
     * - Process：审核中。
     * - Cancel：已关闭。
     * @example `Process`
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
     * 配额申请ID。
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
     * 云产品名称缩写。
     * @example `ecs`
     */
    ProductCode: string;
    /**
     * 配额ARN。
     * @example `acs:quotas::141339776561****:quota/ecs/q_security-groups`
     */
    QuotaArn: string;
    /**
     * 配额提升申请时间。
     * @example `2021-01-19T09:25:56Z`
     */
    ApplyTime: string;
    /**
     * 配额提升申请审批通过的配额值。
     * @example `804`
     */
    ApproveValue: number;
    /**
     * 配额维度。
     * @example `{"regionId":"cn-hangzhou"}`
     */
    Dimension: any;
    /**
     * 配额提升申请结果是否通知。取值：
     * - 0：不通知。
     * - 3：通知。
     * @example `3`
     */
    NoticeType: number;
    /**
     * 配额生效时间。
     * @example `2021-01-19T09:25:56Z`
     */
    EffectiveTime: string;
    /**
     * 配额失效时间。
     * @example `2021-01-20T09:25:56Z`
     */
    ExpireTime: string;
    /**
     * 配额单位。
     * @example `个`
     */
    QuotaUnit: string;
}
