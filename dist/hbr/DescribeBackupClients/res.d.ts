export interface DescribeBackupClientsResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 请求是否成功。
     * - true表示成功。
     * - false表示失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回码。200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 返回信息描述，成功一般返回successful，错误时会返回相应错误信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 分页页码，从1开始，默认值为1。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 分页大小，最小值为1，最大值为99，默认值为10。
     * @example `10`
     */
    PageSize: number;
    /**
     * 查询到的符合条件的备份客户端总数。
     * @example `8`
     */
    TotalCount: number;
    /**
     * 备份客户端列表。
     * @example `{'Client': []}`
     */
    Clients: {
        /**
         * 备份客户端状态。取值范围：
         * * **REGISTERED**：注册成功
         * * **ACTIVATED**：激活成功
         * * **DEACTIVATED**：激活失效
         * * **INSTALLING**：安装中
         * * **INSTALL_FAILED**：安装失败
         * * **NOT_INSTALLED**：未安装
         * * **UPGRADING**：升级中
         * * **UPGRADE_FAILED**：升级失败
         * * **UNINSTALLING**：卸载客户端中
         * * **UNINSTALL_FAILED**：卸载客户端失败
         * * **STOPPED**：客户端服务已停止
         * * **UNKNOWN**：客户端失联
         * @example `ACTIVATED`
         */
        Status: string;
        /**
         * 备份客户端受保护状态。取值范围：
         * * **UNPROTECTED**：服务器未受保护
         * * **PROTECTED**：服务器已受保护
         * @example `PROTECTED`
         */
        BackupStatus: string;
        /**
         * 仅当**ClientType**取值为**ECS_CLIENT**时，该参数有效。表示备份客户端所在的系统架构。取值范围：
         * * **amd64**
         * * **386**
         * @example `amd64`
         */
        ArchType: string;
        /**
         * 备份客户端ID。
         * @example `c-*********************`
         */
        ClientId: string;
        /**
         * 最新备份客户端版本号。
         * @example `2.4.5`
         */
        MaxClientVersion: string;
        /**
         * 仅当**ClientType**取值为**ECS_CLIENT**时，该参数有效。表示ECS实例内网IP地址。
         * @example `192.168.1.1`
         */
        PrivateIpV4: string;
        /**
         * 仅当**ClientType**取值为**ECS_CLIENT**时，该参数有效。表示ECS实例名称。
         * @example `instancename`
         */
        InstanceName: string;
        /**
         * 备份客户端创建时间。UNIX时间，单位为秒。
         * @example `1554347313`
         */
        CreatedTime: number;
        /**
         * 备份客户端最后一次心跳时间。UNIX时间，单位为秒。
         * @example `1554347313`
         */
        LastHeartBeatTime: number;
        /**
         * 备份客户端类型。取值为**ECS_CLIENT**，表示ECS文件备份客户端。
         * @example `ECS_CLIENT`
         */
        ClientType: string;
        /**
         * 备份客户端所在的主机名。
         * @example `hostname`
         */
        Hostname: string;
        /**
         * 实例ID。
         * - 当客户端类型为ECS文件备份客户端时，表示ECS实例ID。
         * - 当客户端类型为本地文件备份客户端时，表示根据系统信息生成的硬件指纹。
         * @example `i-*********************`
         */
        InstanceId: string;
        /**
         * 是否是硬件监控一体机客户端。
         * - true表示是硬件监控一体机客户端。
         * - false表示不是硬件监控一体机客户端。
         * @example `false`
         */
        Appliance: boolean;
        /**
         * 备份客户端更新时间。UNIX时间，单位为秒。
         * @example `1554347313`
         */
        UpdatedTime: number;
        /**
         * 仅当**ClientType**取值为**ECS_CLIENT**时，该参数有效。表示客户端系统类型。取值范围：
         * * **windows**
         * * **linux**
         * @example `linux`
         */
        OsType: string;
        /**
         * 仅当**ClientType**取值为**ECS_CLIENT**时，该参数有效。表示地域。
         * @example `cn-hangzhou-f`
         */
        ZoneId: string;
        /**
         * 备份客户端版本号。
         * @example `2.4.5`
         */
        ClientVersion: string;
        /**
         * 标签信息。
         */
        Tags: {
            /**
             * 仓库的标签键。N的取值范围：1~20。
             * - 不支持以`aliyun`、`acs:`开头。
             * - 不允许包含`http://`和`https://` 。
             * - 不允许为空字符串。
             * @example `TestKey`
             */
            Key: string;
            /**
             * 仓库的标签值。N的取值范围：1~20。
             * - 不支持以`aliyun`、`acs:`开头。
             * - 不允许包含`http://`和`https:// `。
             * - 不允许为空字符串。
             * @example `TestValue`
             */
            Value: string;
        }[];
        /**
         * 备份客户端配置信息。
         */
        Settings: {
            /**
             * 自定义数据面代理服务器主机IP地址。
             * @example `192.168.11.100`
             */
            ProxyHost: string;
            /**
             * 单个备份任务使用的CPU核数，0表示不限制。
             * @example `1`
             */
            MaxCpuCore: string;
            /**
             * 自定义数据面代理服务器主机端口。
             * @example `3128`
             */
            ProxyPort: number;
            /**
             * 是否使用HTTPS传输数据面数据。
             * - true表示使用HTTPS传输。
             * - false表示使用HTTP传输。
             * @example `false`
             */
            UseHttps: string;
            /**
             * 自定义数据面代理服务器密码。
             * @example `******`
             */
            ProxyPassword: string;
            /**
             * 自定义数据面代理服务器用户名。
             * @example `user`
             */
            ProxyUser: string;
            /**
             * 数据面代理设置。取值范围：
             * - **DISABLE**：不使用代理
             * - **USE_CONTROL_PROXY**（默认）：与控制面配置相同
             * - **CUSTOM**：自定义配置（HTTP协议）
             * @example `USE_CONTROL_PROXY`
             */
            DataProxySetting: string;
            /**
             * 数据面数据接入点类型。取值范围：
             * - **PUBLIC**：公网
             * - **VPC**：VPC网络
             * - **CLASSIC**：经典网络
             * @example `VPC`
             */
            DataNetworkType: string;
            /**
             * 单个备份任务并发工作数量，0表示不限制。
             * @example `1`
             */
            MaxWorker: string;
            /**
             * 客户端能够使用的最大内存，单位是bytes。仅支持2.13.0及以上版本。
             * @example `0`
             */
            MaxMemory: number;
            /**
             * 是否针对部分完成任务告警，仅针对本地文件备份和ECS文件备份生效。
             * @example `false`
             */
            AlertOnPartialComplete: boolean;
        };
    }[];
}
