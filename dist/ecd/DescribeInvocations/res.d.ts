export interface DescribeInvocationsResponse {
    /**
     * 本次调用返回的查询凭证值。
     * @example `AAAAAV3MpHK1AP0pfERHZN5pu6nmB7qrRFJ8vmttjxPL****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 脚本执行记录数组。
     */
    Invocations: {
        /**
         * 执行ID。
         * @example `t-hz0jdfwd9f****`
         */
        InvokeId: string;
        /**
         * 脚本内容，以Base64编码后传输。
         * @example `cnBtIC1xYSB8IGdyZXAgdnNm****`
         */
        CommandContent: string;
        /**
         * 脚本类型。
         * @example `RunPowerShellScript`
         */
        CommandType: string;
        /**
         * 脚本执行的总执行状态，总执行状态取决于本次调用的全部云桌面的共同执行状态，可能值：
         * - Pending：系统正在校验或发送命令。存在至少一台云桌面的脚本执行状态为Pending，则总执行状态为Pending。
         * - Running：命令正在云桌面上运行。存在至少一台云桌面的脚本执行状态为Running，则总执行状态为Running。
         * - Success：各个云桌面上的脚本执行状态均为Stopped或Success，且至少一个云桌面的脚本执行状态是Success，则总执行状态为Success。
         * - Failed：各个云桌面上的脚本执行状态均为Stopped或Failed，则总执行状态为Failed。云桌面上的脚本执行状态一项或多项为以下状态时，返回值均为Failed状态：
         *     - 命令校验失败（Invalid）
         *     - 命令发送失败（Aborted）
         *     - 命令执行完成但退出码非0（Failed）
         *     - 命令执行超时（Timeout）
         *     - 命令执行异常（Error）
         * - Stopping：正在停止任务。存在至少一台实例的脚本执行状态为Stopping，则总执行状态为Stopping。
         * - Stopped：任务已停止。所有实例的脚本执行状态是Stopped，则总执行状态为Stopped。实例上的脚本执行状态为以下状态时，返回值均为Stopped状态：
         *     - 任务已取消（Cancelled）
         *     - 任务已终止（Terminated）
         * - PartialFailed：部分实例执行成功且部分实例执行失败。各个实例的脚本执行状态均为Success、Failed或Stopped，则总执行状态为PartialFailed。
         * @example `Pending`
         */
        InvocationStatus: string;
        /**
         * 任务的创建时间。
         * @example `2020-12-19T09:15:46Z`
         */
        CreationTime: string;
        /**
         * 终端用户ID。
         * @example `User1`
         */
        EndUserId: string;
        /**
         * 执行目标云桌面数组。
         */
        InvokeDesktops: {
            /**
             * 单台云桌面的脚本进度状态。
             * @example `Success`
             */
            InvocationStatus: string;
            /**
             * 脚本进程的输出信息。
             * - 如果请参IncludeOutput设置为false，则不返回Output。
             * - 如果请参ContentEncoding设置为Base64，则Output为Base64编码后的输出信息。
             * @example `OutPutTestmsg`
             */
            Output: string;
            /**
             * 脚本进程的创建时间。
             * @example `2020-12-20T06:15:54Z`
             */
            CreationTime: string;
            /**
             * 任务状态的更新时间。
             * @example `2020-12-25T06:15:56Z`
             */
            UpdateTime: string;
            /**
             * 命令在该桌面上执行的次数。
             * @example `0`
             */
            Repeats: number;
            /**
             * 云桌面ID。
             * @example `ecd-7w78ozhjcwa3u****`
             */
            DesktopId: string;
            /**
             * Output字段中文字长度超出24 KB后，截断丢弃的文字长度。
             * @example `0`
             */
            Dropped: number;
            /**
             * 脚本进程在桌面中开始执行的时间。
             * @example `2020-12-20T06:15:55Z`
             */
            StartTime: string;
            /**
             * 如果调用了[stopInvocation](~~196957~~)，表示调用的时间。
             * @example `2020-12-25T09:15:47Z`
             */
            StopTime: string;
            /**
             * 脚本进程的结束时间。
             * @example `2020-12-20T06:15:56Z`
             */
            FinishTime: string;
            /**
             * 脚本进程的退出代码。
             * @example `0`
             */
            ExitCode: number;
            /**
             * 命令的下发失败或执行失败原因的代码，可能值：
             * - 空：命令运行正常。
             * - InstanceNotExists：指定的云桌面不存在或已释放。
             * - InstanceReleased：执行任务期间，该云桌面被释放。
             * - InstanceNotRunning：创建任务时，该云桌面不在运行中。
             * - CommandNotApplicable：命令不适用于指定的云桌面。
             * - ClientNotRunning：云助手客户端未运行。
             * - ClientNotResponse：云助手客户端无响应。
             * - ClientIsUpgrading：云助手客户端正在升级中。
             * - ClientNeedUpgrade：云助手客户端需要升级。
             * - DeliveryTimeout：发送命令超时。
             * - ExecutionTimeout：命令运行超时。
             * - ExecutionException：命令运行发生异常。
             * - ExecutionInterrupted：命令运行任务中断。
             * - ExitCodeNonzero：命令执行结束，退出码非0。
             * @example `InstanceNotExists`
             */
            ErrorCode: string;
            /**
             * 命令的下发失败或执行失败原因的详情，可能值：
             * - 空：命令运行正常。
             * - the specified instance does not exists：指定的云桌面不存在或已释放。
             * - the instance has released when create task：执行任务期间，该云桌面被释放。
             * - the instance is not running when create task：创建任务时，该云桌面不在运行中。
             * - the command is not applicable：命令不适用于指定的云桌面。
             * - the aliyun service is not running on the instance：云助手客户端未运行。
             * - the aliyun service in the instance does not response：云助手客户端无响应。
             * - the aliyun service in the instance is upgrading now：云助手客户端正在升级中。
             * - the aliyun service in the instance need upgrade：云助手客户端需要升级。
             * - the command delivery has been timeout：发送命令超时。
             * - the command execution has been timeout：命令运行超时。
             * - the command execution got an exception：命令运行发生异常。
             * - the command execution has been interrupted：命令运行任务中断。
             * - the command execution exit code is not zero：命令执行结束，退出码非0。
             * @example `The specified instance does not exist.`
             */
            ErrorInfo: string;
            /**
             * 云桌面名称。
             * @example `demo1234`
             */
            DesktopName: string;
        }[];
    }[];
}
