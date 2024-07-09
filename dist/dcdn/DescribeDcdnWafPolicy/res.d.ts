export interface DescribeDcdnWafPolicyResponse {
    /**
     * 请求ID。
     * @example `66A98669-CC6E-4F3E-80A6-3014697B11AE`
     */
    RequestId: string;
    /**
     * 防护策略信息。
     */
    Policy: {
        /**
         * 防护策略状态，取值：
         * - on：开启。
         * - off：关闭。
         * @example `on`
         */
        PolicyStatus: string;
        /**
         * 防护策略类型，目前支持以下场景：
         * - waf_group：Web基础防护。
         * - custom_acl：自定义防护策略。
         * - whitelist：白名单。
         * @example `waf_group`
         */
        DefenseScene: string;
        /**
         * 使用该防护策略的域名个数。
         * @example `22`
         */
        DomainCount: number;
        /**
         * 该防护策略对应的具体防护规则配置（仅支持Bot场景）。具体请参见[BatchCreateDcdnWafRules](~~BatchCreateDcdnWafRules~~)。
         * @example `{"type":"target_type",  "status":"on","config":{"target":"app"},"action":""}`
         */
        RuleConfigs: string;
        /**
         * 防护策略名称。
         * @example `policy_test`
         */
        PolicyName: string;
        /**
         * 防护策略ID。
         * @example `100001`
         */
        PolicyId: number;
        /**
         * 该防护策略下的防护规则个数。
         * @example `9`
         */
        RuleCount: number;
        /**
         * 修改时间。日期格式按照ISO8601表示法，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
         * @example `2021-12-29T17:08:45Z`
         */
        GmtModified: string;
        /**
         * 当前策略是否为默认策略，取值：
         * - default：默认策略。
         * - custom：非默认策略。
         * @example `default`
         */
        PolicyType: string;
    };
}
