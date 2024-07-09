export interface CreateQuotaApplicationRequest {
    /**
     * 云产品的缩写名称。
     * > 关于如何获取云产品的缩写名称，请参见[ListProductQuotas](~~440554~~)中的`ProductCode`。
     * @example `ecs`
     */
    "ProductCode": string;
    /**
     * 配额ID。
     * > 关于如何获取云产品的配额ID，请参见[ListProductQuotas](~~440554~~)中的`QuotaActionCode`。
     * @example `q_security-groups`
     */
    "QuotaActionCode": string;
    /**
     * 配额申请的值。
     * > - 根据[ListProductQuotas](~~440554~~)中目标配额的`TotalUsage`（配额用量）和`ApplicableRange`（配额项可申请范围）来设置配额申请值。
     * > - 配额申请由各云产品的技术支持进行审批。如果您想增加通过几率，请在配额申请时填写合理的申请数值和详尽的申请理由。
     * @example `804`
     */
    "DesireValue": number;
    /**
     * 配额申请的原因。
     * > 配额申请由各云产品的技术支持进行审批。如果您想增加通过几率，请在配额申请时填写合理的申请数值和详尽的申请理由。
     * @example `扩容`
     */
    "Reason": string;
    /**
     * 配额申请结果是否发送通知。取值：
     * - 0（默认值）：否。
     * - 3：是。
     * @example `0`
     */
    "NoticeType"?: number;
    /**
     * 配额维度。
     */
    "Dimensions"?: {
        /**
         * 配额维度的Key。
         * > - N的取值范围取决于云产品支持的维度个数。
         * > - 当`ProductCode`为`ecs`、`ecs-spec`、`actiontrail`、`ess`等时，配额维度的Key和Value必须设置，且需要同时设置。
         * @example `regionId`
         */
        Key: string;
        /**
         * 配额维度的Value。
         * > - N的取值范围取决于云产品支持的维度个数。
         * > - 当`ProductCode`为`ecs`、`ecs-spec`、`actiontrail`、`ess`等时，配额维度的Key和Value必须设置，且需要同时设置。
         * @example `cn-hangzhou`
         */
        Value: string;
    }[];
    /**
     * 配额类型。
     * - CommonQuota（默认值）：通用配额。
     * - FlowControl：API速率配额。
     * - WhiteListLabel：权益配额。
     * @example `CommonQuota`
     */
    "QuotaCategory"?: string;
    /**
     * ><notice>该参数废弃，不建议使用。></notice>
     * 配额审核模式。取值：
     * - Sync：同步审核。配额中心自动审核，审核结果立即返回，但是申请通过的概率比异步审核小，提升额度的有效期为1小时。
     *
     * - Async：异步审核。人工审核，申请通过的概率比较大，提升额度的有效期为1个月。
     * @example `Sync`
     */
    "AuditMode"?: string;
    /**
     * 配额告警通知的语言。取值：
     * - zh（默认值）：中文。
     * - en：英文。
     * @example `zh`
     */
    "EnvLanguage"?: string;
    /**
     * 配额失效的UTC时间。
     * 该参数仅适用于权益配额（WhiteListLabel）。
     * > 当您未选择失效时间时，默认为提交时间。
     * @example `2021-01-20T09:25:56Z`
     */
    "ExpireTime"?: string;
    /**
     * 配额生效的UTC时间。
     * 该参数仅适用于权益配额（WhiteListLabel）。
     * > 当您未选择生效时间时，默认为当前配额开始时间起99年。
     * @example `2021-01-19T09:25:56Z`
     */
    "EffectiveTime"?: string;
}
