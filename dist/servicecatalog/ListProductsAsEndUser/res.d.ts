export interface ListProductsAsEndUserResponse {
    /**
     * 请求ID。
     * @example `0FEEF92D-4052-5202-87D0-3D8EC16F81BF`
     */
    RequestId: string;
    /**
     * 产品列表。
     */
    ProductSummaries: {
        /**
         * 产品描述。
         * @example `这是一个产品描述`
         */
        Description: string;
        /**
         * 产品创建时间。
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
         * 产品ARN。
         * @example `acs:servicecatalog:cn-hangzhou:146611588617****:product/prod-bp18r7q127****`
         */
        ProductArn: string;
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
         * 是否存在默认启动选项。取值：
         * - true：存在默认启动选项，启动产品或更新实例时无需填写PortfolioId。
         * - false：没有默认启动选项，启动产品或更新实例时必须填写PortfolioId。获取PortfolioId的方法，请参见[ListLaunchOptions](~~ListLaunchOptions~~)。
         * > 如果产品仅被加入到一个产品组合，则会存在默认启动选项。如果产品被加入到多个产品组合，则会同时存在多个启动选项，但此时没有默认启动选项。
         * @example `true`
         */
        HasDefaultLaunchOption: boolean;
        /**
         * 产品模板类型。取值：
         * - RosTerraformTemplate：表示阿里云资源编排服务（ROS）支持的Terraform模板。
         * - RosStandardTemplate：表示阿里云资源编排服务（ROS）标准模板。
         * @example `RosTerraformTemplate`
         */
        TemplateType: string;
    }[];
    /**
     * 总数据行数。
     * @example `100`
     */
    TotalCount: number;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 分页时每页显示的数据行数。
     * @example `10`
     */
    PageSize: number;
}
