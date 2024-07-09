export interface CreateTemplateRequest {
    /**
     * 模板内容。
     * 关于模板语法的详情，请参见[Terraform类型模板结构](~~184397~~)。
     * @example `{
      "ROSTemplateFormatVersion": "2015-09-01",
      "Transform": "Aliyun::Terraform-v1.1",
      "Workspace": {
        "main.tf": "variable  \"name\" {  default = \"auto_provisioning_group\"}"
      },
      "Outputs": {}
    }`
     */
    "TemplateBody": string;
    /**
     * 产品模板类型。取值：
     * - RosTerraformTemplate：表示阿里云资源编排服务（ROS）支持的Terraform模板。
     * - RosStandardTemplate：表示阿里云资源编排服务（ROS）标准模板。
     * @example `RosTerraformTemplate`
     */
    "TemplateType": string;
    /**
     * Terraform模板变量设置，以结构化的方式表示，服务目录会将变量设置应用到模板中。
     * > 变量必须在Terraform模板中存在。
     */
    "TerraformVariables"?: {
        /**
         * 变量名称。
         * @example `instance_type`
         */
        VariableName: string;
        /**
         * 变量描述。
         * 关于变量描述的格式，请参见[Terraform代码开发方式和建议](~~322216~~)。
         * @example `{
          "Label": { "zh-cn": "实例规格", "en": "Instance Type" },
          "AllowedValues": [
            "ecs.s6-c1m1.small",
            "ecs.s6-c1m2.large",
            "ecs.s6-c1m2.xlarge"
          ]
        }
        `
         */
        Description: string;
    }[];
}
