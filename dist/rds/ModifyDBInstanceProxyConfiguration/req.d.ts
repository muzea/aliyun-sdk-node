export interface ModifyDBInstanceProxyConfigurationRequest {
    /**
     * 实例ID。
     * @example `rm-uf6wjk5xxxxxxxxxx`
     */
    "DBInstanceId": string;
    /**
     * 数据库代理的**ProxyConfigurationKey**，取值：
     * * **TransparentSwitch**：透明切换；
     * * **PersistentConnections**：短连接优化；
     * * **AttacksProtection**：防暴力破解。
     * @example `TransparentSwitch`
     */
    "ProxyConfigurationKey": string;
    /**
     * 数据库代理的功能及状态：
     * * **TransparentSwitch**：透明切换，取值：
     *   * **Enable**（默认）：开启
     *   * **Disable**：关闭
     * * **PersistentConnections**：短连接优化，取值：
     *   * **Enable**：开启
     *   * **Disable**（默认）：关闭
     * * **AttacksProtection**：防暴力破解，取值：
     *   * **Enable**：开启
     *   *  **Disable**（默认）：关闭
     * 格式为{"功能1":"状态1","功能2":"状态2"...}
     * @example `{"TransparentSwitch":"Enable"}`
     */
    "ProxyConfigurationValue": string;
}
