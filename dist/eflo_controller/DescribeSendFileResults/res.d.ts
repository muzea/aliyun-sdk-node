export interface DescribeSendFileResultsResponse {
    /**
     * Id of the request
     * @example `4FD06DF0-9167-5C6F-A145-F30CA4A15D54`
     */
    RequestId: string;
    /**
     * 命令总个数。
     * @example `1`
     */
    TotalCount: string;
    /**
     * 文件下发记录。
     */
    Invocations: {
        /**
         * 命令执行ID。
         */
        Invocation: {
            /**
             * 文件的权限。
             * @example `0644`
             */
            FileMode: string;
            /**
             * 如果同名文件在目标目录已存在，是否覆盖文件。
             * - true：覆盖。
             * - false：不覆盖。
             * 默认值为false。
             * @example `true`
             */
            Overwrite: boolean;
            /**
             * 文件的总下发状态。总状态取决于本次下发的全部实例的共同执行状态，可能值：
             * - Pending：系统正在校验或下发文件。存在至少一台实例的文件下发状态为Pending，则总执行状态为Pending。
             * - Running：正在实例上下发文件。存在至少一台实例的文件下发状态为Running，则总执行状态为Running。
             * - Success：各个实例上的文件下发状态均为Success，则总执行状态为Success。
             * - Failed：各个实例上的文件下发状态均为Failed，则总执行状态为Failed。实例上的文件下发状态一项或多项为以下状态时，返回值均为Failed状态：
             *     - 指定文件参数有误，校验失败（Invalid）。
             *     - 向实例下发文件失败（Aborted）。
             *     - 文件在实例内创建失败（Failed）。
             *     - 下发文件超时（Timeout）。
             *     - 下发文件时发生异常无法继续（Error）。
             * - PartialFailed：部分实例文件下发成功且部分实例下发失败。各个实例的文件下发状态均为Success或Failed，则总执行状态为PartialFailed。
             * @example `Pending`
             */
            InvocationStatus: string;
            /**
             * 命令描述。
             * @example `描述信息。`
             */
            Description: string;
            /**
             * 文件内容类型。
             * PlainText：普通文本。
             * Base64：Base64编码。
             * 默认值为PlainText。
             * @example `PlainText`
             */
            ContentType: string;
            /**
             * 节点数量
             * @example `3`
             */
            NodeCount: number;
            /**
             * 目标路径。
             * @example `	/home/user`
             */
            TargetDir: string;
            /**
             * 文件的用户组。
             * @example `root`
             */
            FileGroup: string;
            /**
             * 文件的用户。
             * @example `root`
             */
            FileOwner: string;
            /**
             * 文件下发名称
             * @example `test`
             */
            Name: string;
            /**
             * 命令执行后的输出信息。
             * 若ContentEncoding指定PlainText，返回原始输出信息。
             * 若ContentEncoding指定Base64，返回Base64编码后的输出信息。
             * @example `Base64`
             */
            Content: string;
            /**
             * 下发创建时间
             * @example `2023-04-10T10:53:46.156+08:00
            `
             */
            CreationTime: string;
            /**
             * 文件下发记录
             */
            InvokeNodes: {
                /**
                 * 节点文件下发记录
                 */
                InvokeNode: {
                    /**
                     * 单台实例下发任务的状态，可能值：
                     * - Pending：系统正在校验或下发文件。
                     * - Invalid：指定文件参数有误，校验失败。
                     * - Running：正在实例上下发文件。
                     * - Aborted：向实例下发文件失败。
                     * - Success：文件下发完成。
                     * - Failed：文件在实例内创建失败。
                     * - Error：下发文件时发生异常无法继续。
                     * - Timeout：下发文件超时。
                     * @example `Success`
                     */
                    InvocationStatus: string;
                    /**
                     * 结束时间，格式："2020-05-22T17:04:18"。
                     * @example `2023-04-10T10:53:46.156+08:00`
                     */
                    FinishTime: string;
                    /**
                     * 节点id
                     * @example `e01-cn-9lb3c15m81j`
                     */
                    NodeId: string;
                    /**
                     * 命令的下发失败或执行失败原因的详情，可能值：
                     * - 空：命令执行正常。
                     * - the specified instance does not exists：指定的实例不存在或已释放。
                     * - the node has released when create task：执行命令期间，该实例被释放。
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
                     * - the specified instance has been released：下发文件期间，该实例被释放。
                     * @example `the specified instance does not exists`
                     */
                    ErrorInfo: string;
                    /**
                     * 文件下发任务的创建时间。
                     * @example `2023-02-06T07:12:50Z`
                     */
                    CreationTime: string;
                    /**
                     * 开始时间
                     * @example `2023-03-30T16:00:00Z`
                     */
                    StartTime: string;
                    /**
                     * 更新时间
                     * @example `2023-03-30T16:00:00Z`
                     */
                    UpdateTime: string;
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
                     * @example `AccountNotExists`
                     */
                    ErrorCode: string;
                }[];
            };
        }[];
    };
}
