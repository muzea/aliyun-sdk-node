export interface ValidateTemplateRequest {
    /**
     * 包含模板主体的文件的位置。URL必须指向位于HTTP Web服务器或阿里云OSS存储空间（例如：oss://ros/template/demo、oss://ros/template/demo?RegionId=cn-hangzhou）中的模板，模板最大为524,288个字节。
     * > 如果OSS地域未指定，默认与接口参数RegionId相同。
     *
     * 您可以指定TemplateBody或TemplateURL参数，但不能同时指定。
     * URL的最大长度为：1024个字节。
     * @example `oss://ros/template/demo`
     */
    "TemplateURL"?: string;
    /**
     * 资源栈模板所属的地域ID。您可以调用[DescribeRegions](~~131035~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 模板主体的结构。长度为1~524,288个字节。
     * 如果长度较大，建议通过HTTP POST+Body Param的方式，将参数放在请求体中进行传递，避免URL过长而导致请求失败。
     * 您可以指定TemplateBody或TemplateURL参数，但不能同时指定。
     * @example `{"ROSTemplateFormatVersion":"2015-09-01"}`
     */
    "TemplateBody"?: string;
    /**
     * 保证请求的幂等性。该值由客户端生成，并且必须是全局唯一的。
     * 长度不超过64个字符，可包含英文字母、数字、短划线（-）和下划线（_）。
     * 更多信息，请参见[如何保证幂等性](~~134212~~)。
     * @example `123e4567-e89b-12d3-a456-42665544****`
     */
    "ClientToken"?: string;
    /**
     * 是否对模板开启额外校验。取值：
     * - None（默认值）：不开启额外校验。
     * - EnableTerraformValidation：对于Terraform类型模板，使用Terraform CLI的`terraform validate`命令开启额外校验。
     * - EnableFastTerraformValidation：对于Terraform类型模板，使用一种类似于Terraform CLI的`terraform validate`命令开启额外校验。
     *
     * > EnableFastTerraformValidation与EnableTerraformValidation相比速度较快，但校验完整性稍有不足。
     * @example `None`
     */
    "ValidationOption"?: string;
    /**
     * 更新信息选项列表。列表最大长度为2。
     */
    "UpdateInfoOptions"?: string[];
}
