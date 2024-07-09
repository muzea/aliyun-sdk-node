export interface DisableUserConfigRequest {
    /**
     * 请求和接收消息的语言类型。取值：
     * - **zh_cn**：默认值，中文。
     * - **en_us**：英文。
     * @example `zh_cn`
     */
    "Lang"?: string;
    /**
     * 异常告警通用配置模块中配置项的编码。可通过[DescribeConfigs](~~DescribeConfigs~~)获取配置项的Code。
     * @example `access_failed_cnt`
     */
    "Code"?: string;
    /**
     * 此参数已废弃。
     * @example `2`
     */
    "FeatureType"?: number;
}
