export interface DescribeCommandInvocationsResponse {
    /**
     * 请求ID。
     * @example `30637AD6-D977-4833-A54C-CC89483E****`
     */
    RequestId: string;
    /**
     * 总条数。
     * @example `10`
     */
    TotalCount: number;
    /**
     * 查询结果的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 分页查询时设置的每页行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 命令执行列表。
     */
    CommandInvocations: {
        /**
         * 命令执行ID。
         * @example `t-hz0373jyzxt****`
         */
        InvokeId: string;
        /**
         * 命令创建时间。
         * @example `2023-04-27T10:11:58`
         */
        CreationTime: string;
        /**
         * 命令ID。
         * @example `c-hy0338xh28r****`
         */
        CommandId: string;
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
         * 命令名称。
         * @example `testCommandName`
         */
        CommandName: string;
        /**
         * 命令类型。
         * @example `RunShellScript`
         */
        CommandType: string;
        /**
         * 命令描述。
         * @example `testDescription`
         */
        CommandDescription: string;
        /**
         * 执行命令的用户名称。
         * @example `root`
         */
        Username: string;
        /**
         * 命令执行的路径。
         * @example `c:\wwwroot`
         */
        WorkingDir: string;
        /**
         * 超时时间，单位为秒（s）。
         * @example `60`
         */
        Timeout: number;
        /**
         * 命令内容。
         * @example `echo 123`
         */
        CommandContent: string;
        /**
         * 命令中包含自定义参数。如果没有参数，默认为{}.
         * @example `{}`
         */
        Parameters: string;
        /**
         * 执行目标实例列表。
         */
        InvokeInstances: {
            /**
             * 轻量应用服务器的实例ID。
             * @example `2445f4aecdac4b71ba2c7e3a7ccf****`
             */
            InstanceId: string;
            /**
             * 命令在实例中开始执行的时间。
             * @example `2023-05-09T03:32:24Z`
             */
            StartTime: string;
            /**
             * 命令进程的结束时间。
             * @example `2023-04-03T02:42:29Z`
             */
            FinishTime: string;
            /**
             * 单台实例的命令进度状态，可能值：
             * - Pending：系统正在校验或发送命令。
             * - Invalid：指定命令类型或参数有误。
             * - Aborted：向实例发送命令失败。实例必须在运行中，且命令可以1分钟内发送完成。
             * - Running：命令正在实例上运行。
             * - Success：
             *     - 单次执行的命令：命令执行完成，且退出码为0。
             *     - 定时执行的命令：上一次运行成功且退出码为0，且指定的时间已结束。
             * - Failed：
             *     -  单次执行的命令：命令执行完成，且退出码非0。
             *     -  定时执行的命令：上一次运行成功且退出码非0，且指定的时间将中止。
             * - Error：命令执行时发生异常无法继续。
             * - Timeout：命令执行超时。
             * - Cancelled：命令的执行动作已经取消，命令未曾启动。
             * - Stopping：正在停止任务。
             * - Terminated：命令运行时被终止。
             * @example `Running`
             */
            InvocationStatus: string;
            /**
             * 命令执行后的输出信息。
             * @example `OutputMsg`
             */
            Output: string;
            /**
             * 命令的退出码。
             * - Linux实例为Shell命令的退出码。
             * - Windows实例为Bat或者PowerShell命令的退出码。
             * @example `0`
             */
            ExitCode: number;
            /**
             * 命令的下发失败或执行失败原因的详情，可能值：
             * - 空：命令执行正常。
             * - the specified instance does not exists：指定的实例不存在或已释放。
             * - the instance has released when create task：执行命令期间，该实例被释放。
             * - the instance is not running when create task：命令执行时，该实例不在运行中。
             * - the command is not applicable：命令不适用于指定的实例。
             * - the specified account does not exists：指定的账号不存在。
             * - the specified directory does not exists：指定的目录不存在。
             * - the cron job expression is invalid：指定的周期表达式不合法。
             * - the aliyun service is not running on the instance：云助手客户端未运行。
             * - the aliyun service in the instance does not response：云助手客户端无响应。
             * - the aliyun service in the instance is upgrading now：云助手客户端正在升级中。
             * - the aliyun service in the instance need upgrade：云助手客户端需要升级。
             * - the command delivery has been timeout：发送命令超时。
             * - the command execution has been timeout：命令执行超时。
             * - the command execution got an exception：命令执行发生异常。
             * - the command execution has been interrupted：命令执行被中断。
             * - the command execution exit code is not zero：命令执行结束，退出码非0。
             * @example `the specified instance does not exists`
             */
            ErrorInfo: string;
            /**
             * 命令的下发失败或执行失败原因的代码，可能值：
             * - 空：命令执行正常。
             * - InstanceNotExists：指定的实例不存在或已释放。
             * - InstanceReleased：执行命令期间，该实例被释放。
             * - InstanceNotRunning：命令执行时，该实例不在运行中。
             * - CommandNotApplicable：命令不适用于指定的实例。
             * - AccountNotExists：指定的账号不存在。
             * - DirectoryNotExists：指定的目录不存在。
             * - BadCronExpression：指定的周期表达式不合法。
             * - ClientNotRunning：云助手客户端未运行。
             * - ClientNotResponse：云助手客户端无响应。
             * - ClientIsUpgrading：云助手客户端正在升级中。
             * - ClientNeedUpgrade：云助手客户端需要升级。
             * - DeliveryTimeout：发送命令超时。
             * - ExecutionTimeout：命令执行超时。
             * - ExecutionException：命令执行发生异常。
             * - ExecutionInterrupted：命令执行被中断。
             * - ExitCodeNonzero：命令执行结束，退出码非0。
             * @example `InstanceNotExists`
             */
            ErrorCode: string;
        }[];
    }[];
}
