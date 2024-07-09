export interface DescribeInvocationsResponse {
    /**
     * 请求ID。
     * @example `30637AD6-D977-4833-A54C-CC89483E****`
     */
    RequestId: string;
    /**
     * 命令执行记录。
     */
    Invocations: {
        /**
         * 命令创建时间。
         * @example `2022-07-11T06:37:16Z`
         */
        CreationTime: string;
        /**
         * 命令执行的状态。可能值：
         * - Pending：系统正在校验或发送命令。
         * - Invalid：指定命令类型或参数有误。
         * - Aborted：向实例发送命令失败。实例必须在运行中，且命令可以1分钟内发送完成。
         * - Running：命令正在实例上执行。
         * - Success：命令执行完成，且退出码为0。
         * - Failed：命令执行完成，且退出码非0。
         * - Error：命令执行时发生异常无法继续。
         * - Timeout：命令执行超时。
         * - Cancelled：命令的执行动作已经取消，命令未曾启动。
         * - Stopping：正在停止执行的命令。
         * - Terminated：命令执行时被终止。
         * @example `Success`
         */
        InvocationStatus: string;
        /**
         * 命令类型。可能值：
         * - RunBatScript：适用于Windows实例的Bat命令。
         * - RunPowerShellScript：适用于Windows实例的PowerShell命令。
         * - RunShellScript：适用于Linux实例Shell命令。
         * @example `RunShellScript`
         */
        CommandType: string;
        /**
         * 命令内容,，以Base64编码后传输。
         * @example `bHM=`
         */
        CommandContent: string;
        /**
         * 命令中包含自定义参数。如果没有参数，默认为{}.
         * @example `{}`
         */
        Parameters: any;
        /**
         * 命令状态。可能值：
         * - Running：命令运行中。
         * - Finished：命令执行完成。
         * - Failed：命令执行失败。
         * - Stopped：停止命令。
         * @example `Finished`
         */
        InvokeStatus: string;
        /**
         * 命令执行ID。
         * @example `t-hz02p9545t6****`
         */
        InvokeId: string;
        /**
         * 命令名称。
         * @example `testname`
         */
        CommandName: string;
    }[];
    /**
     * 分页查询时设置的每页行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 命令总条数。
     * @example `10`
     */
    TotalCount: number;
}
