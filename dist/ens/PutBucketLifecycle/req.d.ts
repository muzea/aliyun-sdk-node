export interface PutBucketLifecycleRequest {
    /**
     * Bucket名称。
     * @example `test`
     */
    "BucketName": string;
    /**
     * 标识规则的唯⼀ID。最多由255个字节组成。
     * - 创建新规则时无需配置该参数，系统会⾃动⽣成⼀个唯⼀ID。
     * - 更新已有规则需指定RuleId，且该RuleId对应的规则必须存在，否则会报错。
     * @example `1`
     */
    "RuleId"?: string;
    /**
     * 规则状态。取值范围：
     * - **Enabled**：定期执⾏该规则。
     * - **Disabled**：忽略该规则。
     * @example `Enabled`
     */
    "Status": string;
    /**
     * 指定规则所适⽤的前缀（Prefix），不⽀持设置相同的Prefix。
     * - 如果指定了Prefix，则表示此规则仅适⽤于Bucket中与Prefix匹配的Object。
     * - 如果Prefix置空，则表示此规则适⽤于Bucket中所有Object。
     * @example `image`
     */
    "Prefix"?: string;
    /**
     * 指定过期⽇期，存储会对最后更新时间早于该⽇期的数据执⾏⽣命周期规则。
     * ⽇期设置需按照ISO8601标准表示，并需要使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * >ExpirationDays和CreateBeforeDate互斥，必须设置⼀个。
     * @example `2023-10-12T05:45:00Z`
     */
    "CreatedBeforeDate"?: string;
    /**
     * 指定⽣命周期规则在距离Object最后更新多少天后⽣效。取值需大于0，为正整数。
     * >ExpirationDays和CreateBeforeDate互斥，必须设置⼀个。
     * @example `5`
     */
    "ExpirationDays"?: number;
    /**
     * 是否允许前缀重叠。取值：
     * - **true**：允许重复。
     * - **false**（默认值）：不允许重复。
     * @example `false`
     */
    "AllowSameActionOverlap"?: string;
}
