export interface ListPortfoliosResponse {
    /**
     * 产品组合列表。
     */
    PortfolioDetails: {
        /**
         * 产品组合描述。
         * @example `这是一个产品组合描述`
         */
        Description: string;
        /**
         * 产品组合名称。
         * @example `DEMO-IT服务`
         */
        PortfolioName: string;
        /**
         * 产品组合创建时间。
         * 按照ISO8601标准表示，使用UTC时间，格式：YYYY-MM-DDThh:mm:ssZ。
         * @example `2022-04-12T06:11:12Z`
         */
        CreateTime: string;
        /**
         * 产品组合提供者。
         * @example `IT团队`
         */
        ProviderName: string;
        /**
         * 产品组合ID。
         * @example `port-bp1yt7582g****`
         */
        PortfolioId: string;
        /**
         * 产品组合ARN。
         * @example `acs:servicecatalog:cn-hangzhou:146611588617****:portfolio/port-bp1yt7582g****`
         */
        PortfolioArn: string;
    }[];
    /**
     * 请求ID。
     * @example `0FEEF92D-4052-5202-87D0-3D8EC16F81BF`
     */
    RequestId: string;
    /**
     * 总数据行数。
     * @example `2`
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
