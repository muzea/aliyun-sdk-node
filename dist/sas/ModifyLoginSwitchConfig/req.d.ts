export interface ModifyLoginSwitchConfigRequest {
    /**
     * 指定要开启或关闭的开关类型。取值：
     * - **login_common_ip**：  非常用登录IP告警
     * - **login_common_time**： 非常用登录时间告警
     * - **login_common_account**： 非常用账号登录告警
     * @example `login_common_account`
     */
    "Item": string;
    /**
     * 指定要配置的开关的状态。取值：
     * - **0**：关闭
     * - **1**：开启
     * @example `0`
     */
    "Status": number;
}
