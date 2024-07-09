export interface GetConstraintResponse {
    /**
     * 请求ID。
     * @example `0FEEF92D-4052-5202-87D0-3D8EC16F81BF`
     */
    RequestId: string;
    /**
     * 约束详情。
     */
    ConstraintDetail: {
        /**
         * 约束配置。
         * 格式：{ "LocalRoleName": "<role_name\>" }
         * @example `{ "LocalRoleName": "TestRole" }`
         */
        Config: string;
        /**
         * 约束描述。
         * @example `Launch as local role TestRole`
         */
        Description: string;
        /**
         * 约束创建时间。
         * 按照ISO8601标准表示，使用UTC时间，格式：YYYY-MM-DDThh:mm:ssZ。
         * @example `2022-04-12T06:11:26Z`
         */
        CreateTime: string;
        /**
         * 约束ID。
         * @example `cons-bp1yx7x42v****`
         */
        ConstraintId: string;
        /**
         * 约束所属的产品组合ID。
         * @example `port-bp1yt7582g****`
         */
        PortfolioId: string;
        /**
         * 约束对应的产品ID。
         * @example `prod-bp18r7q127****`
         */
        ProductId: string;
        /**
         * 约束类型。
         * 取值为Launch，表示启动约束。
         * @example `Launch`
         */
        ConstraintType: string;
        /**
         * 产品名称。
         * @example `DEMO-创建ECS`
         */
        ProductName: string;
    };
}
