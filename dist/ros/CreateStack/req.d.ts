export interface CreateStackRequest {
    /**
     * 当创建资源栈失败时，是否禁用回滚。
     * 取值：
     * - true：禁用回滚，即在创建资源栈失败时不进行回滚。
     * - false（默认值）：不禁用回滚，即在创建资源栈失败时进行回滚。
     * @example `false`
     */
    "DisableRollback"?: boolean;
    /**
     * 模板主体的结构。长度为1~524,288个字节。如果长度较长，则建议通过HTTP POST+Body Param的方式，将参数放在请求体中进行传递，避免因URL过长而导致请求失败。
     * > 您必须且仅能指定TemplateBody、TemplateURL、TemplateId或TemplateScratchId其中一个参数。
     * @example `{"ROSTemplateFormatVersion":"2015-09-01"}`
     */
    "TemplateBody"?: string;
    /**
     * 包含资源栈策略的文件的位置。URL必须指向位于Web服务器（HTTP或HTTPS）或阿里云OSS存储空间（例如：oss://ros/stack-policy/demo、oss://ros/stack-policy/demo?RegionId=cn-hangzhou）中的策略，策略文件最大长度为16,384个字节。如未指定OSS地域，默认与接口参数RegionId相同。
     * > 您仅能指定StackPolicyBody或StackPolicyURL其中一个参数。
     * URL最大长度为1350个字节。
     * @example `oss://ros-stack-policy/demo`
     */
    "StackPolicyURL"?: string;
    /**
     * 创建资源栈的超时时间。
     * - 默认值：60。
     * - 单位：分钟。
     * - 取值范围：10~1440。
     * @example `10`
     */
    "TimeoutInMinutes"?: number;
    /**
     * 包含资源栈策略主体的结构，长度为1~16,384个字节。
     * > 您仅能指定StackPolicyBody或StackPolicyURL其中一个参数。
     * @example `{"Statement": [{"Action": "Update:*", "Resource": "*", "Effect": "Allow", "Principal": "*"}]}`
     */
    "StackPolicyBody"?: string;
    /**
     * 资源栈名称。
     * 长度不超过255个字符，必须以英文字母开头，可包含数字、英文字母、短划线（-）和下划线（_）。
     * @example `MyStack`
     */
    "StackName": string;
    /**
     * 资源栈所属的地域ID。您可以调用[DescribeRegions](~~131035~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 保证请求的幂等性。该值由客户端生成，并且必须是全局唯一的。长度不超过64个字符，可包含英文字母、数字、短划线（-）和下划线（_）。
     * 更多信息，请参见[如何保证幂等性](~~134212~~)。
     * @example `123e4567-e89b-12d3-a456-42665544****`
     */
    "ClientToken"?: string;
    /**
     * 包含模板主体的文件的位置。URL必须指向位于Web服务器（HTTP或HTTPS）或阿里云OSS存储空间（例如：oss://ros/stack-policy/demo、oss://ros/stack-policy/demo?RegionId=cn-hangzhou）中的模板，模板的最大长度为524,288个字节。如未指定OSS地域，默认与RegionId取值相同。
     * > 您必须且仅能指定TemplateBody、TemplateURL、TemplateId或TemplateScratchId其中一个参数。
     * @example `oss://ros-template/demo`
     */
    "TemplateURL"?: string;
    /**
     * RAM角色名称。ROS会扮演该角色创建资源栈，使用角色的凭证代表用户进行接口调用。
     * ROS始终将此角色用于资源栈上将进行的操作。只要用户有权在资源栈上进行操作，即使用户无权使用角色，ROS也会使用此角色，确保角色授予最少的权限。关于如何使用RAM角色，请参见[使用资源栈角色](~~2568025~~)。
     * 如果用户未指定该值，ROS将使用以前与资源栈关联的角色。如果没有可用角色，ROS将使用从您的用户凭证中生成的临时凭证。
     * RAM角色名称最大长度为64个字符。
     * @example `test-role`
     */
    "RamRoleName"?: string;
    /**
     * 是否开启资源栈删除保护。取值：
     * - Enabled：开启资源栈删除保护。
     * - Disabled（默认）：关闭资源栈删除保护。此时支持通过控制台或API（DeleteStack）释放资源栈。
     * > 嵌套资源栈删除保护与根资源栈一致。
     *
     * @example `Enabled`
     */
    "DeletionProtection"?: string;
    /**
     * 创建选项，用于控制创建资源栈的行为。取值：
     * - KeepStackOnCreationComplete（默认值）：创建资源栈成功后保留资源栈及资源栈中的资源，占用ROS允许创建的资源栈数量限额。
     * - AbandonStackOnCreationComplete：创建资源栈成功后删除资源栈，但保留所有资源，不占用ROS允许创建的资源栈数量限额。如果创建资源栈失败，资源栈会保留。
     * - AbandonStackOnCreationRollbackComplete：创建资源栈回滚成功后删除资源栈，不占用ROS允许创建的资源栈数量限额。其他情况则保留资源栈。
     * - ManuallyPay：在创建资源栈过程中手动支付包年包月的资源。目前支持手动支付的资源类型包括`ALIYUN::ECS::InstanceGroup`、`ALIYUN::RDS::DBInstance`、`ALIYUN::SLB::LoadBalancer`、`ALIYUN::VPC::EIP`、`ALIYUN::VPC::VpnGateway`。
     * > 仅能指定CreateOption和CreateOptions其中一个参数。
     * @example `KeepStackOnCreationComplete`
     */
    "CreateOption"?: string;
    /**
     * 创建选项列表。
     */
    "CreateOptions"?: string[];
    /**
     * 模板ID。支持共享模板和私有模板。
     * > 您必须且仅能指定TemplateBody、TemplateURL、TemplateId或TemplateScratchId其中一个参数。
     * @example `5ecd1e10-b0e9-4389-a565-e4c15efc****`
     */
    "TemplateId"?: string;
    /**
     * 模板版本。仅在指定TemplateId时生效。
     * @example `v1`
     */
    "TemplateVersion"?: string;
    /**
     * 模板中已定义的参数。
     */
    "Parameters"?: {
        /**
         * 模板中已定义的参数的名称。如果未指定参数的名称和值，则ROS将使用模板中指定的默认值。
         * N最大值为200。
         * 长度为1~128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://` 。
         * > Parameters为可选参数。如果需要指定Parameters，则Parameters.N.ParameterKey和Parameters.N.ParameterValue必须同时指定。
         * @example `InstanceId`
         */
        ParameterKey: string;
        /**
         * 模板中已定义的参数的取值。
         * N最大值为200。
         * 长度为0~128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://` 。
         * > Parameters为可选参数。如果需要指定Parameters，则Parameters.N.ParameterKey和Parameters.N.ParameterValue必须同时指定。
         * @example `i-xxxxxx`
         */
        ParameterValue: string;
    }[];
    /**
     * 接收资源栈事件的回调地址。取值：
     * - HTTP POST URL
     * 每个URL最大长度为1024个字节。
     * - eventbridge
     * 资源栈状态变更会通知到事件总线（EventBridge）服务。您可以在[事件总线控制台](https://eventbridge.console.aliyun.com)查看事件信息。
     * > 当前支持华东1（杭州）、华东2（上海）、华北2（北京）、中国（香港）、华北3（张家口）五个地域。
     *
     * N最大值为5。资源栈的状态发生变化时，会进行通知。当资源栈启用回滚时，CREATE_FAILED（创建失败）和UPDATE_FAILED（更新失败）不会通知，而CREATE_ROLLBACK（创建失败回滚）和ROLLBACK（更新失败回滚）会进行通知。IN_PROGRESS状态不会通知。
     * 无论资源栈是否定义了Outputs都会进行通知。通知内容示例如下：
     *  ```
     * {
     *     "Outputs": [
     *         {
     *             "Description": "No description given",
     *             "OutputKey": "InstanceId",
     *             "OutputValue": "i-xxx"
     *         }
     *     ],
     *     "StackId": "80bd6b6c-e888-4573-ae3b-93d29113****",
     *     "StackName": "test-notification-url",
     *     "Status": "CREATE_COMPLETE"
     * }
     * ```
     * @example `http://my-site.com/ros-event`
     */
    "NotificationURLs"?: string[];
    /**
     * 资源栈的标签。
     */
    "Tags"?: {
        /**
         * 资源栈的标签键。
         * N的取值范围为1~20。
         * >- Tags为可选参数。如果需要指定Tags，则Tags.N.Key必须指定。
         * >- 此标签会传递到资源栈中每个支持标签的资源中。更多信息，请参见[标签传递](~~201421~~)。
         * @example `usage`
         */
        Key: string;
        /**
         * 资源栈的标签值。
         * N的取值范围为1~20。
         * > 此标签会传递到资源栈中每个支持标签的资源中。更多信息，请参见[标签传递](~~201421~~)。
         * @example `test`
         */
        Value: string;
    }[];
    /**
     * 资源组ID。如果不指定该参数，资源栈将加入默认资源组。
     * 关于资源组的更多信息，请参见[什么是资源组](~~94475~~)。
     * @example `rg-acfmxazb4ph6aiy****`
     */
    "ResourceGroupId"?: string;
    /**
     * 资源最大并发数。
     * 默认为空，用户可以输入大于等于零的整数。
     * > - 若设置为大于零的整数，则使用该整数；若设置为零或者不设置，对于ROS类型资源栈不限制，Terraform类型资源栈使用Terraform默认值（通常为10）。
     * > - 若设置了该值，将与资源栈进行关联，影响资源栈的后续操作，比如更新资源栈。
     * @example `1`
     */
    "Parallelism"?: number;
    /**
     * 资源场景ID。
     * 关于如何获取资源场景ID，请参见[ListTemplateScratches](~~363050~~)。
     * > 您必须且仅能指定TemplateBody、TemplateURL、TemplateId或TemplateScratchId其中一个参数。
     * @example `ts-aa9c62feab844a6b****`
     */
    "TemplateScratchId"?: string;
    /**
     * 资源场景所属的地域ID，默认与RegionId取值相同。
     * 您可以调用[DescribeRegions](~~131035~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "TemplateScratchRegionId"?: string;
}
