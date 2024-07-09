export interface CreateChangeSetRequest {
    /**
     * 创建更改集的资源栈的ID。ROS通过将此资源栈的信息与您提交的信息（例如：修改后的模板或不同的参数输入值）进行比较来生成更改集。
     * 您可以通过调用[ListStacks - 查询资源栈列表](~~610818~~)接口获取资源栈ID。
     * > 该参数仅在更改集类型为UPDATE或IMPORT时生效。
     * @example `4a6c9851-3b0f-4f5f-b4ca-a14bf691****`
     */
    "StackId"?: string;
    /**
     * 包含资源栈策略的文件的位置。URL必须指向位于Web服务器（HTTP或HTTPS）或阿里云OSS存储空间（例如：oss://ros/stack-policy/demo、oss://ros/stack-policy/demo?RegionId=cn-hangzhou）的策略，策略文件长为16384个字节。
     * URL的最大长度为1350个字节。
     * > OSS地域如未指定，默认与接口参数RegionId相同。
     * 当更改集类型为**CREATE**时，您仅能指定StackPolicyBody或StackPolicyURL参数之一。
     * 当更改集类型为**UPDATE**时，您仅能指定以下参数之一：
     * - StackPolicyBody
     * - StackPolicyURL
     * - StackPolicyDuringUpdateBody
     * - StackPolicyDuringUpdateURL
     * @example `oss://ros/stack-policy/demo`
     */
    "StackPolicyURL"?: string;
    /**
     * 资源栈策略的结构，长度为1~16,384个字节。
     * 当更改集类型为**CREATE**时，您仅能指定StackPolicyBody或StackPolicyURL其中一个参数。
     * 当更改集类型为**UPDATE**时，您仅能指定以下参数之一：
     * - StackPolicyBody
     * - StackPolicyURL
     * - StackPolicyDuringUpdateBody
     * - StackPolicyDuringUpdateURL
     * @example `{"Statement":[{"Effect":"Allow","Action":"Update:*","Principal":"*","Resource":"*"}]}`
     */
    "StackPolicyBody"?: string;
    /**
     * 创建更改集的资源栈的名称。
     * 长度不超过255个字符。必须以数字或英文字母开头，可包含数字、英文字母、短划线（-）和下划线（_）。
     * > 该参数仅在更改集类型为CREATE或IMPORT时生效。
     * @example `MyStack`
     */
    "StackName"?: string;
    /**
     * 对于未传递的参数，是否使用上次传递的值。取值：
     * - true
     * - false（默认值）
     * > 该参数仅在更改集类型为UPDATE或IMPORT时生效。
     * @example `true`
     */
    "UsePreviousParameters"?: boolean;
    /**
     * 更改集的类型。取值：
     * - CREATE：为新资源栈创建更改集。
     * - UPDATE（默认值）：为现有资源栈创建更改集。
     * - IMPORT：为新资源栈或现有资源栈创建更改集导入非ROS托管资源。
     * 当您选择更改集类型为CREATE时，ROS会为您创建新的资源栈。此时资源栈将处于`REVIEW_IN_PROGRESS`状态，直到您执行更改集。
     * > - 禁止使用UPDATE类型为新资源栈创建更改集，或使用CREATE类型为现有资源栈创建更改集。
     * > - IMPORT类型的更改集不支持设置资源栈策略，请在创建或更新资源栈时设置相关参数。
     * @example `UPDATE`
     */
    "ChangeSetType"?: string;
    /**
     * 更改集的描述。最大长度为1024个字节。
     * @example `It is a demo.`
     */
    "Description"?: string;
    /**
     * 更改集所属的地域ID。
     * 您可以调用[DescribeRegions](~~131035~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 保证请求的幂等性。该参数值由客户端生成，并且必须全局唯一。
     * 长度不超过64个字符。可包含英文字母、数字、短划线（-）和下划线（_）。
     * 更多详情，请参见[如何保证幂等性](~~134212~~)。
     * @example `123e4567-e89b-12d3-a456-42665544****`
     */
    "ClientToken"?: string;
    /**
     * 包含模板主体的文件的位置。URL必须指向位于Web服务器（HTTP或HTTPS）或阿里云OSS存储空间（例如：oss://ros/template/demo、oss://ros/template/demo?RegionId=cn-hangzhou）中的模板，模板最大值为524,288个字节。
     * > 如果OSS地域未指定，默认与接口参数RegionId相同。
     *
     * 您仅能指定TemplateBody、TemplateURL或TemplateId其中一个参数。
     *
     * URL最大长度为1024个字节。
     * @example `oss://ros/template/demo`
     */
    "TemplateURL"?: string;
    /**
     * 更新资源栈策略的文件的位置。URL必须指向位于Web服务器（HTTP或HTTPS）或阿里云OSS存储空间（例如：oss://ros/stack-policy/demo、oss://ros/stack-policy/demo?RegionId=cn-hangzhou）中的策略，策略文件最长为16,384个字节。
     * > OSS地域如未指定，默认与接口参数RegionId相同。
     * URL最大长度为1350个字节。
     * 如果要更新受保护的资源，请在更新期间指定临时覆盖资源栈策略。如果未指定资源栈策略，则将使用与资源栈关联的当前策略。该参数仅在更改集类型为UPDATE时生效。您仅能指定以下参数之一：
     * - StackPolicyBody
     * - StackPolicyURL
     * - StackPolicyDuringUpdateBody
     * - StackPolicyDuringUpdateURL
     * @example `oss://ros/stack-policy/demo`
     */
    "StackPolicyDuringUpdateURL"?: string;
    /**
     * 模板主体的结构。长度为1~524,288个字节。如果长度较大，则建议通过HTTP POST+Body Param的方式，将参数放在请求体中进行传递，避免因URL过长而导致请求失败。
     * >  您必须且仅能指定TemplateBody、TemplateURL或TemplateId其中一个参数。
     * @example `{"ROSTemplateFormatVersion":"2015-09-01"}`
     */
    "TemplateBody"?: string;
    /**
     * 资源栈状态变为CREATE_FAILED或UPDATE_FAILED之前可以经过的时间量。
     * 当更改集类型为CREATE时，该参数为必选参数；当更改集类型为UPDATE时，该参数为可选参数。
     * - 单位：分钟。
     * - 取值范围：10~1440。
     * - 默认值：60。
     * @example `12`
     */
    "TimeoutInMinutes"?: number;
    /**
     * 当创建资源栈失败时，是否禁用回滚策略。
     * 取值：
     * - true：禁用回滚，即在创建资源栈失败时不进行回滚。
     * - false（默认值）：不禁用回滚，即在创建资源栈失败时进行回滚。
     * > 该参数仅在更改集类型为CREATE或IMPORT时生效。
     * @example `false`
     */
    "DisableRollback"?: boolean;
    /**
     * 更改集的名称。
     * 长度不超过255个字符。必须以数字或英文字母开头，可包含数字、英文字母、短划线（-）和下划线（_）。
     * > 更改集名称在与指定资源栈关联的所有更改集中必须是唯一的。
     * @example `MyChangeSet`
     */
    "ChangeSetName": string;
    /**
     * 临时覆盖资源栈策略的结构。长度为1~16,384个字节。
     * 如果要更新受保护资源，请在此更新期间指定临时覆盖资源栈策略，如未指定，则将使用与资源栈关联的当前策略。
     * 该参数仅在更改集类型为UPDATE时生效，您仅能指定以下参数之一：
     * - StackPolicyBody
     * - StackPolicyURL
     * - StackPolicyDuringUpdateBody
     * - StackPolicyDuringUpdateURL
     * @example `{"Statement":[{"Effect":"Allow","Action":"Update:*","Principal":"*","Resource":"*"}]}`
     */
    "StackPolicyDuringUpdateBody"?: string;
    /**
     * RAM角色名称。ROS会扮演该角色创建资源栈，使用角色的凭证代表用户进行接口调用。
     * ROS始终将此角色用于资源栈上将进行的操作。只要用户有权在资源栈上进行操作，即使用户无权使用角色，ROS也会使用此角色，确保角色授予最少的权限。
     * 如果用户未指定该值，ROS将使用以前与资源栈关联的角色。如果没有可用角色，ROS将使用从您的用户凭证中生成的临时凭证。
     * RAM角色名称最大长度为64个字节。
     * RAM角色的更多信息，请参见[资源栈角色](~~2568025~~)。
     * @example `test-role`
     */
    "RamRoleName"?: string;
    /**
     * 如果资源的属性发生了变化，且变化的属性不支持修改更新（资源物理ID不变），是否使用替换更新（删除资源，重新创建，资源物理ID会发生变化）。取值：
     * - Enabled：允许替换更新。
     * - Disabled（默认）：不允许替换更新。
     * > 修改更新的优先级高于替换更新。该参数仅在更改集类型为UPDATE时生效。
     * @example `Disabled`
     */
    "ReplacementOption"?: string;
    /**
     * 模板ID。支持共享模板和私有模板。
     * 您可以通过调用[ListTemplates - 查询模板列表](~~610842~~)接口查看模板ID。
     * > 您仅能指定TemplateBody、TemplateURL或TemplateId其中一个参数。
     * @example `5ecd1e10-b0e9-4389-a565-e4c15efc****`
     */
    "TemplateId"?: string;
    /**
     * 模板版本。
     * > 该参数仅在指定TemplateId时生效。
     * @example `v1`
     */
    "TemplateVersion"?: string;
    /**
     * 模板中已定义的参数。
     */
    "Parameters"?: {
        /**
         * 模板中已定义的参数的名称。如果未指定特定参数的名称和取值，则ROS将使用模板中指定的默认值。N的最大值为200。
         * > Parameters为可选参数。若指定了Parameters，则Parameters.N.ParameterKey为必选参数。
         * @example `Amount`
         */
        ParameterKey: string;
        /**
         * 模板中已定义的参数的取值。N的最大值为200。
         * > Parameters为可选参数。若指定了Parameters，则Parameters.N.ParameterValue为必选参数。
         * @example `12`
         */
        ParameterValue: string;
    }[];
    /**
     * 接收资源栈事件的回调地址列表。
     * @example `http://my-site.com/ros-notify`
     */
    "NotificationURLs"?: string[];
    /**
     * 待导入资源列表。
     */
    "ResourcesToImport"?: {
        /**
         * 字符串到字符串的键值映射。取值是JSON格式的字符串，用来标识要导入的资源。
         * 键是资源的标识符属性（例如：ALIYUN::ECS::VPC资源的VpcId），值是属性的取值（例如：`vpc-2zevx9ios****`）。
         * 资源的标识符属性可以通过[GetTemplateSummary](~~172485~~)接口获取。
         * > 该参数仅在更改集类型为IMPORT时生效。ResourcesToImport为可选参数。若指定了ResourcesToImport，则ResourcesToImport.N.ResourceIdentifier为必选参数。
         * @example `{"VpcId": "vpc-2zevx9ios******"}`
         */
        ResourceIdentifier: string;
        /**
         * 资源逻辑ID，即模板中资源的名称。
         * > 该参数仅在更改集类型为IMPORT时生效。ResourcesToImport为可选参数。若指定了ResourcesToImport，则ResourcesToImport.N.LogicalResourceId为必选参数。
         * @example `Vpc`
         */
        LogicalResourceId: string;
        /**
         * 资源的类型，需要与模板中定义的类型一致。
         * > 该参数仅在更改集类型为IMPORT时生效。ResourcesToImport为可选参数。若指定了ResourcesToImport，则ResourcesToImport.N.ResourceType为必选参数。
         * @example `ALIYUN::ECS::VPC`
         */
        ResourceType: string;
    }[];
    /**
     * 资源场景ID，即资源纳管场景ID。
     * 当ChangeSetType取值为IMPORT时，该参数才有效，该参数仅支持创建新的资源栈导入。
     * 如果您想通过资源纳管场景导入资源时，请只设置该参数，而不是模板相关参数。
     * 您可以通过调用[ListTemplateScratches - 查询资源场景列表](~~610832~~)查看资源纳管场景ID。
     * @example `4a6c9851-3b0f-4f5f-b4ca-a14bf691****`
     */
    "TemplateScratchId"?: string;
    /**
     * 资源最大并发数。默认为空，用户可以输入大于等于零的整数。设置资源最大并发数后，将与资源栈进行关联，影响资源栈的后续操作。
     * 该参数仅在更改集类型为CREATE或UPDATE时生效，取值：
     * - 当更改集类型为CREATE时
     *   - 设置为大于零的整数：使用整数值。
     *   - 设置为零或者不设置：对于ROS类型资源栈不限制，Terraform类型资源栈使用Terraform默认值（通常为10）。
     * - 当更改集类型为UPDATE时
     *   - 设置为大于零的整数：使用整数值。
     *   - 设置为零：对于ROS类型资源栈不限制，Terraform类型资源栈使用Terraform默认值（通常为10）。
     *   - 不设置：使用上次操作时设置的值。如果上次操作时未设置该参数，对于ROS类型资源栈不限制，Terraform类型资源栈使用Terraform默认值（通常为10）。
     * @example `1`
     */
    "Parallelism"?: number;
}
