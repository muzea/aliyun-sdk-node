export interface GetTemplateParameterConstraintsRequest {
    /**
     * 模板主体的结构。长度为1~524,288个字节。如果长度较长，则建议通过HTTP POST+Body Param的方式，将参数放在请求体中进行传递，避免因URL过长而导致请求失败。
     * > 您必须且仅能指定TemplateBody、TemplateURL、TemplateId和TemplateScratchId其中一个参数。
     * @example `{
      "ROSTemplateFormatVersion": "2015-09-01",
      "Parameters": {
        "ZoneInfo": {
          "Type": "String"
        },
        "InstanceType": {
          "Type": "String"
        }
      },
      "Resources": {
        "ECS": {
          "Type": "ALIYUN::ECS::Instance",
          "Properties": {
            "ZoneId": {
              "Ref": "ZoneInfo"
            },
            "InstanceType": {
              "Ref": "InstanceType"
            }
          }
        }
      }
    }`
     */
    "TemplateBody"?: string;
    /**
     * 地域ID。
     * 您可以调用[DescribeRegions](~~131035~~)接口查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 包含模板主体的文件的位置。URL必须指向位于Web服务器（HTTP或HTTPS）或阿里云OSS存储空间（例如：oss://ros/template/demo或oss://ros/template/demo?RegionId=cn-hangzhou）中的模板，模板的最大长度为524,288个字节。如未指定OSS地域，默认与接口参数RegionId相同。
     * > 您必须且仅能指定TemplateBody、TemplateURL和TemplateId其中一个参数。
     * @example `oss://ros-template/demo`
     */
    "TemplateURL"?: string;
    /**
     * 模板ID。支持共享模板和私有模板。
     * > 您必须且仅能指定TemplateBody、TemplateURL和TemplateId其中一个参数。
     * @example `5ecd1e10-b0e9-4389-a565-e4c15efc****`
     */
    "TemplateId"?: string;
    /**
     * 模板版本。如果不指定，默认取最新版本。
     * > TemplateVersion仅在指定TemplateId时生效。
     * @example `v1`
     */
    "TemplateVersion"?: string;
    /**
     * 模板中已定义的参数。
     */
    "Parameters"?: {
        /**
         * 模板中已定义的参数的名称。
         * > Parameters为可选参数。若指定了Parameters，则ParameterKey为必选参数。
         * @example `ZoneInfo`
         */
        ParameterKey: string;
        /**
         * 模板中已定义的参数的取值。
         * > Parameters为可选参数。若指定了Parameters，则ParameterValue为必选参数。
         * @example `cn-hangzhou-h`
         */
        ParameterValue: string;
    }[];
    /**
     * 需要查询的参数列表。
     */
    "ParametersKeyFilter"?: string[];
    /**
     * 保证请求的幂等性。
     * 该值由客户端生成，并且必须是全局唯一的。长度不超过64个字符，可包含英文字母、数字、短划线（-）和下划线（_）。
     * 更多信息，请参见[如何保证幂等性](~~134212~~)。
     * @example `123e4567-e89b-12d3-a456-42665544****`
     */
    "ClientToken"?: string;
    /**
     * 参数依赖关系。
     */
    "ParametersOrder"?: string[];
    /**
     * 资源栈ID。
     * 当填写此参数时，表示查询变配场景的参数约束。
     * @example `c754d2a4-28f1-46df-b557-9586173a****`
     */
    "StackId"?: string;
}
