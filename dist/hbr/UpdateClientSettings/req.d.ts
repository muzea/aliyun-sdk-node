export interface UpdateClientSettingsRequest {
    /**
     * 是否使用HTTPS传输数据面数据。
     * - true表示使用HTTPS传输。
     * - false表示使用HTTP传输。
     * @example `false`
     */
    "UseHttps"?: boolean;
    /**
     * 备份仓库ID。旧版客户端时该参数必须配置。
     * @example `v-*********************`
     */
    "VaultId"?: string;
    /**
     * 备份客户端ID。
     * @example `c-*********************`
     */
    "ClientId": string;
    /**
     * 数据面数据接入点类型。取值范围：
     * * **PUBLIC**：公网
     * * **VPC**：VPC网络
     * * **CLASSIC**：经典网络
     * @example `VPC`
     */
    "DataNetworkType"?: string;
    /**
     * 单个备份任务使用的CPU核数，0表示不限制。
     * @example `1`
     */
    "MaxCpuCore"?: number;
    /**
     * 单个备份任务并发工作数量，0表示不限制。
     * @example `1`
     */
    "MaxWorker"?: number;
    /**
     * 数据面代理设置。取值范围：
     * * **DISABLE**：不使用代理
     * * **USE\_CONTROL\_PROXY**（默认）：与控制面配置相同
     * * **CUSTOM**：自定义配置（HTTP协议）
     * @example `USE_CONTROL_PROXY`
     */
    "DataProxySetting"?: string;
    /**
     * 自定义数据面代理服务器主机IP地址。
     * @example `192.168.11.100`
     */
    "ProxyHost"?: string;
    /**
     * 自定义数据面代理服务器主机端口。
     * @example `3128`
     */
    "ProxyPort"?: number;
    /**
     * 自定义数据面代理服务器用户名。
     * @example `user`
     */
    "ProxyUser"?: string;
    /**
     * 自定义数据面代理服务器密码。
     * @example `******`
     */
    "ProxyPassword"?: string;
    /**
     * 资源组ID。
     * @example `rg-*********************`
     */
    "ResourceGroupId"?: string;
    /**
     * 客户端能够使用的最大内存，单位是bytes。仅支持2.13.0及以上版本。
     * @example `4096`
     */
    "MaxMemory"?: number;
    /**
     * 是否针对部分完成任务告警，仅针对本地文件备份和ECS文件备份生效。
     * @example `false`
     */
    "AlertOnPartialComplete"?: boolean;
}
