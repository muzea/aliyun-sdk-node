export interface DescribePortAutoCcStatusResponse {
    /**
     * 本次请求的ID。
     * @example `BC3C6403-F248-4125-B2C9-8733ED94EA85`
     */
    RequestId: string;
    /**
     * 非网站业务AI智能防护的配置信息。
     */
    PortAutoCcStatus: {
        /**
         * AI智能防护的开关状态。取值：
         * - **on**：开启
         * - **off**：关闭
         * @example `on`
         */
        Switch: string;
        /**
         * AI智能防护的模式。取值：
         * - **normal**：正常
         * - **loose**：宽松
         * - **strict**：严格
         * @example `normal`
         */
        Mode: string;
        /**
         * 80和443端口的防护开关状态。取值：
         * - **on**：开启
         * - **off**：关闭
         * @example `off`
         */
        WebSwitch: string;
        /**
         * 80和443端口的防护模式。取值：
         * - **normal**：正常
         * - **loose**：宽松
         * - **strict**：严格
         * @example `normal`
         */
        WebMode: string;
    }[];
}
