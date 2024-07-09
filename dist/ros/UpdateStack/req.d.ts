export interface UpdateStackRequest {
    /**
     * 资源栈ID。
     * @example `4a6c9851-3b0f-4f5f-b4ca-a14bf691****`
     */
    "StackId": string;
    /**
     * 保证请求的幂等性。此参数值由客户端生成，并且必须全局唯一。
     * 长度不超过64个字符，可包含英文字母、数字、短划线（-）和下划线（_）。
     * 更多信息，请参见[如何保证幂等性](~~134212~~)。
     * @example `123e4567-e89b-12d3-a456-42665544****`
     */
    "ClientToken"?: string;
    /**
     * 临时覆盖资源栈策略主体的结构。长度为1~16,384个字节。
     * 如果要更新受保护的资源，请在更新期间指定临时覆盖资源栈策略。如果未指定资源栈策略，将使用与资源栈关联的当前策略。
     * 此参数仅在更改集类型为UPDATE时生效。您只能指定以下参数之一：
     * - StackPolicyBody
     * - StackPolicyURL
     * - StackPolicyDuringUpdateBody
     * - StackPolicyDuringUpdateURL
     * @example `{"Statement": [{"Effect": "Allow", "Action": "Update:*", "Principal": "*", "Resource": "*"}]}`
     */
    "StackPolicyDuringUpdateBody"?: string;
    /**
     * 更新资源栈的超时时间。
     *
     * - 默认值：60。
     * - 单位：分钟。
     * @example `10`
     */
    "TimeoutInMinutes"?: number;
    /**
     * 模板主体的结构。长度为1~524,288个字节。 如果长度较大，则建议通过HTTP POST+Body Param的方式，将参数放在请求体中进行传递，避免URL过长而导致请求失败。
     * > 您必须且仅能指定TemplateBody、TemplateURL或TemplateId其中一个参数。
     * @example `{"ROSTemplateFormatVersion": "2015-09-01"}`
     */
    "TemplateBody"?: string;
    /**
     * 包含资源栈策略的文件的位置。URL必须指向位于Web服务器（HTTP或HTTPS）或阿里云OSS存储空间（例如：oss://ros/stack-policy/demo、oss://ros/stack-policy/demo?RegionId=cn-hangzhou）的策略，策略的文件最大值为16,384个字节。如未指定OSS地域，默认与接口参数RegionId相同。
     * > 您仅能指定StackPolicyBody或StackPolicyURL其中一个参数。
     *
     * URL最大长度为1350个字节。
     * @example `oss://ros-stack-policy/demo`
     */
    "StackPolicyURL"?: string;
    /**
     * 更新资源栈策略的文件的位置。URL必须指向位于Web服务器（HTTP或HTTPS）或阿里云OSS存储空间（例如：oss://ros/stack-policy/demo、oss://ros/stack-policy/demo?RegionId=cn-hangzhou）中的策略，策略的文件最大值为16,384个字节。
     * >  如未指定OSS地域，默认与接口参数RegionId相同。
     *
     * URL最大长度为1350个字节。
     * 如果要更新受保护的资源，请在更新期间指定临时覆盖资源栈策略。如果未指定资源栈策略，则将使用与资源栈关联的当前策略。此参数仅在更改集类型为UPDATE时生效。您只能指定以下参数之一：
     * - StackPolicyBody
     * - StackPolicyURL
     * - StackPolicyDuringUpdateBody
     * - StackPolicyDuringUpdateURL
     * @example `oss://ros-stack-policy/demo`
     */
    "StackPolicyDuringUpdateURL"?: string;
    /**
     * 资源栈策略主体的结构，长度为1~16,384个字节。
     * > 您仅能指定StackPolicyBody或StackPolicyURL其中一个参数。
     * @example `{"Statement": [{"Action": "Update:*", "Resource": "*", "Effect": "Allow", "Principal": "*"}]}`
     */
    "StackPolicyBody"?: string;
    /**
     * 未传递的参数是否使用上次传递的值。
     * 取值：
     * - true：未传递的参数使用上次传递的值。
     * - false：未传递的参数不使用上次传递的值。
     * @example `true`
     */
    "UsePreviousParameters"?: boolean;
    /**
     * 资源栈所属的地域ID。您可以调用[DescribeRegions](~~131035~~)查看最新的阿里云地域列表。
     * @example `cn-beijing`
     */
    "RegionId": string;
    /**
     * 资源栈更新失败时，是否强制回滚。
     * 取值：
     * - true：强制回滚。
     * - false（默认值）：不强制回滚。
     * @example `false`
     */
    "DisableRollback"?: boolean;
    /**
     * 包含模板主体的文件的位置。URL必须指向位于HTTP Web服务器（HTTP或HTTPS）或阿里云OSS存储空间中的模板（1~524,288个字节）。OSS存储空间的URL，例如oss://ros/template/demo或oss://ros/template/demo?RegionId=cn-hangzhou。如未指定OSS地域，默认与接口参数RegionId相同。
     * > 您必须且仅能指定TemplateBody、TemplateURL或TemplateId其中一个参数。
     * @example `oss://ros-template/demo`
     */
    "TemplateURL"?: string;
    /**
     * RAM角色名称。ROS会扮演该角色创建资源栈，使用角色的凭证代表用户进行接口调用。
     * ROS始终将此角色用于资源栈上将进行的操作。只要用户有权在资源栈上进行操作，即使用户无权使用角色，ROS也会使用此角色，确保角色授予最少的权限。关于如何使用RAM角色，请参见[使用资源栈角色](~~2568025~~)。
     * 如果用户未指定该值，ROS将使用以前与资源栈关联的角色。如果没有可用角色，ROS将使用从您的用户凭证中生成的临时凭证。
     * RAM角色名称最大长度为64个字节。
     * @example `test-role`
     */
    "RamRoleName"?: string;
    /**
     * 是否使用替换更新。当资源属性不支持修改更新时，可以使用替换更新改变资源属性。替换更新会删除资源后重新创建资源，新资源物理ID会发生变化。
     * 取值：
     * - Enabled：允许替换更新。
     * - Disabled（默认）：不允许替换更新。
     * > 修改更新的优先级高于替换更新。
     * @example `Disabled`
     */
    "ReplacementOption"?: string;
    /**
     * 模板ID。支持共享模板和私有模板。
     * > 您必须且仅能指定TemplateBody、TemplateURL或TemplateId其中一个参数。
     * @example `5ecd1e10-b0e9-4389-a565-e4c15efc****`
     */
    "TemplateId"?: string;
    /**
     * 模板版本。仅在指定TemplateId时生效。
     * @example `v1`
     */
    "TemplateVersion"?: string;
    /**
     * 参数。
     */
    "Parameters"?: {
        /**
         * 参数的名称。如果未指定参数的名称和取值，ROS将使用模板中指定的默认值。
         * N的最大值为200。
         * > Parameters为可选参数。如果需要指定Parameters，则Parameters.N.ParameterKey和Parameters.N.ParameterValue必须同时指定。
         * @example `Amount`
         */
        ParameterKey: string;
        /**
         * 参数值。N的最大值为200。
         * > Parameters为可选参数。如果需要指定Parameters，则Parameters.N.ParameterKey和Parameters.N.ParameterValue必须同时指定。
         * @example `12`
         */
        ParameterValue: string;
    }[];
    /**
     * 资源栈的标签。
     */
    "Tags"?: {
        /**
         * 资源栈的标签键。
         * N的取值范围为1~20。
         * > Tags为可选参数。如果需要指定Tags，则Tags.N.Key必须指定。- 此标签会传递到资源栈中每个支持标签的资源中。更多信息，请参见[标签传递](~~201421~~)。
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
     * 资源最大并发数。
     * 默认为空，用户可以输入大于等于零的整数。
     * > - 若设置为大于零的整数，则使用该整数。
     * >- 若设置为零，对于ROS类型资源栈不限制，Terraform类型资源栈使用Terraform默认值（通常为10）。
     * >- 若不设置，则使用上次操作时的设置；若上次操作时未设置，对于ROS类型资源栈不限制，Terraform类型资源栈使用Terraform默认值（通常为10）。
     * >- 若设置了该值，将与资源栈进行关联，影响资源栈的后续操作。
     * @example `1`
     */
    "Parallelism"?: number;
    /**
     * 资源组ID。
     * @example `rg-acfmxazb4ph6aiy****`
     */
    "ResourceGroupId"?: string;
    /**
     * 此次请求是否只进行检验。取值：
     * - true：只做校验，不会实际执行。
     * - false（默认）：会实际执行，更新资源栈。
     * > 更新资源栈时，若没有改动：DryRun为false时，会报错，错误码为NotSupported；DryRun为true时，不会报错。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 校验选项列表。列表最大长度为1。
     * > 仅在DryRun为true时生效。
     */
    "DryRunOptions"?: string[];
}
