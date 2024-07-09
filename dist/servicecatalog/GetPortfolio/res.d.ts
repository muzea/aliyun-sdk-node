export interface GetPortfolioResponse {
    /**
     * 请求ID。
     * @example `0FEEF92D-4052-5202-87D0-3D8EC16F81BF`
     */
    RequestId: string;
    /**
     * 产品组合详情。
     */
    PortfolioDetail: {
        /**
         * 产品组合ARN。
         * @example `acs:servicecatalog:cn-hangzhou:146611588617****:portfolio/port-bp1yt7582g****`
         */
        PortfolioArn: string;
        /**
         * 产品组合ID。
         * @example `port-bp1yt7582g****`
         */
        PortfolioId: string;
        /**
         * 产品组合描述。
         * @example `这是一个产品组合描述`
         */
        Description: string;
        /**
         * 产品组合创建时间。
         * 按照ISO8601标准表示，使用UTC时间，格式：YYYY-MM-DDThh:mm:ssZ。
         * @example `2022-04-12T06:11:12Z`
         */
        CreateTime: string;
        /**
         * 产品组合名称。
         * @example `DEMO-IT服务`
         */
        PortfolioName: string;
        /**
         * 产品组合提供者。
         * @example `IT团队`
         */
        ProviderName: string;
    };
    /**
     * 产品组合关联的标签选项列表。
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
