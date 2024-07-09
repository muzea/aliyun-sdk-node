export interface ListClusterPluginInfoResponse {
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `0B48AB3C-84FC-424D-A01D-B9270EF46038`
     */
    RequestId: string;
    /**
     * 查询到的插件信息。
     */
    Data: {
        /**
         * 集群运行状态：
         * - 1：正常。
         * - 2：异常。
         * - 3：离线。
         * @example `ABNORMAL`
         */
        ClusterStatus: string;
        /**
         * 集群ID。
         * @example `c8ca91e0907d94efaba7fb0827eb9****`
         */
        ClusterId: string;
        /**
         * 集群名称。
         * @example `lmftest`
         */
        ClusterName: string;
        /**
         * 集群plugin列表。
         */
        NodePluginInfoList: {
            /**
             * 插件版本。
             * @example `1.3.1`
             */
            PluginVersion: string;
            /**
             * 是否已安装。取值：
             * - **true** ：已安装
             * - **false** ：未安装。
             * @example `true`
             */
            Installed: boolean;
            /**
             * 实例机器类型。取值包括但不限于：
             * - **ecs**：ECS
             * - **slb**：SLB
             * @example `ECS`
             */
            MachineType: number;
            /**
             * 服务器uuid。
             * @example `bc563d2b-2a3d-411b-8bbe-d75b8d3c****`
             */
            Uuid: string;
            /**
             * 服务器的私网IP。
             * @example `10.XXX.XXX.XX`
             */
            MachineIntranetIp: string;
            /**
             * 云安全中心客户端是否在线。取值：
             * - **true**：是
             * - **false**：否
             * > 如果客户端不在线，则云安全中心无法对该型服务器提供安全防护。
             * @example `true`
             */
            Online: boolean;
            /**
             * 服务器的公网IP。
             * @example `100.100.XXX.XX`
             */
            MachineInternetIp: string;
            /**
             * 插件名称。
             * @example `alihips`
             */
            PluginName: string;
            /**
             * 服务器主机名称。
             * @example `npznas05`
             */
            MachineName: string;
            /**
             * 服务器实例ID。
             * @example `tpp-cn-2r42njq4y001`
             */
            instanceId: string;
            /**
             * 错误码。
             * @example `kenerl not support`
             */
            ErrorCode: string;
            /**
             * 错误消息。
             * @example `kenerl not support`
             */
            ErrorMsg: string;
        }[];
    }[];
}
