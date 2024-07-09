export interface RunServiceScheduleResponse {
    CommandResults: {
        /**
         * 容器服务命令的执行结果。
         */
        CommandResult: {
            /**
             * 设备(容器)命令。
             * @example `ls -l /data`
             */
            Command: string;
            /**
             * 容器名。
             * @example `android`
             */
            ContainerName: string;
            /**
             * 命令执行结果。
             * @example `success`
             */
            ResultMsg: string;
        }[];
    };
    /**
     * 调度的目标虚拟设备（容器Pod）索引号。
     * @example `1`
     */
    Index: number;
    /**
     * 调度的目标实例ID。
     * @example `i-5qvji3mom4ec013dyygmtxlkj`
     */
    InstanceId: string;
    /**
     * 调度的目标实例IP。
     * @example `172.16.246.11`
     */
    InstanceIp: string;
    /**
     * 调度的目标实例Port起始端口。
     * @example `1024`
     */
    InstancePort: number;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 除ServcieAction=Console外，其余ServcieAction是否是重复操作。
     * @example `false`
     */
    RequestRepeated: string;
    /**
     * 调度的目标虚机实例/容器的tcp服务端口范围，取值格式：${from}-${to}，如80-88。
     * @example `"80-88"`
     */
    TcpPorts: boolean;
}
