export interface CreateProductRequest {
    /**
     * 产品名称。
     * 长度为1~128个字符。
     * @example `DEMO-创建ECS`
     */
    "ProductName": string;
    /**
     * 产品类型。
     * 取值为Ros，表示阿里云资源编排服务（ROS）。
     * @example `Ros`
     */
    "ProductType": string;
    /**
     * 产品描述。
     * 长度为1~128个字符。
     * @example `这是一个产品描述`
     */
    "Description"?: string;
    /**
     * 产品提供者。
     * 长度为1~128个字符。
     * @example `IT团队`
     */
    "ProviderName": string;
    /**
     * 产品版本信息。
     */
    "ProductVersionParameters"?: {
        /**
         * 产品版本名称。
         * 长度为1~128个字符。
         * @example `1.0`
         */
        ProductVersionName: string;
        /**
         * 模板类型。
         * 取值为RosTerraformTemplate，表示阿里云资源编排服务（ROS）支持的Terraform模板。
         * @example `RosTerraformTemplate`
         */
        TemplateType: string;
        /**
         * 模板的URL地址。
         * 获取模板URL地址的方法，请参见[CreateTemplate](~~CreateTemplate~~)。
         * @example `oss://servicecatalog-cn-hangzhou/146611588617****​/terraform/template/tpl-bp1217we23****​/template.json`
         */
        TemplateUrl: string;
        /**
         * 产品版本描述。
         * 长度为1~128个字符。
         * @example `这是一个产品版本描述`
         */
        Description: string;
        /**
         * 推荐信息。取值：
         * - Default（默认值）：无。
         * - Recommended：稳定版。
         * - Latest：最新版。
         * - Deprecated：将废弃。
         * @example `Default`
         */
        Guidance: string;
        /**
         * 是否启用。取值：
         * - true（默认值）：启用。
         * - false：禁用。
         * @example `true`
         */
        Active: boolean;
    };
    /**
     * 产品模板类型。取值：
     * - RosTerraformTemplate：表示阿里云资源编排服务（ROS）支持的Terraform模板。
     * - RosStandardTemplate：表示阿里云资源编排服务（ROS）标准模板。
     * @example `RosTerraformTemplate`
     */
    "TemplateType"?: string;
}
