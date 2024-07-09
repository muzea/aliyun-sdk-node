export interface DescribeDcdnWafPoliciesResponse {
    /**
     * 每页显示的防护策略个数，默认值**20**，取值范围：**1**~**500**之前的任意整数。
     * @example `20`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `153ca2cd-3c01-44be-2e83-64dbc6c88630`
     */
    RequestId: string;
    /**
     * 页码。取值范围为：**1**~**100000**。默认值为**1**。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 防护策略个数。
     * @example `15`
     */
    TotalCount: number;
    /**
     * 防护策略列表。
     */
    Policies: {
        /**
         * 防护策略状态，同请求参数QueryArgs中PolicyStatus。
         * @example `on`
         */
        PolicyStatus: string;
        /**
         * 防护策略类型，同请求参数QueryArgs中DefenseScenes。
         * @example `custom_acl`
         */
        DefenseScene: string;
        /**
         * 使用该防护策略的域名个数。
         * @example `22`
         */
        DomainCount: number;
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
         * 是否为默认防护策略，同请求参数QueryArgs中PolicyType。
         * @example `default`
         */
        PolicyType: string;
    }[];
}
