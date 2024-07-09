export interface InvokeShellCommandResponse {
    /**
     * 命令ID，可用于后续查询命令执行情况。
     * @example `c-hz01v8vudql****`
     */
    CommandId: string;
    /**
     * 请求ID。
     * @example `04F0F334-1335-436C-A1D7-6C044FE73368`
     */
    RequestId: string;
    InstanceIds: {
        /**
         * 执行命令的实例ID列表。
         */
        InstanceId: string[];
    };
}
