export interface DescribeClientsResponse {
    /**
     * 请求ID。
     * @example `17189276-465D-5EF3-8FFD-0FF51B5A41A0`
     */
    RequestId: string;
    /**
     * 请求是否成功。
     * - true：成功
     * - false：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回码，200表示成功。
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
     * 总记录数。
     * @example `12`
     */
    TotalCount: number;
    Clients: {
        /**
         * 备份客户端列表。
         */
        Client: {
            /**
             * 备份客户端状态。取值包括：
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
             * 备份仓库ID。
             * @example `v-00029mx6o******n85lg`
             */
            VaultId: string;
            /**
             * 是否使用HTTPS传输数据。
             * - true表示使用HTTPS传输。
             * - false表示使用HTTP传输。
             * @example `false`
             */
            UseHttps: boolean;
            /**
             * 网络类型，返回值包括：
             * * **CLASSIC**：经典网络。
             * * **VPC**：专有网络。
             * @example `VPC`
             */
            NetworkType: string;
            /**
             * 客户端名称。
             * @example `client-20211224-101226`
             */
            ClientName: string;
            /**
             * 备份客户端ID。
             * @example `c-00062uu******2fgj`
             */
            ClientId: string;
            /**
             * 告警设置。取值为INHERITED，表示使用与备份库一致的报警方式。
             * @example `INHERITED`
             */
            AlertSetting: string;
            /**
             * ECS实例名称。
             * @example `swh-hbr`
             */
            InstanceName: string;
            /**
             * 客户端最大版本号。
             * @example `1.11.23`
             */
            MaxVersion: string;
            /**
             * 客户端创建时间。
             * @example `1554347313`
             */
            CreatedTime: number;
            /**
             * 状态信息。
             * @example `HANA_NOT_SUPPORT`
             */
            StatusMessage: string;
            /**
             * 备份客户端类型。取值为**ECS_AGENT**，表示SAP HANA备份客户端。
             * @example `ECS_AGENT`
             */
            ClientType: string;
            /**
             * 实例ID。
             * @example `i-wz9b6wya******n8yo`
             */
            InstanceId: string;
            /**
             * 备份客户端更新时间。UNIX时间，单位为秒。
             * @example `1554347313`
             */
            UpdatedTime: number;
            /**
             * 备份客户端版本号。
             * @example `1.11.16`
             */
            ClientVersion: string;
            /**
             * SAP HANA实例ID。
             * @example `cl-0008c48frr******ncpk`
             */
            ClusterId: string;
        }[];
    };
}
