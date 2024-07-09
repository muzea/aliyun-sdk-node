export interface ListProductsResponse {
    /**
     * 本次请求条件下的数据总量。
     * @example `20`
     */
    totalCount: number;
    /**
     * 表示当前调用返回读取到的位置，空代表数据已经读取完毕。
     * @example `Redis`
     */
    nextToken: string;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3****`
     */
    requestId: string;
    /**
     * 本次请求所返回的最大记录条数。
     * @example `10`
     */
    maxResults: number;
    /**
     * 产品列表。
     */
    products: {
        /**
         * 产品code。
         * @example `ECS`
         */
        productCode: string;
        /**
         * 产品名称。
         * @example `Elastic Compute Service`
         */
        productName: string;
    }[];
}
