export interface DescribeDcdnWafRulesResponse {
    /**
     * 每页显示的防护规则个数，同请求参数中PageSize。
     * @example `20`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `66A98669-CC6E-4F3E-80A6-3014697B11AE`
     */
    RequestId: string;
    /**
     * 页码，同请求参数中PageNumber。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 防护规则总数。
     * @example `121`
     */
    TotalCount: number;
    /**
     * 防护规则信息。
     */
    Rules: {
        /**
         * 防护规则状态，同请求参数QueryArgs中RuleStatus。
         * @example `on`
         */
        RuleStatus: string;
        /**
         * 防护策略类型，同请求参数QueryArgs中的DefenseScene。
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
         * 防护规则配置信息。
         * @example `{"action":"monitor","actionExternal":"{}","ccStatus":1,"conditions":[{"key":"URL","opValue":"eq","targetKey":"request_uri","values":"/example"},{"key":"Header","opValue":"eq","subKey":"trt","targetKey":"header.trt","values":"3333"}],"effect":"service","name":"aaa333","origin":"custom","ratelimit":{"interval":5,"status":{"code":404,"count":2,"stat":{"mode":"count","value":2.0}},"target":"remote_addr","threshold":2,"ttl":1800}}
        `
         */
        RuleConfig: string;
    }[];
}
