export interface CreateConfigRequest {
    /**
     * 异常告警通用配置模块中配置项的编码。取值：
     * - **access_failed_cnt**：非授权资源多次访问尝试的阈值。
     * - **access_permission_exprie_max_days**：权限闲置期间超过阈值。
     * - **log_datasize_avg_days**：日志未有效输出（当日某类日志输出量低于前10天平均值的阈值）。
     * @example `access_failed_cnt`
     */
    "Code"?: string;
    /**
     * 异常告警通用配置项的描述。
     * @example `非授权资源多次访问尝试：目前的阈值定义为10次`
     */
    "Description"?: string;
    /**
     * 指定异常告警通用配置项的值。Code取值不同此参数的具体含义不同：
     * - 当Code取值为**access_failed_cnt**：Value表示非授权资源多次访问尝试的阈值。
     * - 当Code取值为**access_permission_exprie_max_days**：Value表示权限闲置期间超过阈值。
     * - 当Code取值为**log_datasize_avg_days**：Value表示当日某类日志输出量低于前10天平均值的阈值。
     * @example `30`
     */
    "Value"?: string;
    /**
     * 该参数已废弃。
     * @example `1`
     */
    "FeatureType"?: number;
    /**
     * 该参数已废弃。
     * @example `106.11.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 请求和接收消息的语言类型，默认为**zh_cn**。取值：
     * - **zh_cn**：中文。
     * - **en_us**：英文。
     * @example `zh_cn`
     */
    "Lang"?: string;
}
