export interface DescribeClusterConnectionsResponse {
    /**
     * 请求 id。
     * @example `XXX-XXX`
     */
    RequestId: string;
    /**
     * * true：当前 task 已经完成
     * * false：当前 task 还在运行中
     * @example `true`
     */
    TaskFinished: boolean;
    /**
     * 数组Connections的长度。
     * @example `1`
     */
    TotalCount: number;
    /**
     * * 调用时如果入参TaskId为空，则调用方需使用返回值中的TaskId，继续调用此API来获得查询命令的结果。
     * * 调用时如果入参TaskId非空，则返回值会查询此TaskId 的运行状态。
     * @example `t-xxx`
     */
    TaskId: string;
    /**
     * 描述连接会话信息的数组。
     */
    Connections: {
        /**
         * * 0：此会话已正常退出
         * * 空值：此会话还未退出
         * @example `0`
         */
        LogoffStatus: string;
        /**
         * 实例名称。
         * @example `test`
         */
        InstanceName: string;
        /**
         * 此会话的登入时间。
         * @example `2020-09-01T01:02:03.456Z`
         */
        LogonTime: string;
        /**
         * 主机名称。
         * @example `hostname`
         */
        HostName: string;
        /**
         * 此会话的退出时间。
         * 当此值为空时，说明此会话还未退出。
         * @example `2020-09-03T01:02:03.456Z`
         */
        LogoffTime: string;
        /**
         * 实例 id。
         * @example `i-xxx`
         */
        InstanceId: string;
        /**
         * 客户端的主机名称.
         * @example `client-xxx`
         */
        ClientName: string;
    }[];
}
