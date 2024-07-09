export interface CreateTemplateRequest {
    /**
     * 包含模板主体的文件的位置。URL必须指向位于Web服务器（HTTP或HTTPS）或阿里云OSS存储空间（例如：oss://ros/stack-policy/demo、oss://ros/stack-policy/demo?RegionId=cn-hangzhou）中的模板。
     * 模板长度范围为1~1024字节。
     * 如未指定OSS地域，默认与接口参数RegionId相同。
     *
     * > 您必须且仅能指定TemplateBody和TemplateURL其中一个参数。
     * @example `oss://ros/template/demo`
     */
    "TemplateURL"?: string;
    /**
     * 模板的描述。最大长度为256个字符。
     * @example `It is a demo.`
     */
    "Description"?: string;
    /**
     * 模板主体的结构。长度为1~524,288个字节。  如果长度较大，建议通过HTTP POST+Body Param的方式，将参数放在请求体中进行传递，避免URL过长而导致请求失败。
     * > 您仅能指定TemplateBody、TemplateURL或TemplateId其中一个参数。
     * @example `{"ROSTemplateFormatVersion":"2015-09-01"}`
     */
    "TemplateBody"?: string;
    /**
     * 模板的名称。
     * 长度不超过255个字符，必须以数字或英文字母开头，可包含数字、英文字母、短划线（-）和下划线（_）。
     * @example `MyTemplate`
     */
    "TemplateName": string;
    /**
     * 资源组ID。
     * 关于资源组的更多信息，请参见[什么是资源组](~~94475~~)。
     * @example `rg-acfmxazb4ph6aiy****`
     */
    "ResourceGroupId"?: string;
    /**
     * 模板的标签。
     */
    "Tags"?: {
        /**
         * 模板的标签键。
         * > Tags为可选参数。如果需要指定Tags，则Tags.N.Key必须指定。
         * @example `usage`
         */
        Key: string;
        /**
         * 模板的标签值。
         * @example `test`
         */
        Value: string;
    }[];
}
