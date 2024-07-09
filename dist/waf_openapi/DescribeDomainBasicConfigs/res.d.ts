export interface DescribeDomainBasicConfigsResponse {
    /**
     * 查询到的域名配置的总数量。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 本次请求的ID。
     * @example `D7861F61-5B61-46CE-A47C-6B19160D5EB0`
     */
    RequestId: string;
    /**
     * 域名配置详情列表。
     */
    DomainConfigs: {
        /**
         * 域名配置的状态。取值：
         * - **0**：表示无效（已删除）。
         * - **1**：表示有效（创建成功）。
         * - **10**：表示创建中。
         * - **11**：表示创建失败。
         * - **20**：表示删除中。
         * @example `1`
         */
        Status: number;
        /**
         * 域名。
         * @example `www.aliyundoc.com`
         */
        Domain: string;
        /**
         * 域名配置的来源。取值固定为**WAF**，表示通过Web应用防火墙服务添加。
         * @example `WAF`
         */
        Owner: string;
        /**
         * CC安全防护功能的模式。取值：
         * - **0**：表示**防护**模式。
         * - **1**：表示**防护-紧急**模式。
         * @example `0`
         */
        CcMode: number;
        /**
         * CC安全防护功能的状态。取值：
         * - **0**：表示关闭。
         * - **1**：表示开启。
         * @example `1`
         */
        CcStatus: number;
        /**
         * 域名接入模式。取值：
         * - **waf-cloud-dns**：表示CNAME接入。
         * - **waf-cloud-native**：表示透明接入。
         * @example `waf-cloud-dns`
         */
        AccessType: string;
        /**
         * 当前配置的版本号。
         * @example `0`
         */
        Version: number;
        /**
         * 自定义防护策略功能的状态。取值：
         * - **0**：表示关闭。
         * - **1**：表示开启。
         * @example `1`
         */
        AclStatus: number;
        /**
         * 规则防护引擎功能的状态。取值：
         * - **0**：表示关闭。
         * - **1**：表示开启。
         * @example `1`
         */
        WafStatus: number;
        /**
         * 规则防护引擎功能的模式。取值：
         * - **0**：表示**拦截**模式。
         * - **1**：表示**告警**模式。
         * @example `0`
         */
        WafMode: number;
    }[];
}
