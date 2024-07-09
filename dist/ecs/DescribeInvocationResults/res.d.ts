export interface DescribeInvocationResultsResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE*****`
     */
    RequestId: string;
    /**
     * 命令执行结果的集合。
     */
    Invocation: {
        /**
         * 分页查询时设置的每页行数。
         * @example `1`
         */
        PageSize: number;
        /**
         * 当前页码。
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
        InvocationResults: {
            /**
             * 命令执行结果集。
             */
            InvocationResult: {
                /**
                 * 单台实例的命令进度状态，可能值：
                 * - Pending：系统正在校验或发送命令。
                 * - Invalid：指定命令类型或参数有误。
                 * - Aborted：向实例发送命令失败。实例必须在运行中，且命令可以1分钟内发送完成。
                 * - Running：命令正在实例上执行。
                 * - Success：
                 *     - 单次执行的命令：命令执行完成，且退出码为0。
                 *     - 定时执行的命令：上一次执行成功且退出码为0，且指定的执行时间已结束。
                 * - Failed：
                 *     - 单次执行的命令：命令执行完成，且退出码非0。
                 *     - 定时执行的命令：上一次执行成功且退出码非0，且指定的执行时间将中止。
                 * - Error：命令执行时发生异常无法继续。
                 * - Timeout：命令执行超时。
                 * - Cancelled：命令的执行动作已经取消，命令未曾启动。
                 * - Stopping：正在停止执行的命令。
                 * - Terminated：命令执行时被终止。
                 * - Scheduled：
                 *     - 单次执行的命令：不适用，不会出现。
                 *     - 定时执行的命令：等待执行。
                 * @example `Success`
                 */
                InvocationStatus: string;
                /**
                 * 命令在该实例上执行的次数。
                 * - 若执行方式为立即执行，则值为0或1。
                 * - 若执行方式为定时执行，则值为执行过多少次。
                 * @example `0`
                 */
                Repeats: number;
                /**
                 * 命令ID。
                 * @example `c-hz0jdfwcsr****`
                 */
                CommandId: string;
                /**
                 * 实例ID。
                 * @example `i-bp1i7gg30r52z2em****`
                 */
                InstanceId: string;
                /**
                 * 命令执行后的输出信息。
                 * - 若ContentEncoding指定PlainText，返回原始输出信息。
                 * - 若ContentEncoding指定Base64，返回Base64编码后的输出信息。
                 * @example `MTU6MzA6MDEK`
                 */
                Output: string;
                /**
                 * `Output`字段中文字长度超出24 KB后，截断并丢弃的文字长度。
                 * @example `0`
                 */
                Dropped: number;
                /**
                 * 若调用了`StopInvocation`以停止命令执行，表示调用的时间。
                 * @example `2020-01-19T09:15:47Z`
                 */
                StopTime: string;
                /**
                 * 命令的退出码。
                 * - Linux实例为Shell命令的退出码。
                 * - Windows实例为Bat或者PowerShell命令的退出码。
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
                 * - 空：命令执行正常。
                 * - the specified instance does not exists：指定的实例不存在或已释放。
                 * - the instance has released when create task：执行命令期间，该实例被释放。
                 * - the instance is not running when create task：命令执行时，该实例不在运行中。
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
                 * - the command execution has been interrupted：命令执行被中断。
                 * - the command execution exit code is not zero：命令执行结束，退出码非0。
                 * - the specified instance has been released：下发文件期间，该实例被释放。
                 * @example `the specified instance does not exists`
                 */
                ErrorInfo: string;
                /**
                 * 命令下发失败或执行失败原因的代码，可能值：
                 * - 空：命令执行正常。
                 * - InstanceNotExists：指定的实例不存在或已释放。
                 * - InstanceReleased：执行命令期间，该实例被释放。
                 * - InstanceNotRunning：命令执行时，该实例不在运行中。
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
                 * - ExecutionInterrupted：命令执行被中断。
                 * - ExitCodeNonzero：命令执行结束，退出码非0。
                 * - SecurityGroupRuleDenied：安全组规则拒绝访问云助手服务。
                 * @example `InstanceNotExists`
                 */
                ErrorCode: string;
                /**
                 * 命令执行的完成时间。如果命令执行出现超时情况，命令执行的完成时间以`StartTime`延迟执行命令的超时时间`Timeout`为准。
                 * @example `2019-12-20T06:15:56Z`
                 */
                FinishedTime: string;
                /**
                 * 命令执行ID。
                 * @example `t-hz0jdfwd9f****`
                 */
                InvokeId: string;
                /**
                 * 命令执行状态。可能值：
                 * - Running：运行中。
                 *     - 定时执行：未手动停止定时执行命令前，执行状态一直为进行中。
                 *     - 单次执行：一旦有进行中的命令进程，总的执行状态就为进行中。
                 * - Finished：已完成。
                 *     - 定时执行：命令进程不可能为执行完成。
                 *     - 单次执行：所有实例全部完成执行。或者手动停止部分实例的命令进程，其余实例全部执行完成。
                 * - Failed：执行失败。
                 *     - 定时执行：命令进程不可能为执行失败。
                 *     - 单次执行：所有实例全部执行失败。
                 * - PartialFailed：部分执行失败。
                 *     - 定时执行：命令进程不可能为部分失败。
                 *     - 单次执行：部分实例有执行失败的命令进程，则总执行状态为部分失败。
                 * - Stopped：命令执行已停止。
                 * - Stopping：正在停止执行的命令。
                 * @example `Running`
                 */
                InvokeRecordStatus: string;
                /**
                 * 在ECS实例中执行命令的用户名称。
                 * @example `test`
                 */
                Username: string;
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
    };
}
