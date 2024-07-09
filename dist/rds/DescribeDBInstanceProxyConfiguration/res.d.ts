export interface DescribeDBInstanceProxyConfigurationResponse {
    /**
     * 是否开启短连接优化：
     * * **Enable**：开启
     * * **Disable**：关闭
     * 返回值格式为JSON字符串，如：
     * 	{"status":"Disable"}。
     * @example `{\"status\":\"Disable\"}`
     */
    PersistentConnectionsConfiguration: string;
    /**
     * 是否开启防暴力破解：
     * * **Enable**：开启
     * * **Disable**：关闭
     * 返回值格式为JSON字符串，如：
     * 	{"status":"Disable", "check_interval_seconds": 60,
     *               "max_failed_login_attempts": 60, "blocking_seconds": 600}
     * 参数说明及取值范围：
     * * 对于每一个客户端，check_interval_seconds秒内最多允许max_failed_login_attempts次错误密码登录，否则将对该客户端IP禁止登录blocking_seconds秒钟。
     * * 取值范围：
     *   * check_interval_seconds：**30-600**，单位为秒。
     *   * max_failed_login_attempts：**10-5000**，单位为次。
     *   * blocking_seconds：**30-3600**，单位为秒。
     * @example `{\"check_interval_seconds\":\"0\",\"max_failed_login_attempts\":\"0\",\"blocking_seconds\":\"0\",\"status\":\"Disable\"}`
     */
    AttacksProtectionConfiguration: string;
    /**
     * 请求ID。
     * @example `E9DD55F4-1A5F-48CA-BA57-DFB3CA8C4C34`
     */
    RequestId: string;
    /**
     * 是否开启透明切换：
     * * **Enable**：开启
     * * **Disable**：关闭
     * 返回值格式为JSON字符串，如：
     * 	{"status":"Enable"}。
     * @example `{\"status\":\"Enable\"}`
     */
    TransparentSwitchConfiguration: string;
}
