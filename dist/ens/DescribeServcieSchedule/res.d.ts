export interface DescribeServcieScheduleResponse {
    /**
     * 调度的目标虚拟设备（容器Pod）索引号。
     * @example `2`
     */
    Index: number;
    /**
     * 调度的目标实例ID。
     * @example `i-5myukg7hnpbto7m024002w8qd`
     */
    InstanceId: string;
    /**
     * 调度的目标实例IP。
     * @example `120.26.XX.XX`
     */
    InstanceIp: string;
    /**
     * 调度的目标实例Port起始端口。
     * @example `3306`
     */
    InstancePort: number;
    /**
     * 调度的虚拟设备POD的摘要信息。
     */
    PodAbstractInfo: {
        /**
         * 容器服务名。
         * @example `android`
         */
        ContainerService: boolean;
        ContainerStatuses: {
            /**
             * 容器信息列表。
             */
            ContainerStatus: {
                /**
                 * 容器ID。
                 * @example `container_e79_1638372147094_158091_02_000001`
                 */
                ContainerId: string;
                /**
                 * 容器名称。
                 * @example `nginx`
                 */
                Name: string;
            }[];
        };
        /**
         * POD名。
         * @example `gcs-prod-websocket-eip-telecom`
         */
        Name: boolean;
        /**
         * Namespace名称。
         * @example `default-aliyun`
         */
        Namespace: boolean;
        /**
         * POD所在Scope。
         * @example `FDN`
         */
        ResourceScope: boolean;
        /**
         * POD状态。
         * @example `RUNNING`
         */
        Status: boolean;
    };
    /**
     * 请求ID。
     * @example `CEF72CEB-54B6-4AE8-B225-F876FF7BA984`
     */
    RequestId: string;
    /**
     * 是否已创建。
     * @example `false`
     */
    RequestRepeated: boolean;
    /**
     * 调度的目标虚机实例/容器的tcp服务端口范围，取值格式：${from}-${to}，如80-88。
     * @example `80-88`
     */
    TcpPorts: string;
}
