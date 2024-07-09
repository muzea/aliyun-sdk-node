export interface DescribeMonitoringAgentProcessesResponse {
    /**
     * 状态码。
     * > 200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `The specified resource is not found.`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `C11C0E85-6862-4F25-8D66-D6A5E0882984`
     */
    RequestId: string;
    /**
     * 操作是否成功。取值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    NodeProcesses: {
        /**
         * 进程数列表。
         */
        NodeProcess: {
            /**
             * 进程名称。
             * @example `Nginx`
             */
            ProcessName: string;
            /**
             * 进程ID。
             * @example `234567`
             */
            ProcessId: number;
            /**
             * 应用分组ID。
             * @example `3619****`
             */
            GroupId: string;
            /**
             * 用于取得指定进程数信息的指令。目前仅支持`number`。
             * > `number`表示匹配条件的进程数。
             * @example `number`
             */
            Command: string;
            /**
             * 执行进程的用户。
             * @example `alice`
             */
            ProcessUser: string;
            /**
             * 实例ID。
             * @example `i-hp3hl3cx1pbahzy8****`
             */
            InstanceId: string;
        }[];
    };
}
