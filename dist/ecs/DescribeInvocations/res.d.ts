export interface DescribeInvocationsResponse {
    /**
     * 每页行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3****`
     */
    RequestId: string;
    /**
     * 查询结果的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 命令总个数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 本次调用返回的查询凭证值。
     * @example `AAAAAdDWBF2`
     */
    NextToken: string;
    Invocations: {
        /**
         * 命令执行记录组成的数组。
         */
        Invocation: {
            /**
             * 任务的创建时间。
             * @example `2020-01-19T09:15:46Z`
             */
            CreationTime: string;
            /**
             * 定时执行命令的执行时间。
             * @example `0 *​/20 * * * *`
             */
            Frequency: string;
            /**
             * 命令执行的总执行状态，总执行状态取决于本次调用的全部实例的共同执行状态，可能值：
             * - Pending：系统正在校验或发送命令。存在至少一台实例的命令执行状态为Pending，则总执行状态为Pending。
             * - Scheduled：定时执行的命令已发送，等待运行。存在至少一台实例的命令执行状态为Scheduled，则总执行状态为Scheduled。
             * - Running：命令正在实例上运行。存在至少一台实例的命令执行状态为Running，则总执行状态为Running。
             * - Success：各个实例上的命令执行状态均为Stopped或Success，且至少一个实例的命令执行状态是Success，则总执行状态为Success。
             *     - 立即运行的任务：命令执行完成，且退出码为0。
             *     - 定时运行的任务：最近一次执行成功且退出码为0，且指定的时间已全部完成。
             * - Failed：各个实例上的命令执行状态均为Stopped或Failed，则总执行状态为Failed。实例上的命令执行状态一项或多项为以下状态时，返回值均为Failed状态：
             *     - 命令校验失败（Invalid）。
             *     - 命令发送失败（Aborted）。
             *     - 命令执行完成但退出码非0（Failed）。
             *     - 命令执行超时（Timeout）。
             *     - 命令执行异常（Error）。
             * - Stopping：正在停止任务。存在至少一台实例的命令执行状态为Stopping，则总执行状态为Stopping。
             * - Stopped：任务已停止。所有实例的命令执行状态是Stopped，则总执行状态为Stopped。实例上的命令执行状态为以下状态时，返回值均为Stopped状态：
             *     - 任务已取消（Cancelled）。
             *     - 任务已终止（Terminated）。
             * - PartialFailed：部分实例执行成功且部分实例执行失败。各个实例的命令执行状态均为Success、Failed或Stopped，则总执行状态为PartialFailed。
             * > 返回参数中的`InvokeStatus`与该参数意义相似，但建议您查看该返回值。
             * @example `Running`
             */
            InvocationStatus: string;
            /**
             * 命令执行的方式。可能值：
             * - Once：立即执行命令。
             * - Period：定时执行命令。
             * - NextRebootOnly：当实例下一次启动时，自动执行命令。
             * - EveryReboot：实例每一次启动都将自动执行命令。
             * @example `Once`
             */
            RepeatMode: string;
            /**
             * 命令ID。
             * @example `c-hz0jdfwcsr****`
             */
            CommandId: string;
            /**
             * 命令类型。
             * @example `RunShellScript`
             */
            CommandType: string;
            /**
             * 命令总的执行状态。
             * > 不推荐查看该返回值，推荐您查看`InvocationStatus`的返回值。
             * @example `Finished`
             */
            InvokeStatus: string;
            /**
             * 命令中的自定义参数。
             * @example `{}`
             */
            Parameters: string;
            /**
             * 查询的命令是否在将来会自动执行。
             * @example `false`
             */
            Timed: boolean;
            /**
             * 命令内容。
             * - 若ContentEncoding指定PlainText，返回原始脚本内容。
             * - 若ContentEncoding指定Base64，返回Base64编码后的脚本内容。
             * @example `cnBtIC1xYSB8IGdyZXAgdnNm****`
             */
            CommandContent: string;
            /**
             * 命令名称。
             * @example `CommandTestName`
             */
            CommandName: string;
            /**
             * 命令描述。
             * @example `testDescription`
             */
            CommandDescription: string;
            /**
             * 命令执行ID。
             * @example `t-hz0jdfwd9f****`
             */
            InvokeId: string;
            /**
             * ECS实例中执行命令的用户名称。
             * @example `test`
             */
            Username: string;
            /**
             * 命令执行路径。
             * @example `/home/`
             */
            WorkingDir: string;
            /**
             * 您创建的命令在ECS实例中执行时最大的超时时间，单位：秒。
             * 当因为某种原因无法运行您创建的命令时，会出现超时现象。超时后，会强制终止命令进程，即取消命令的PID。
             * @example `60`
             */
            Timeout: number;
            /**
             * 容器ID。
             * @example `ab141ddfbacfe02d9dbc25966ed971536124527097398d419a6746873fea****`
             */
            ContainerId: string;
            /**
             * 容器名称。
             * @example `test-container`
             */
            ContainerName: string;
            /**
             * 停止任务（手动停止或执行超时打断）时的模式。可能值：
             * - Process：停止当前脚本进程。
             * - ProcessTree：停止当前进程树（脚本进程以及它创建的所有子进程的集合）。
             * @example `ProcessTree`
             */
            TerminationMode: string;
            InvokeInstances: {
                /**
                 * 执行目标实例集类型。
                 */
                InvokeInstance: {
                    /**
                     * 命令执行的开始时间。
                     * @example `2019-12-20T06:15:54Z`
                     */
                    CreationTime: string;
                    /**
                     * 命令状态的更新时间。
                     * @example `2020-01-19T09:15:47Z`
                     */
                    UpdateTime: string;
                    /**
                     * 命令进程的结束时间。
                     * @example `2019-12-20T06:15:56Z`
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
                     * - Scheduled：
                     *     - 单次执行的命令：不适用，不会出现。
                     *     - 定时执行的命令：等待运行。
                     * @example `Success`
                     */
                    InvocationStatus: string;
                    /**
                     * 命令在该实例上执行的次数。
                     * -  若执行方式为单次执行，则值为0或1。
                     * -  若执行方式为定时执行，则值为执行过多少次。
                     * @example `0`
                     */
                    Repeats: number;
                    /**
                     * 实例ID。
                     * @example `i-bp1i7gg30r52z2em****`
                     */
                    InstanceId: string;
                    /**
                     * 命令的输出信息。
                     * - 若ContentEncoding指定PlainText，返回原始输出信息。
                     * - 若ContentEncoding指定Base64，返回Base64编码后的输出信息。
                     * @example `OutPutTestmsg`
                     */
                    Output: string;
                    /**
                     * Output字段中文字长度超出24 KB后，截断丢弃的文字长度。
                     * @example `0`
                     */
                    Dropped: number;
                    /**
                     * 若调用了`StopInvocation`以停止命令执行，表示调用的时间。
                     * @example `2020-01-19T09:15:47Z`
                     */
                    StopTime: string;
                    /**
                     * 命令进程的退出代码。可能值：
                     * -  Linux实例为Shell进程的退出码。
                     * -  Windows实例为Bat或者PowerShell进程的退出码。
                     * @example `0`
                     */
                    ExitCode: number;
                    /**
                     * 命令在实例中开始执行的时间。
                     * @example `2019-12-20T06:15:55Z`
                     */
                    StartTime: string;
                    /**
                     * 命令的下发失败或执行失败原因的详情，可能值：
                     * - 空：命令运行正常。
                     * - the specified instance does not exists：指定的实例不存在或已释放。
                     * - the instance has released when create task：执行命令期间，该实例被释放。
                     * - the instance is not running when create task：开始执行命令时，该实例不在运行中。
                     * - the command is not applicable：命令不适用于指定的实例。
                     * - the specified account does not exists：指定的账号不存在。
                     * - the specified directory does not exists：指定的目录不存在。
                     * - the cron job expression is invalid：指定的执行时间表达式不合法。
                     * - the aliyun service is not running on the instance：云助手Agent未运行。
                     * - the aliyun service in the instance does not response：云助手Agent无响应。
                     * - the aliyun service in the instance is upgrading now：云助手Agent正在升级中。
                     * - the aliyun service in the instance need upgrade：云助手Agent需要升级。
                     * - the command delivery has been timeout：发送命令超时。
                     * - the command execution has been timeout：命令执行超时。
                     * - the command execution got an exception：命令执行发生异常。
                     * - the command execution has been interrupted：命令执行任务中断。
                     * - the command execution exit code is not zero：命令执行结束，退出码非0。
                     * - the specified instance has been released：下发文件期间，该实例被释放。
                     * @example `the specified instance does not exists`
                     */
                    ErrorInfo: string;
                    /**
                     * 查询的命令是否在将来会自动执行。
                     * @example `false`
                     */
                    Timed: boolean;
                    /**
                     * 命令的下发失败或执行失败原因的代码，可能值：
                     * - 空：命令运行正常。
                     * - InstanceNotExists：指定的实例不存在或已释放。
                     * - InstanceReleased：执行命令期间，该实例被释放。
                     * - InstanceNotRunning：开始执行命令时，该实例不在运行中。
                     * - CommandNotApplicable：命令不适用于指定的实例。
                     * - AccountNotExists：指定的执行命令的用户名不存在。
                     * - DirectoryNotExists：指定的目录不存在。
                     * - BadCronExpression：指定的执行时间表达式不合法。
                     * - ClientNotRunning：云助手Agent未运行。
                     * - ClientNotResponse：云助手Agent无响应。
                     * - ClientIsUpgrading：云助手Agent正在升级中。
                     * - ClientNeedUpgrade：云助手Agent需要升级。
                     * - DeliveryTimeout：发送命令超时。
                     * - ExecutionTimeout：命令执行超时。
                     * - ExecutionException：命令执行发生异常。
                     * - ExecutionInterrupted：命令执行任务中断。
                     * - ExitCodeNonzero：命令执行结束，退出码非0。
                     * - SecurityGroupRuleDenied：安全组规则拒绝访问云助手服务。
                     * @example `InstanceNotExists`
                     */
                    ErrorCode: string;
                    /**
                     * 单台实例的命令进度状态。
                     * > 不推荐查看该返回值，推荐您查看`InvocationStatus`的返回值。
                     * @example `Finished`
                     */
                    InstanceInvokeStatus: string;
                }[];
            };
            Tags: {
                /**
                 * 命令执行的标签信息。
                 */
                Tag: {
                    /**
                     * 命令执行的标签键。
                     * @example `owner`
                     */
                    TagKey: string;
                    /**
                     * 命令执行的标签值。
                     * @example `zhangsan`
                     */
                    TagValue: string;
                }[];
            };
        }[];
    };
}
