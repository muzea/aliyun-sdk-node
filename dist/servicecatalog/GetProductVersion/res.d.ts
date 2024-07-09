export interface GetProductVersionResponse {
    /**
     * 产品版本详情。
     */
    ProductVersionDetail: {
        /**
         * 是否启用。取值：
         * - true（默认值）：启用。
         * - false：禁用。
         * @example `true`
         */
        Active: boolean;
        /**
         * 产品版本描述。
         * @example `这是一个产品版本描述`
         */
        Description: string;
        /**
         * 产品版本创建时间。
         * 按照ISO8601标准表示，使用UTC时间，格式：YYYY-MM-DDThh:mm:ssZ。
         * @example `2022-04-12T06:10:37Z`
         */
        CreateTime: string;
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
         * 产品版本ID。
         * @example `pv-bp15e79d26****`
         */
        ProductVersionId: string;
        /**
         * 产品版本名称。
         * @example `1.0`
         */
        ProductVersionName: string;
        /**
         * 产品版本所属的产品ID。
         * @example `prod-bp18r7q127****`
         */
        ProductId: string;
        /**
         * 模板的URL地址。
         * @example `oss://servicecatalog-cn-hangzhou/146611588617****​/terraform/template/tpl-bp1217we23****​/template.json`
         */
        TemplateUrl: string;
        /**
         * 产品模板类型。取值：
         * - RosTerraformTemplate：表示阿里云资源编排服务（ROS）支持的Terraform模板。
         * - RosStandardTemplate：表示阿里云资源编排服务（ROS）标准模板。
         * @example `RosTerraformTemplate`
         */
        TemplateType: string;
    };
    /**
     * 请求ID。
     * @example `0FEEF92D-4052-5202-87D0-3D8EC16F81BF`
     */
    RequestId: string;
}
