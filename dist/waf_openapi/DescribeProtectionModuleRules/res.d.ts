export interface DescribeProtectionModuleRulesResponse {
    /**
     * 查询到的规则配置的总数量。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 本次请求的ID。
     * @example `D7861F61-5B61-46CE-A47C-6B19160D5EB0`
     */
    RequestId: string;
    /**
     * 规则配置信息，包含规则ID、创建时间、状态等。
     */
    Rules: {
        /**
         * 规则状态。取值：
         * - **0**：表示已禁用。
         * - **1**：表示已启用。
         * @example `1`
         */
        Status: number;
        /**
         * 规则创建时间。使用时间戳表示，单位：秒。
         * @example `1570700044`
         */
        Time: number;
        /**
         * 规则配置内容，以一系列参数构造的JSON格式转化成字符串。
         * > 根据所指定的防护功能模块配置（**DefenseType**）不同，具体涉及的参数有所不同。详细信息，请参见**Content**参数具体说明。
         * @example `{"count":60,"interval":60,"ttl":300}`
         */
        Content: any;
        /**
         * 当前规则配置的版本号。
         * @example `2`
         */
        Version: number;
        /**
         * 规则ID。
         * @example `42755`
         */
        RuleId: number;
    }[];
}
