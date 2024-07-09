export interface DescribeWebCcProtectSwitchResponse {
    /**
     * 本次请求的ID。
     * @example `3ADD9EED-CA4B-488C-BC82-01B0B899363D`
     */
    RequestId: string;
    /**
     * 网站业务各防护功能的开关状态。
     */
    ProtectSwitchList: {
        /**
         * 黑白名单（针对域名）的开关状态。取值：
         * - **0**：关闭
         * - **1**：开启
         * @example `1`
         */
        BlackWhiteListEnable: number;
        /**
         * AI智能防护的等级。取值：
         * - **level30**：宽松
         * - **level60**：正常
         * - **level90**：严格
         * @example `level60`
         */
        AiTemplate: string;
        /**
         * 精确访问控制的开关状态。取值：
         * - **0**：关闭
         * - **1**：开启
         * @example `0`
         */
        PreciseRuleEnable: number;
        /**
         * 网站域名。
         * @example `www.aliyun.com`
         */
        Domain: string;
        /**
         * AI智能防护的模式。取值：
         * - **watch**：预警模式
         * - **defense**：防护模式
         * @example `defense`
         */
        AiMode: string;
        /**
         * AI智能防护的开关状态。取值：
         * - **0**：关闭
         * - **1**：开启
         * @example `1`
         */
        AiRuleEnable: number;
        /**
         * 区域封禁（针对域名）的开关状态。取值：
         * - **0**：关闭
         * - **1**：开启
         * @example `0`
         */
        RegionBlockEnable: number;
        /**
         * 频率控制防护（CC防护）的模式。取值：
         * - **default**：正常
         * - **gf_under_attack**：攻击紧急
         * - **gf_sos_verify**：严格
         * - **gf_sos_enhance**：超级严格
         * @example `default`
         */
        CcTemplate: string;
        /**
         * 自定义频率控制防护（CC防护）的开关状态。取值：
         * - **0**：关闭
         * - **1**：开启
         * @example `0`
         */
        CcCustomRuleEnable: number;
        /**
         * 频率控制防护（CC防护）的开关状态。取值：
         * - **0**：关闭
         * - **1**：开启
         * @example `1`
         */
        CcEnable: number;
        CcGlobalSwitch: string;
    }[];
}
