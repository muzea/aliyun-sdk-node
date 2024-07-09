export interface GenerateTemplatePolicyRequest {
    /**
     * 包含模板主体的文件的位置。URL必须指向位于Web服务器（HTTP或HTTPS）或阿里云OSS存储空间（例如：oss://ros/template/demo、oss://ros/template/demo?RegionId=cn-hangzhou）中的模板，模板最大为524,288个字节。
     * > 如果OSS地域未指定，默认与接口参数RegionId相同。
     * 您仅能指定TemplateBody、TemplateURL、TemplateId其中一个参数。
     * URL的最大长度为：1024个字节。
     * @example `oss://ros/template/demo`
     */
    "TemplateURL"?: string;
    /**
     * 模板的结构。长度为1~524,288个字节。
     * 如果长度较大，建议通过HTTP POST+Body Param的方式，将参数放在请求体中进行传递，避免URL过长而导致请求失败。
     * 您仅能指定TemplateBody、TemplateURL、TemplateId其中一个参数。
     * @example `{"ROSTemplateFormatVersion":"2015-09-01"}`
     */
    "TemplateBody"?: string;
    /**
     * 模板ID。支持共享模板和私有模板。
     * 您仅能指定TemplateBody、TemplateURL、TemplateId其中一个参数。
     * @example `5ecd1e10-b0e9-4389-a565-e4c15efc****`
     */
    "TemplateId"?: string;
    /**
     * 模板版本。仅在指定TemplateId时生效。
     * @example `v1`
     */
    "TemplateVersion"?: string;
    /**
     * 需要生成策略信息的操作类型。
     */
    "OperationTypes"?: string[];
}
