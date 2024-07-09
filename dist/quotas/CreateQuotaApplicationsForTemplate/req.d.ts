export interface CreateQuotaApplicationsForTemplateRequest {
    /**
     * 配额类型。取值：
     * - CommonQuota：通用配额。
     * - FlowControl：API速率配额。
     * - WhiteListLabel：权益配额。
     * @example `CommonQuota`
     */
    "QuotaCategory": string;
    /**
     * 云产品的缩写名称。
     * > 关于如何获取云产品的缩写名称，请参见[ListProducts](~~440555~~)中的`ProductCode`。
     * @example `ecs-spec`
     */
    "ProductCode": string;
    /**
     * 配额ID。
     * > 关于如何获取云产品的配额ID，请参见[ListProductQuotas](~~440554~~)中的`QuotaActionCode`。
     * @example `ecs.g5.2xlarge`
     */
    "QuotaActionCode": string;
    /**
     * 配额维度。
     */
    "Dimensions"?: {
        /**
         * 配额维度的Key。
         * > - N的取值范围取决于云产品支持的维度个数。
         * > - 当`ProductCode`为`ecs`、`ecs-spec`、`actiontrail`、`ess`等时，配额维度的Key和Value必须同时设置。
         * @example `regionId`
         */
        Key: string;
        /**
         * 配额维度的Value。
         * > - N的取值范围取决于云产品支持的维度个数。
         * > - 当`ProductCode`为`ecs`、`ecs-spec`、`actiontrail`、`ess`等时，配额维度的Key和Value必须同时设置。
         * @example `cn-hangzhou`
         */
        Value: string;
    }[];
    /**
     * 配额申请的值。
     * > - 根据[ListProductQuotas](~~440554~~)中目标配额的`TotalUsage`（配额用量）和`ApplicableRange`（配额项可申请范围）来设置配额申请值。
     * > - 配额申请由各云产品的技术支持进行审批。如果您想增加通过几率，请在配额申请时填写合理的申请数值和详尽的申请理由。
     * @example `12`
     */
    "DesireValue": number;
    /**
     * 配额申请的原因。
     * > 配额申请由各云服务的技术支持进行审批。如果您想增加通过几率，请在配额申请时填写合理的申请数值和详尽的申请理由。
     * @example `业务扩容需要`
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
     * 配额申请结果通知的语言。取值：
     * - zh（默认值）：中文。
     * - en：英文。
     * @example `zh`
     */
    "EnvLanguage"?: string;
    /**
     * 配额生效的UTC时间。该参数仅适用于权益配额（WhiteListLabel）。
     *
     * >如果当前账号不选择生效时间，则默认为提交时间。
     * @example `2021-01-19T09:25:56Z`
     */
    "EffectiveTime"?: string;
    /**
     * 配额失效的UTC时间。该参数仅适用于权益配额（WhiteListLabel）。
     * > 如果当前账号未选择失效时间，则失效时间为当前配额生效时间开始起99年。
     * @example `2021-01-20T09:25:56Z`
     */
    "ExpireTime"?: string;
    /**
     * 配额申请的资源目录成员的阿里云账号（主账号）列表。
     * > 单次最多只支持为50个成员批量申请提升配额。关于资源目录的成员，请参见[ListAccounts](~~604207~~)。
     */
    "AliyunUids": string[];
}
