export interface DescribeSendFileResultsResponse {
    /**
     * 每页行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 查询结果的当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 脚本总个数。
     * @example `2`
     */
    TotalCount: number;
    /**
     * 本次调用返回的查询凭证值。
     * @example `AAAAAdDWBF2`
     */
    NextToken: string;
    Invocations: {
        /**
         * 文件下发记录。
         */
        Invocation: {
            /**
             * 文件下发任务创建时间。
             * @example `2019-12-20T06:15:54Z`
             */
            CreationTime: string;
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
             * @example `Success`
             */
            InvocationStatus: string;
            /**
             * 文件内容类型。可能值：
             * - PlainText：普通文本。
             * - Base64：Base64编码。
             * @example `PlainText`
             */
            ContentType: string;
            /**
             * 目标路径。
             * @example `/home/user`
             */
            TargetDir: string;
            /**
             * 文件的用户。
             * @example `test`
             */
            FileOwner: string;
            /**
             * 描述信息。
             * @example `This is a test file.`
             */
            Description: string;
            /**
             * 下发实例的数量。
             * @example `1`
             */
            VmCount: number;
            /**
             * 文件的权限。
             * @example `777`
             */
            FileMode: string;
            /**
             * 文件的用户组。
             * @example `test`
             */
            FileGroup: string;
            /**
             * 执行ID。
             * @example `f-hz0jdfwd9f****`
             */
            InvokeId: string;
            /**
             * 文件名称。
             * @example `test.txt`
             */
            Name: string;
            /**
             * 文件内容。
             * @example `#!/bin/bash  echo "Current User is :"  echo $(ps | grep "$$" | awk '{print $2}')`
             */
            Content: string;
            /**
             * 是否允许覆盖。
             * @example `false`
             */
            Overwrite: string;
            InvokeInstances: {
                /**
                 * 下发文件目标实例集类型。
                 */
                InvokeInstance: {
                    /**
                     * 文件下发任务的创建时间。
                     * @example `2019-12-20T06:15:54Z`
                     */
                    CreationTime: string;
                    /**
                     * 下发任务在实例中开始执行的时间。
                     * @example `2019-12-20T06:15:54Z`
                     */
                    StartTime: string;
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
                     * 下发任务的结束时间。
                     * @example `2019-12-20T06:15:54Z`
                     */
                    FinishTime: string;
                    /**
                     * 任务状态的更新时间。
                     * @example `2019-12-20T06:15:54Z`
                     */
                    UpdateTime: string;
                    /**
                     * 文件下发的失败或执行失败原因详情。可能值：
                     * - 空：文件下发正常。
                     * - the specified instance does not exists：指定的实例不存在或已释放。
                     * - the specified instance has been released.：下发文件期间，该实例被释放。
                     * - the instance is not running when create task：创建下发文件任务时，该实例不在运行中。
                     * - the specified account does not exists：指定的账号不存在。
                     * - the aliyun service is not running on the instance：云助手Agent未运行。
                     * - the aliyun service in the instance does not response：云助手Agent无响应。
                     * - the aliyun service in the instance is upgrading now：云助手Agent正在升级中。
                     * - the aliyun service in the instance need upgrade：云助手Agent需要升级。
                     * - the command delivery has been timeout：下发文件超时。
                     * - the file creation is failed due to unknown error：文件创建失败。
                     * - the authority of file is invalid：文件权限不合法。
                     * - File content is empty：文件内容为空。
                     * - the content of file is invalid：文件内容不合法。
                     * - File already exists：相同路径下存在同名文件。
                     * - File name is invalid：文件名不合法。
                     * - File path is invalid：文件路径不合法。
                     * - Owner not exists：用户不存在。
                     * - Group not exists：用户组不存在。
                     * - Mode is invalid：文件权限设置不合法。
                     * @example `the instance is not running when create task`
                     */
                    ErrorInfo: string;
                    /**
                     * 文件下发的失败原因代码。可能值：
                     * - 空：文件下发正常。
                     * - InstanceNotExists：指定的实例不存在或已释放。
                     * - InstanceReleased：下发文件期间，该实例被释放。
                     * - InstanceNotRunning：创建下发文件任务时，该实例不在运行中。
                     * - AccountNotExists：指定的账号不存在。
                     * - ClientNotRunning：云助手Agent未运行。
                     * - ClientNotResponse：云助手Agent无响应。
                     * - ClientIsUpgrading：云助手Agent正在升级中。
                     * - ClientNeedUpgrade：云助手Agent需要升级。
                     * - DeliveryTimeout：发送文件超时。
                     * - FileCreateFail：文件创建失败。
                     * - FileAlreadyExists：相同路径下存在同名文件。
                     * - FileContentInvalid：文件内容不合法。
                     * - FileNameInvalid：文件名不合法。
                     * - FilePathInvalid：文件路径不合法。
                     * - FileAuthorityInvalid：文件权限不合法。
                     * - UserGroupNotExists：发送文件时指定的用户组不存在。
                     * @example `InstanceNotExists`
                     */
                    ErrorCode: string;
                    /**
                     * 实例ID。
                     * @example `i-uf614fhehhz****`
                     */
                    InstanceId: string;
                }[];
            };
            Tags: {
                /**
                 * 文件下发的标签信息。
                 */
                Tag: {
                    /**
                     * 文件下发的标签键。
                     * @example `owner`
                     */
                    TagKey: string;
                    /**
                     * 文件下发的标签值。
                     * @example `zhangsan`
                     */
                    TagValue: string;
                }[];
            };
        }[];
    };
}
