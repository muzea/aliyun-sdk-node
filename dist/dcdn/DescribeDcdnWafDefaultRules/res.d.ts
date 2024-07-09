export interface DescribeDcdnWafDefaultRulesResponse {
    /**
     * 请求ID。
     * @example `15C66C7B-671A-4297-9187-2C4477247A123425345`
     */
    RequestId: string;
    /**
     * 规则结构体。
     */
    Content: {
        /**
         * 防护场景，取值如下：
         * - **waf_group**：Web基础防护。
         * - **anti_scan**：扫描防护。
         * @example `anti_scan`
         */
        DefenseScene: string;
        /**
         * 规则结构体。
         */
        Rules: {
            /**
             * 规则类型。取值如下：
             * - **waf_group**：Web基础防护。
             * - **high_frequency**：高频扫描封禁。
             * - **directory_traversal**：目录遍历封禁。
             * - **scan_tools**：扫描工具封禁。
             * @example `waf_group`
             */
            Type: string;
            /**
             * 规则默认名称。
             * @example `Default_WafGroup_Rule`
             */
            Name: string;
            /**
             * 规则默认状态，取值如下：
             * - **on**：开启规则。
             * - **off**：关闭规则。
             * @example `on`
             */
            Status: string;
            /**
             * 规则默认配置。
             * @example `{"wafGroupIds":"1012"}`
             */
            Config: string;
            /**
             * 规则默认动作。取值如下：
             * - **monitor**：观察。
             * - **deny**：拦截。
             * - **block**：阻断。
             * @example `block`
             */
            Action: string;
        }[];
    }[];
}
