export interface PreviewStackRequest {
    /**
     * 当创建资源栈失败时，是否禁用回滚。取值：
     * - true：禁用回滚，即当创建资源栈失败时不进行回滚。
     * - false（默认值）：不禁用回滚，即当创建资源栈失败时进行回滚。
     * @example `false`
     */
    "DisableRollback"?: boolean;
    /**
     * 创建资源栈的超时时间。
     * 单位：分钟。
     * 默认值：60。
     * @example `60`
     */
    "TimeoutInMinutes"?: number;
    /**
     * 模板主体的结构。长度为1~524,288个字节。如果长度较长，则建议通过HTTP POST+Body Param的方式，将参数放在请求体中进行传递，避免因URL过长而导致请求失败。
     * > 您必须且仅能指定TemplateBody、TemplateURL、TemplateId和TemplateScratchId其中一个参数。
     * @example `{"ROSTemplateFormatVersion":"2015-09-01"}`
     */
    "TemplateBody"?: string;
    /**
     * 包含资源栈策略的文件的位置。URL必须指向位于Web服务器（HTTP或HTTPS）或阿里云OSS存储空间（例如：oss://ros/stack-policy/demo、oss://ros/stack-policy/demo?RegionId=cn-hangzhou）中的策略，策略文件最大长度为16,384个字节。如未指定OSS地域，默认与RegionId取值相同。
     * > 您仅能指定StackPolicyBody和StackPolicyURL其中一个参数。
     *
     * URL最大长度为1350个字节。
     * @example `oss://ros-stack-policy/demo`
     */
    "StackPolicyURL"?: string;
    /**
     * 资源栈所属的地域ID。您可以调用[DescribeRegions](~~131035~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 包含资源栈策略主体的结构，长度为1~16,384个字节。
     * > 您仅能指定StackPolicyBody和StackPolicyURL其中一个参数。
     * @example `{"Statement": [{"Action": "Update:*", "Resource": "*", "Effect": "Allow", "Principal": "*"}]}`
     */
    "StackPolicyBody"?: string;
    /**
     * 资源栈名称。预览创建资源栈。
     * 长度不超过255个字符，必须以数字或英文字母开头，可包含数字、英文字母、短划线（-）和下划线（_）。
     * > 您必须且仅能指定StackName或StackId其中一个参数。
     * @example `MyStack`
     */
    "StackName"?: string;
    /**
     * 保证请求的幂等性。该值由客户端生成，并且必须是全局唯一的。
     * 长度不超过64个字符，可包含英文字母、数字、短划线（-）和下划线（_）。
     * 更多详情，请参见[如何保证幂等性](~~134212~~)。
     * @example `123e4567-e89b-12d3-a456-42665544****`
     */
    "ClientToken"?: string;
    /**
     * 包含模板主体的文件的位置。URL必须指向位于Web服务器（HTTP或HTTPS）或阿里云OSS存储空间（例如：oss://ros/stack-policy/demo、oss://ros/stack-policy/demo?RegionId=cn-hangzhou）中的模板，模板的最大长度为524,288个字节。如未指定OSS地域，默认与RegionId取值相同。
     * > 您必须且仅能指定TemplateBody、TemplateURL、TemplateId和TemplateScratchId其中一个参数。
     * @example `oss://ros-template/demo`
     */
    "TemplateURL"?: string;
    /**
     * 模板ID。支持共享模板和私有模板。
     * > 您必须且仅能指定TemplateBody、TemplateURL、TemplateId和TemplateScratchId其中一个参数。
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
         * 参数名称。如果未指定参数名称和参数值，ROS将使用模板中指定的默认值。N的最大值为200。
         * > 若指定了Parameters，则Parameters.N.ParameterKey为必选参数。
         * @example `ALIYUN::AccountId`
         */
        ParameterKey: string;
        /**
         * 参数值。N的最大值为200。
         * > 若指定了Parameters，则Parameters.N.ParameterValue为必选参数。
         * @example `151266687691****`
         */
        ParameterValue: string;
    }[];
    /**
     * 资源最大并发数。仅对Terraform类型资源栈生效。
     * 默认为空，用户可以输入大于等于零的整数。
     * >若设置为大于零的整数，则使用该整数；若设置为零或者不设置，则使用Terraform默认值（通常为10）。
     * @example `1`
     */
    "Parallelism"?: number;
    /**
     * 资源场景ID。
     * 关于如何获取资源场景ID，请参见[ListTemplateScratches](~~363050~~)。
     * > 您必须且仅能指定TemplateBody、TemplateURL、TemplateId和TemplateScratchId其中一个参数。
     * @example `ts-aa9c62feab844a6b****`
     */
    "TemplateScratchId"?: string;
    /**
     * 资源场景所属的地域ID，默认与RegionId取值相同。
     * 您可以调用[DescribeRegions](~~131035~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "TemplateScratchRegionId"?: string;
    /**
     * 资源栈ID。预览更新资源栈。
     * > - 您必须且仅能指定StackName或StackId其中一个参数。
     * > -  预览创建或更新资源栈的场景中不支持预览嵌套资源栈中的资源。
     * @example `4a6c9851-3b0f-4f5f-b4ca-a14bf691****`
     */
    "StackId"?: string;
    /**
     * 是否获取合规预检参数。
     * 取值：
     * - true：获取合规预检参数。
     * - false（默认值）：不获取合规预检参数。
     * @example `false`
     */
    "EnablePreConfig"?: boolean;
}
