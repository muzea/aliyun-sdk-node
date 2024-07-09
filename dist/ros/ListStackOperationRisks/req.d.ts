export interface ListStackOperationRisksRequest {
    /**
     * 资源栈所属的地域ID。
     * 您可以调用[DescribeRegions](~~131035~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源栈ID。
     * @example `4a6c9851-3b0f-4f5f-b4ca-a14bf691****	`
     */
    "StackId"?: string;
    /**
     * 需要检测的操作类型。
     * 取值：
     * - DeleteStack：检测删除资源栈操作涉及的高风险资源。
     * - CreateStack：创建资源栈操作可能出现的创建失败的风险，仅支持检测调用者可能缺失的权限。
     * @example `DeleteStack`
     */
    "OperationType"?: string;
    /**
     * 保证请求的幂等性。该值由客户端生成，并且必须是全局唯一的。
     * 长度不超过64个字符，可包含英文字母、数字、短划线（-）和下划线（_）。
     * 更多详情，请参见[如何保证幂等性](~~134212~~)。
     * @example `123e4567-e89b-12d3-a456-42665544****	`
     */
    "ClientToken"?: string;
    /**
     * RAM角色名称。
     * - 如果指定RAM角色，ROS将根据RAM角色的权限创建资源栈，使用角色的凭证代表用户进行接口调用。
     * - 如果不指定RAM角色，ROS将使用当前账号相关权限创建资源栈。
     * RAM角色名称最大长度为64个字节。
     * @example `test-role`
     */
    "RamRoleName"?: string;
    /**
     * 是否保留该资源栈下的所有资源。
     * 取值：
     * - true：保留。
     * - false（默认值）：不保留。
     *
     * > 当OperationType取值为DeleteStack时该参数有效。
     * @example `false`
     */
    "RetainAllResources"?: boolean;
    /**
     * 需要保留资源的列表。
     * > 当OperationType取值为DeleteStack时，该参数有效。
     * @example `WebServer`
     */
    "RetainResources"?: string[];
    /**
     * 模板主体的结构。长度为1~524,288个字节。如果长度较长，则建议通过HTTP POST+Body Param的方式，将参数放在请求体中进行传递，避免因URL过长而导致请求失败。
     * > 您必须且仅能指定TemplateBody、TemplateURL、TemplateId或TemplateScratchId其中一个参数。
     * @example `{"ROSTemplateFormatVersion":"2015-09-01"}`
     */
    "TemplateBody"?: string;
    /**
     * 包含模板主体的文件的位置。URL必须指向位于Web服务器（HTTP或HTTPS）或阿里云OSS存储空间（例如：oss://ros/stack-policy/demo、oss://ros/stack-policy/demo?RegionId=cn-hangzhou）中的模板，模板的最大长度为524,288个字节。如未指定OSS地域，默认与RegionId取值相同。
     * > 您必须且仅能指定TemplateBody、TemplateURL、TemplateId或TemplateScratchId其中一个参数。
     * @example `oss://ros-template/demo`
     */
    "TemplateURL"?: string;
    /**
     * 模板ID。支持共享模板和私有模板。
     * > 您必须且仅能指定TemplateBody、TemplateURL、TemplateId或TemplateScratchId其中一个参数。
     * @example `5ecd1e10-b0e9-4389-a565-e4c15efc****`
     */
    "TemplateId"?: string;
    /**
     * 模板版本。
     * > 当您指定TemplateId时，本参数才生效。
     * @example `v1`
     */
    "TemplateVersion"?: string;
}
