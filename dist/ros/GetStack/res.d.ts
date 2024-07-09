export interface GetStackResponse {
    /**
     * 资源栈状态。取值：
     * - CREATE\_IN_PROGRESS：资源栈创建中。
     * - CREATE_FAILED：资源栈创建失败。
     * - CREATE_COMPLETE：资源栈创建成功。
     * - UPDATE\_IN_PROGRESS：资源栈更新中。
     * - UPDATE_FAILED：资源栈更新失败。
     * - UPDATE_COMPLETE：资源栈更新成功。
     * - DELETE\_IN_PROGRESS：资源栈删除中。
     * - DELETE_FAILED：资源栈删除失败。
     * - DELETE_COMPLETE：资源栈删除成功。
     * - CREATE\_ROLLBACK\_IN_PROGRESS：创建资源栈回滚中。
     * - CREATE\_ROLLBACK_FAILED：创建资源栈回滚失败。
     * - CREATE\_ROLLBACK_COMPLETE：创建资源栈回滚成功。
     * - ROLLBACK\_IN_PROGRESS：资源栈回滚中。
     * - ROLLBACK_FAILED：资源栈回滚失败。
     * - ROLLBACK_COMPLETE：资源栈回滚成功。
     * - CHECK\_IN_PROGRESS：资源栈校验中。
     * - CHECK_FAILED：资源栈校验失败。
     * - CHECK_COMPLETE：资源栈校验成功。
     * - REVIEW\_IN_PROGRESS：资源栈核对中。
     * - IMPORT\_CREATE\_IN_PROGRESS：通过资源导入创建资源栈中。
     * - IMPORT\_CREATE_FAILED：通过资源导入创建资源栈失败。
     * - IMPORT\_CREATE_COMPLETE：通过资源导入创建资源栈成功。
     * - IMPORT\_CREATE\_ROLLBACK\_IN_PROGRESS：通过资源导入创建资源栈回滚中。
     * - IMPORT\_CREATE\_ROLLBACK_FAILED：通过资源导入创建资源栈回滚失败。
     * - IMPORT\_CREATE\_ROLLBACK_COMPLETE：通过资源导入创建资源栈回滚成功。
     * - IMPORT\_UPDATE\_IN_PROGRESS：通过资源导入更新资源栈中。
     * - IMPORT\_UPDATE_FAILED：通过资源导入更新资源栈失败。
     * - IMPORT\_UPDATE_COMPLETE：通过资源导入更新资源栈成功。
     * - IMPORT\_UPDATE\_ROLLBACK\_IN_PROGRESS：通过资源导入更新资源栈回滚中。
     * - IMPORT\_UPDATE\_ROLLBACK_FAILED：通过资源导入更新资源栈回滚失败。
     * - IMPORT\_UPDATE\_ROLLBACK_COMPLETE：通过资源导入更新资源栈回滚成功。
     * @example `CREATE_COMPLETE`
     */
    Status: string;
    /**
     * 资源栈的描述信息。
     * @example `Create a VPC.`
     */
    Description: string;
    /**
     * 资源栈参数。
     */
    Parameters: {
        /**
         * 参数名称。
         * @example `ALIYUN::Region`
         */
        ParameterKey: string;
        /**
         * 参数值。
         * @example `cn-hangzhou`
         */
        ParameterValue: string;
    }[];
    /**
     * 请求ID。
     * @example `B288A0BE-D927-4888-B0F7-B35EF84B6E6F`
     */
    RequestId: string;
    /**
     * 资源栈状态说明。
     * @example `Stack CREATE completed successfully`
     */
    StatusReason: string;
    /**
     * 父资源栈ID。
     * @example `4a6c9851-3b0f-4f5f-b4ca-a14bf692****`
     */
    ParentStackId: string;
    /**
     * 资源栈创建时间。按照ISO8601标准表示，需使用UTC时间，格式：YYYY-MM-DDThh:mm:ss。
     * @example `2020-09-16T08:21:40`
     */
    CreateTime: string;
    /**
     * 是否开启资源栈删除保护。取值：
     * - Enabled：开启资源栈删除保护。
     * - Disabled：关闭资源栈删除保护。此时支持通过控制台或API（DeleteStack）释放资源栈。
     * > 嵌套资源栈的删除保护机制与根资源栈一致。
     * @example `Disabled`
     */
    DeletionProtection: string;
    /**
     * 根资源栈ID。当资源栈为嵌套资源栈时，会返回该参数。
     * @example `4a6c9851-3b0f-4f5f-b4ca-a14bf692****`
     */
    RootStackId: string;
    /**
     * 模板描述。
     * @example `Create a VPC.`
     */
    TemplateDescription: string;
    /**
     * 资源栈类型。取值：
     * - ROS：使用ROS模板的资源栈。
     * - Terraform：使用Terraform模板的资源栈。
     * @example `ROS`
     */
    StackType: string;
    /**
     * RAM角色名称。ROS会扮演该角色创建资源栈，使用角色的凭证代表用户进行接口调用。
     * ROS始终将此角色用于资源栈上将进行的操作。只要用户有权在资源栈上进行操作，即使用户无权使用角色，ROS也会使用此角色，确保角色授予最少的权限。
     * 如果用户未指定该值，ROS将使用以前与资源栈关联的角色。如果没有可用角色，ROS将使用从您的用户凭证中生成的临时凭证。
     * RAM角色名称最大长度为64个字节。
     * @example `test-role`
     */
    RamRoleName: string;
    /**
     * 资源栈更新时间。按照ISO8601标准表示，需使用UTC时间，格式：YYYY-MM-DDThh:mm:ss。
     * @example `2020-09-17T08:21:40`
     */
    UpdateTime: string;
    /**
     * 资源栈输出列表。
     */
    Outputs: any[];
    /**
     * 资源栈最近一次成功的偏差检测的时间。
     * @example `2020-09-16T09:21:40`
     */
    DriftDetectionTime: string;
    /**
     * 要创建的资源栈所属的地域ID。您可以调用[DescribeRegions](~~131035~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    RegionId: string;
    /**
     * 资源栈最近一次成功的偏差检测中的资源栈的状态。取值：
     * - DRIFTED：资源栈处于偏差状态。
     * - NOT_CHECKED：资源栈未进行过成功的偏差检测。
     * - IN_SYNC：资源栈处于同步状态。
     * @example `IN_SYNC`
     */
    StackDriftStatus: string;
    /**
     * 接收资源栈事件的URL回调地址。
     */
    NotificationURLs: string[];
    /**
     * 当创建资源栈失败时，是否禁用回滚策略。取值：
     * - true：禁用回滚，即当创建资源栈失败时不进行回滚。
     * - false（默认值）：不禁用回滚，即当创建资源栈失败时进行回滚。
     * @example `false`
     */
    DisableRollback: boolean;
    /**
     * 资源栈名称。
     * 长度不超过255个字符，必须以数字或英文字母开头，可包含数字、英文字母、短划线（-）和下划线（_）。
     * @example `MyStack`
     */
    StackName: string;
    /**
     * 资源栈的标签。
     */
    Tags: {
        /**
         * 资源栈的标签键。
         * @example `usage`
         */
        Key: string;
        /**
         * 资源栈的标签值。
         * @example `test`
         */
        Value: string;
    }[];
    /**
     * 创建资源栈的超时时间。单位：分钟。
     * @example `10`
     */
    TimeoutInMinutes: number;
    /**
     * 资源栈ID。
     * @example `c754d2a4-28f1-46df-b557-9586173a****`
     */
    StackId: string;
    /**
     * 资源组ID。
     * @example `rg-acfmxazb4ph6aiy****`
     */
    ResourceGroupId: string;
    /**
     * 资源处理进度。
     */
    ResourceProgress: {
        /**
         * 总资源数。
         * > 仅在`ShowResourceProgress`参数取值为`EnabledIfCreateStack`时返回。
         * @example `2`
         */
        TotalResourceCount: number;
        /**
         * 处理成功的资源数。
         * > 仅在`ShowResourceProgress`参数取值为`EnabledIfCreateStack`时返回。
         * @example `1`
         */
        SuccessResourceCount: number;
        /**
         * 处理失败的资源数。
         * > 仅在`ShowResourceProgress`参数取值为`EnabledIfCreateStack`时返回。
         * @example `0`
         */
        FailedResourceCount: number;
        /**
         * 处理中的资源数。
         * > 仅在`ShowResourceProgress`参数取值为`EnabledIfCreateStack`时返回。
         * @example `1`
         */
        InProgressResourceCount: number;
        /**
         * 待处理的资源数。
         * > 仅在`ShowResourceProgress`参数取值为`EnabledIfCreateStack`时返回。
         * @example `0`
         */
        PendingResourceCount: number;
        /**
         * 处理中的资源进度详情列表。
         * > 仅在`ShowResourceProgress`参数取值为`EnabledIfCreateStack`时返回。
         */
        InProgressResourceDetails: {
            /**
             * 资源名称。
             * @example `WaitCondition`
             */
            ResourceName: string;
            /**
             * 资源类型。
             * @example `ALIYUN::ROS::WaitCondition`
             */
            ResourceType: string;
            /**
             * 资源进度当前值。
             * @example `5`
             */
            ProgressValue: number;
            /**
             * 资源进度目标值。
             * @example `10`
             */
            ProgressTargetValue: number;
        }[];
        /**
         * 资源栈操作进度百分比。取值范围：0-100。
         * 示例说明：创建资源栈时，取值从0开始一直在增加。如果创建成功，取值达到100。如果创建失败，开始回滚，则取值一直在减少。回滚成功时，取值达到0。该参数表示这次创建操作的整体进度，无论资源栈状态是创建中还是回滚中。
         * > 仅在`ShowResourceProgress`参数取值为`PercentageOnly`时返回。
         * @example `100`
         */
        StackOperationProgress: number;
        /**
         * 资源栈动作进度百分比。取值范围：0-100。
         * 示例说明：创建资源栈时，取值从0开始一直在增加。如果创建成功，取值达到100。如果创建失败，开始回滚，则取值从另一个值（100-资源创建失败时的进度值）开始一直在增加。回滚成功时，取值达到100。该参数在创建资源栈时，表示创建动作的进度，在资源栈回滚时，表示回滚动作的进度。
         * > 仅在`ShowResourceProgress`参数取值为`PercentageOnly`时返回。
         * @example `100`
         */
        StackActionProgress: number;
    };
    /**
     * 资源栈相关输出日志。
     */
    Log: {
        /**
         * Terraform输出日志。仅Terraform类型资源栈返回该参数。
         * 当LogOption未指定，或者LogOption取值为Stack或All时返回该参数。
         * > 运行中的资源栈不返回该参数。该参数表示资源栈最近一次操作（创建、继续创建、更新、删除）的日志。
         */
        TerraformLogs: {
            /**
             * 执行的Terraform命令名称。取值：
             * - apply
             * - plan
             * - destroy
             * - version
             * 关于命令含义的更多信息，请参见[Command](https://www.terraform.io/cli/commands)。
             * @example `apply`
             */
            Command: string;
            /**
             * 输出流。取值：
             * - stdout：标准输出。
             * - stderr：标准错误。
             * @example `stdout`
             */
            Stream: string;
            /**
             * 当前命令在当前输出流中输出的内容。
             * @example `Apply complete! Resources: 42 added, 0 changed, 0 destroyed.`
             */
            Content: string;
        }[];
        /**
         * 资源输出日志。当LogOption取值为Resource或All时返回该参数。
         * > 仅部分资源类型的资源会返回资源日志，例如：`ALIYUN::ROS::ResourceCleaner`。
         */
        ResourceLogs: {
            /**
             * 模板中定义的资源名称。
             * @example `MyResourceCleaner`
             */
            ResourceName: string;
            /**
             * 资源关联的所有日志。
             */
            Logs: {
                /**
                 * 资源关联的某条日志的关键字列表。
                 */
                Keys: string[];
                /**
                 * 资源关联的某条日志的内容。
                 * @example `[]`
                 */
                Content: string;
            }[];
        }[];
    };
    /**
     * 模板ID。仅在资源栈当前所使用的模板来自于用户自定义模板或共享模板时返回该参数。
     * 如果是共享模板，返回结果与模板的TemplateARN相同。
     * @example `a52f81be-496f-4e1c-a286-8852ab54****`
     */
    TemplateId: string;
    /**
     * 模板版本。仅在资源栈当前所使用的模板来自于用户自定义模板或共享模板时返回该参数。
     * 如果为共享模板，仅当共享时参数VersionOption为AllVersions时，返回该参数。
     * 取值范围：v1～v100。
     * @example `v1`
     */
    TemplateVersion: string;
    /**
     * 资源场景ID。仅在资源栈当前所使用的模板来自于资源场景时返回该参数。
     * @example `ts-7f7a704cf71c49a6****`
     */
    TemplateScratchId: string;
    /**
     * 包含模板主体的文件的位置。仅在资源栈当前所使用的模板来自于URL时返回该参数，包括Web服务器（HTTP或HTTPS）或阿里云OSS存储空间等。
     * @example `oss://ros/template/demo`
     */
    TemplateURL: string;
    /**
     * 界面描述信息。
     * @example `{}`
     */
    Interface: string;
    /**
     * 是否为托管资源栈。取值：
     * - true：是托管资源栈。
     * - false：不是托管资源栈。
     * @example `false`
     */
    ServiceManaged: boolean;
    /**
     * 托管资源栈所属的服务名称。
     * @example `ACVS`
     */
    ServiceName: string;
    /**
     * 资源栈操作发生错误时的补充信息。
     * > 该返回属性仅在特定情况下返回，且至少返回一个子属性。例如：调用其他云服务API报错。
     */
    OperationInfo: {
        /**
         * 错误码。
         * @example `DependencyViolation`
         */
        Code: string;
        /**
         * 错误内容。
         * @example `There is still instance(s) in the specified security group.`
         */
        Message: string;
        /**
         * 调用其他云服务API的请求ID。
         * @example `071D6166-3F6B-5C7B-A1F0-0113FBB643A8`
         */
        RequestId: string;
        /**
         * 调用其他云服务API的名称。
         * @example `DeleteSecurityGroup`
         */
        Action: string;
        /**
         * 发生操作错误的资源类型。
         * @example `ALIYUN::ECS::SecurityGroup`
         */
        ResourceType: string;
        /**
         * 发生操作错误的资源逻辑ID。
         * @example `EcsSecurityGroup`
         */
        LogicalResourceId: string;
    };
    /**
     * 订单ID列表，当创建资源栈时设置了手动支付包年包月订单时才会返回。
     */
    OrderIds: string[];
    /**
     * 已执行偏差检查的资源数。
     * > 仅在资源栈上次偏差检测成功时返回。
     * @example `1`
     */
    CheckedStackResourceCount: number;
    /**
     * 没有执行过偏差检查的资源数。
     * > 仅在资源栈上次偏差检测成功时返回。
     * @example `1`
     */
    NotCheckedStackResourceCount: number;
    /**
     * 当资源栈状态为回滚失败时，该字段展示导致回滚的前一阶段执行失败的原因。
     * @example `Resource UPDATE failed: Exception: resources.FailToCreate: FailToCreate: reason`
     */
    RollbackFailedRootReason: string;
}
