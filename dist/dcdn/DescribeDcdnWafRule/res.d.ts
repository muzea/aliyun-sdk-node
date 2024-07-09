export interface DescribeDcdnWafRuleResponse {
    /**
     * 请求ID。
     * @example `66A98669-CC6E-4F3E-80A6-3014697B11AE`
     */
    RequestId: string;
    /**
     * 防护规则信息。
     */
    Rule: {
        /**
         * 防护规则状态，取值：
         * - on：开启
         * - off：关闭
         * @example `on`
         */
        RuleStatus: string;
        /**
         * 防护策略类型，目前支持以下场景：
         * - waf_group：Web基础防护
         * - custom_acl：自定义防护策略
         * - whitelist：白名单
         * @example `custom_acl`
         */
        DefenseScene: string;
        /**
         * 防护策略ID。
         * @example `200001`
         */
        PolicyId: number;
        /**
         * 修改时间。日期格式按照ISO8601表示法，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
         * @example `2021-12-29T17:08:45Z`
         */
        GmtModified: string;
        /**
         * 防护规则ID。
         * @example `100001`
         */
        RuleId: number;
        /**
         * 防护规则名称。
         * @example `rule_1`
         */
        RuleName: string;
        /**
         * 防护规则配置。
         * @example `{"action":"monitor","actionExternal":"{}","ccStatus":1,"conditions":[{"key":"URL","opValue":"eq","targetKey":"request_uri","values":"/example"},{"key":"Header","opValue":"eq","subKey":"trt","targetKey":"header.trt","values":"3333"}],"effect":"service","name":"aaa333","origin":"custom","ratelimit":{"interval":5,"status":{"code":404,"count":2,"stat":{"mode":"count","value":2.0}},"target":"remote_addr","threshold":2,"ttl":1800}}`
         */
        RuleConfig: string;
    };
}
