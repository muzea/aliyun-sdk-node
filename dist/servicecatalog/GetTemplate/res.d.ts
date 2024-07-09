export interface GetTemplateResponse {
    /**
     * 请求ID。
     * @example `0FEEF92D-4052-5202-87D0-3D8EC16F81BF`
     */
    RequestId: string;
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
    TemplateBody: string;
}
