export interface ListClusterCnnfStatusDetailResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `64329F40-5C94-51D3-A400-37AA7BAC****`
     */
    RequestId: string;
    /**
     * 容器防火墙状态的列表。
     */
    Data: {
        /**
         * 资产实例的UUID。
         * @example `6690a46c-0edb-4663-a641-3629d1a9****`
         */
        Uuid: string;
        /**
         * 集群ID。
         * @example `c8ca91e0907d94efaba7fb0827eb9****`
         */
        ClusterId: string;
        /**
         * 服务器的实例ID。
         * @example `i-bp180bogui4fc0z4****`
         */
        InstanceId: string;
        /**
         * 服务器机器名称。
         * @example `security`
         */
        MachineName: string;
        /**
         * 插件类型名称，固定为**alinet**。
         * @example `alinet`
         */
        PluginName: string;
        /**
         * 是否安装容器防火墙插件。
         * @example `true`
         */
        Installed: boolean;
        /**
         * 插件在线状态。取值：
         * - **false**：离线
         * - **true**：在线
         * @example `false`
         */
        Status: string;
        /**
         * 关联实例的公网IP。
         * @example `172.16.XX.XX`
         */
        InternetIp: string;
        /**
         * 关联实例的私网IP。
         * @example `10.42.XX.XX`
         */
        IntranetIp: string;
        /**
         * 实例机器类型，固定为**ecs**。
         * @example `ecs`
         */
        MachineType: number;
        /**
         * 插件版本。
         * @example `3.3`
         */
        PluginVersion: string;
        /**
         * 插件无效类型。取值：
         * - **PLUGIN_OFFLINE**：离线
         * - **PLUGIN\_NOT\_INSTALLED**：未安装
         * - **PLUGIN\_INVALID\_VERSION**：无效版本
         * @example `PLUGIN_OFFLINE`
         */
        InvalidType: string;
    }[];
}
