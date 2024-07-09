export interface GetProductAsAdminResponse {
    /**
     * 请求ID。
     * @example `0FEEF92D-4052-5202-87D0-3D8EC16F81BF`
     */
    RequestId: string;
    /**
     * 产品详情。
     */
    ProductDetail: {
        /**
         * 产品ARN。
         * @example `acs:servicecatalog:cn-hangzhou:146611588617****:product/prod-bp18r7q127****`
         */
        ProductArn: string;
        /**
         * 产品描述。
         * @example `这是一个产品描述`
         */
        Description: string;
        /**
         * 创建时间。
         * 按照ISO8601标准表示，使用UTC时间，格式：YYYY-MM-DDThh:mm:ssZ。
         * @example `2022-04-12T06:10:37Z`
         */
        CreateTime: string;
        /**
         * 产品ID。
         * @example `prod-bp18r7q127****`
         */
        ProductId: string;
        /**
         * 产品名称。
         * @example `DEMO-创建ECS`
         */
        ProductName: string;
        /**
         * 产品提供者。
         * @example `IT团队`
         */
        ProviderName: string;
        /**
         * 产品类型。
         * 取值为Ros，表示阿里云资源编排服务（ROS）。
         * @example `Ros`
         */
        ProductType: string;
        /**
         * 产品模板类型。取值：
         * - RosTerraformTemplate：表示阿里云资源编排服务（ROS）支持的Terraform模板。
         * - RosStandardTemplate：表示阿里云资源编排服务（ROS）标准模板。
         * @example `RosTerraformTemplate`
         */
        TemplateType: string;
    };
    /**
     * 产品关联的标签选项列表。
     */
    TagOptions: {
        /**
         * 是否启用。取值：
         * - true（默认值）：启用。
         * - false：禁用。
         * @example `true`
         */
        Active: boolean;
        /**
         * 标签选项ID。
         * @example `tag-bp1q65xd3j****`
         */
        TagOptionId: string;
        /**
         * 标签选项键。
         * @example `k1`
         */
        Key: string;
        /**
         * 标签选项值。
         * @example `v1`
         */
        Value: string;
        /**
         * 标签选项归属人ID。
         * @example `133413081827****
        `
         */
        Owner: string;
    }[];
}
