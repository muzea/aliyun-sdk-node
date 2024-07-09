export interface InstallAgentResponse {
    /**
     * Code 码
     * @example `200`
     */
    Code: number;
    /**
     * 信息
     * @example `success`
     */
    Message: string;
    /**
     * 唯一请求ID
     * @example `b197-40ab-9155-7ca7`
     */
    RequestId: string;
    ExecutionResultList: {
        /**
         * 执行结果
         */
        ExecutionResult: {
            /**
             * 命令执行状态信息
             * @example `OK`
             */
            Status: string;
            /**
             * 安装结束时间
             * @example `20**-11-10T07:02:17Z`
             */
            FinishedTime: string;
            /**
             * 实例 ID
             * @example `i-2ze7s2v0b789k*******`
             */
            InstanceId: string;
            /**
             * 安装状态
             * @example `Finished`
             */
            InvokeRecordStatus: string;
            /**
             * 是否安装成功
             * @example `true`
             */
            Success: boolean;
        }[];
    };
}
