export interface DescribeInvocationsResponse {
    /**
     * 请求id
     * @example `4FD06DF0-9167-5C6F-A145-F30CA4A15D54`
     */
    RequestId: string;
    /**
     * 脚本执行记录对象。
     */
    Invocations: {
        /**
         * 文件下发记录。
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
             * @example `Success`
             */
            InvocationStatus: string;
            /**
             * 命令执行的方式。可能值：
             * Once：立即执行命令。
             * Period：定时执行命令。
             * NextRebootOnly：当实例下一次启动时，自动执行命令。
             * EveryReboot：实例每一次启动都将自动执行命令。
             * @example `Once`
             */
            RepeatMode: string;
            /**
             * 命令执行的总执行状态。总执行状态取决于创建执行中的一台或多台实例的共同执行状态。取值范围：
             *
             * - Running：
             *     - 定时执行：未手动停止定时执行命令前，执行状态一直为进行中。
             *     - 单次执行：一旦有进行中的命令进程，总的执行状态就为进行中。
             * - Finished：
             *     - 定时执行：命令进程不可能为执行完成。
             *     - 单次执行：所有实例全部完成执行。或者手动停止部分实例的命令进程，其余实例全部执行完成。
             * - Failed：
             *     - 定时执行：命令进程不可能为执行失败。
             *     - 单次执行：所有实例全部执行失败。
             * - Stopped：停止命令。
             * - Stopping：停止中。
             * - PartialFailed：部分失败；如果同时设置了`InstanceId`参数，则不生效。
             * @example `Running`
             */
            InvokeStatus: string;
            /**
             * 命令中的自定义参数。
             * @example `{}`
             */
            Parameters: string;
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
             * @example `t-ind3k9ytvvduoe8`
             */
            InvokeId: string;
            /**
             * 执行命令的用户名称。
             * @example `root`
             */
            Username: string;
            /**
             * 命令在实例中的运行目录。
             * @example `/home`
             */
            WorkingDir: string;
            /**
             * 执行命令的超时时间，单位：秒。
             * @example `60`
             */
            Timeout: number;
            /**
             * 命令执行记录
             */
            InvokeNodes: {
                /**
                 * 节点命令执行记录
                 */
                InvokeNode: {
                    /**
                     * 命令执行的开始时间。
                     * @example `2023-02-06T07:12:50Z`
                     */
                    CreationTime: string;
                    /**
                     * 更新时间
                     * @example `2023-02-06T07:12:50Z`
                     */
                    UpdateTime: string;
                    /**
                     * 结束完成时间。
                     * @example `2023-02-06T07:12:50Z`
                     */
                    FinishTime: string;
                    /**
                     * 单台实例的命令进度状态，可能值：
                     * -  Pending：系统正在校验或发送命令。
                     * -  Invalid：指定命令类型或参数有误。
                     * -  Aborted：向实例发送命令失败。实例必须在运行中，且命令可以1分钟内发送完成。
                     * -  Running：命令正在实例上运行。
                     * -  Success：
                     *     -  单次执行的命令：命令执行完成，且退出码为0。
                     *     -  周期执行的命令：上一次运行成功且退出码为0，且指定的周期已结束。
                     * -  Failed：
                     *     -  单次执行的命令：命令执行完成，且退出码非0。
                     *     -  周期执行的命令：上一次运行成功且退出码非0，且指定的周期将中止。
                     * -  Error：命令执行时发生异常无法继续。
                     * -  Timeout：命令执行超时。
                     * -  Cancelled：命令的执行动作已经取消，命令未曾启动。
                     * -  Stopping：正在停止任务。
                     * -  Terminated：命令运行时被终止。
                     * -  Scheduled：
                     *     -  单次执行的命令：不适用，不会出现。
                     *     -  周期执行的命令：等待运行。
                     * @example `Pending`
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
                     * 节点id
                     * @example `e01-cn-lbj36wkp70b`
                     */
                    NodeId: string;
                    /**
                     * 命令的输出信息。
                     * 若ContentEncoding指定PlainText，返回原始输出信息。
                     * 若ContentEncoding指定Base64，返回Base64编码后的输出信息。
                     * @example `OutPutTestmsg`
                     */
                    Output: string;
                    /**
                     * Output字段中文字长度超出24 KB后，截断丢弃的文字长度。
                     * @example `0`
                     */
                    Dropped: number;
                    /**
                     * 若调用了StopInvocation以停止命令执行，表示调用的时间。
                     * @example `2019-12-20T06:15:55Z
                    `
                     */
                    StopTime: string;
                    /**
                     * 命令进程的退出代码。可能值：
                     * Linux实例为Shell进程的退出码。
                     * Windows实例为Bat或者PowerShell进程的退出码。
                     * @example `0`
                     */
                    ExitCode: number;
                    /**
                     * 开始时间
                     * @example `2019-12-20T06:15:55Z`
                     */
                    StartTime: string;
                    /**
                     * 命令的下发失败或执行失败原因的详情，可能值：
                     * - 空：命令执行正常。
                     * - the specified node does not exists：指定的实例不存在或已释放。
                     * - the node has node when create task：执行命令期间，该实例被释放。
                     * - the node is not running when create task：命令执行时，该实例不在运行中。
                     * - the command is not applicable：命令不适用于指定的实例。
                     * - the specified account does not exists：指定的账号不存在。
                     * - the specified directory does not exists：指定的目录不存在。
                     * - the cron job expression is invalid：指定的执行时间表达式不合法。
                     * - the aliyun service is not running on the instance：云助手Agent未运行。
                     * - the aliyun service in the instance does not response：云助手Agent无响应。
                     * - the aliyun service in the node is upgrading now：云助手Agent正在升级中。
                     * - the aliyun service in the node need upgrade：云助手Agent需要升级。
                     * - the command delivery has been timeout：发送命令超时。
                     * - the command execution has been timeout：命令执行超时。
                     * - the command execution got an exception：命令执行发生异常。
                     * - the command execution has been interrupted：命令执行被中断。
                     * - the command execution exit code is not zero：命令执行结束，退出码非0。
                     * - the specified node has been released：下发文件期间，该实例被释放。
                     * @example `the specified node does not exists`
                     */
                    ErrorInfo: string;
                    /**
                     * 查询的命令是否在将来会自动执行。取值范围：
                     * - true：查询在调用`RunCommand`或`InvokeCommand`执行命令时，`RepeatMode`参数取值为`Period`、`NextRebootOnly`或者`EveryReboot`。
                     * - false：查询以下两种状态的命令。
                     *     - 在调用`RunCommand`或`InvokeCommand`执行命令时，`RepeatMode`参数取值为`Once`。
                     *     - 已被取消、被停止或者已完成执行的命令。
                     * 默认值：false。
                     * @example `false`
                     */
                    Timed: string;
                    /**
                     * 文件下发的失败原因代码。可能值：
                     * 空：文件下发正常。
                     * NodeNotExists：指定的实例不存在或已释放。
                     * NodeReleased：下发文件期间，该实例被释放。
                     * NodeNotRunning：创建下发文件任务时，该实例不在运行中。
                     * AccountNotExists：指定的账号不存在。
                     * ClientNotRunning：云助手Agent未运行。
                     * ClientNotResponse：云助手Agent无响应。
                     * ClientIsUpgrading：云助手Agent正在升级中。
                     * ClientNeedUpgrade：云助手Agent需要升级。
                     * DeliveryTimeout：发送文件超时。
                     * FileCreateFail：文件创建失败。
                     * FileAlreadyExists：相同路径下存在同名文件。
                     * FileContentInvalid：文件内容不合法。
                     * FileNameInvalid：文件名不合法。
                     * FilePathInvalid：文件路径不合法。
                     * FileAuthorityInvalid：文件权限不合法。
                     * UserGroupNotExists：发送文件时指定的用户组不存在。
                     * @example ` NodeNotExists：`
                     */
                    ErrorCode: boolean;
                    /**
                     * 单台实例的命令进度状态。
                     * @example `Finished`
                     */
                    NodeInvokeStatus: string;
                }[];
            };
        }[];
    };
}
