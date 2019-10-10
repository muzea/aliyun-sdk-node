interface ModifyDBInstanceProxyConfigurationRequest {
    "RegionId"?: string;
    /**
    * 实例ID。
    * @example `rm-uf6wjk5xxxxxxxxxx`
    */ "DBInstanceId": string;
    /**
    * 数据库代理的**ProxyConfigurationKey**，取值：
    * * **TransparentSwitch**：透明切换；
    * * **PersistentConnections**：短连接优化；
    * * **AttacksProtection**：防暴力破解。
    * @example `TransparentSwitch`
    */ "ProxyConfigurationKey": string;
    /**
    * 数据库代理的**ProxyConfigurationValue**，取值：
    * * **TransparentSwitch**：透明切换，取值为：
    *   * **Enable**：开启，默认值为Enable；
    *   * **Disable**：关闭。如：	{"status":"Enable"}。
    * * **PersistentConnections**：短连接优化，取值为：
    *   * **Enable**：开启；
    *   * **Disable**：关闭，默认值为Disable。如：	{"status":"Disable"}。
    * * **AttacksProtection**：防暴力破解，取值为：
    *   * **Enable**：开启；
    *   *  **Disable**：关闭，默认值为Disable。如：{"status":"Disable"}。
    * 返回值格式为JSON字符串，如：
    * 	{"status":"Disable", "check_interval_seconds": 60,
    *                     "max_failed_login_attempts": 60, "blocking_seconds": 600}
    * 参数说明及取值范围：
    *   * 对于每一个客户端，check_interval_seconds秒内最多允许max_failed_login_attempts次错误密码登录，否则将对该客户端IP禁止登录blocking_seconds秒钟。
    *   * 取值范围：
    * check_interval_seconds：**30~600**，单位为秒；
    * max_failed_login_attempts：**10~5000**，单位为次数；
    * blocking_seconds：**30~3600**，单位为秒。
    * @example `{"status":"Enable"}`
    */ "ProxyConfigurationValue": string;
    "OwnerId"?: number;
}
export { ModifyDBInstanceProxyConfigurationRequest };