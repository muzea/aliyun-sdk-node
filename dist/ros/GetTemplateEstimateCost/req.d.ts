export interface GetTemplateEstimateCostRequest {
    /**
     * 包含模板主体的文件的位置。URL必须指向位于Web服务器（HTTP或HTTPS）或阿里云OSS存储空间（例如：oss://ros/stack-policy/demo、oss://ros/stack-policy/demo?RegionId=cn-hangzhou）中的模板，模板的最大长度为524,288个字节。如未指定OSS地域，默认与RegionId取值相同。
     * > 您必须且仅能指定TemplateBody、TemplateURL、TemplateId和TemplateScratchId其中一个参数。
     * @example `oss://ros-template/demo`
     */
    "TemplateURL"?: string;
    /**
     * 资源栈所属的地域ID。您可以调用[DescribeRegions](~~131035~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 模板主体的结构。长度为1~524,288个字节。如果长度较长，则建议通过HTTP POST+Body Param的方式，将参数放在请求体中进行传递，避免因URL过长而导致请求失败。
     * > 您必须且仅能指定TemplateBody、TemplateURL、TemplateId和TemplateScratchId其中一个参数。
     * @example `ROSTemplateFormatVersion: '2015-09-01'\nResources:\n  vpc:\n    Type: ALIYUN::ECS::VPC`
     */
    "TemplateBody"?: string;
    /**
     * 保证请求的幂等性。 该值由客户端生成，并且必须全局唯一。
     * 长度不超过64个字符。可包含英文字母、数字、短划线（-）和下划线（_）。
     * 更多信息，请参见[如何保证幂等性](~~134212~~)。
     * @example `123e4567-e89b-12d3-a456-42665544****`
     */
    "ClientToken"?: string;
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
         * 参数的名称。如果未指定模板中定义的参数名称和参数值，ROS将使用模板中指定的默认值。
         * N的最大值为：200。
         * 取值示例：
         * - Parameters.1.ParameterKey：`Name`。
         * - Parameters.2.ParameterKey：`Netmode`。
         * > Parameters为可选参数。如果需要指定Parameters，则Parameters.N.ParameterKey和Parameters.N.ParameterValue必须同时指定。
         * @example `Name`
         */
        ParameterKey: string;
        /**
         * 参数值。
         * N的最大值为：200。
         * 取值示例：
         * - Parameters.1.ParameterValue：`DemoEip`。
         * - Parameters.2.ParameterValue：`public`。
         * > Parameters为可选参数。如果需要指定Parameters，则Parameters.N.ParameterKey和Parameters.N.ParameterValue必须同时指定。
         * @example `DemoEip`
         */
        ParameterValue: string;
    }[];
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
     * 资源栈ID。
     * 当填写此参数时，表示查询变配场景的预估价格。
     * 假设指定资源栈中仅有一个ECS实例，且规格是ecs.s6-c1m2.large。询价使用的新模板将规格改为ecs.s6-c1m1.small（降配），并新增一个RDS实例。则询价结果为ECS实例变配价格（本例由于是降配，则是退款）和新购RDS实例的价格总和。
     * @example `c754d2a4-28f1-46df-b557-9586173a****`
     */
    "StackId"?: string;
}
