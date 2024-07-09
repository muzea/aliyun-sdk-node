export interface DescribeDistributionProductsLinkResponse {
    /**
     * Id of the request
     * @example `5BD09171-BF4D-18D8-890E-C70C067527BE`
     */
    RequestId: string;
    /**
     * 推广商品总数
     * @example `51`
     */
    TotalCount: number;
    /**
     * 成功状态标识
     * @example `true`
     */
    Success: boolean;
    /**
     * 推广商品链接信息
     */
    Result: {
        /**
         * 商品推广链接,注：示例链接为测试商品链接
         * @example `https://market.aliyun.com/ad/adClick?param=QN%2BgAHA8mY%2BV1vSDtkNqyWG9G5uUX2Q8%2BJrC8wTzBo5YK7tTmm4Zdiz6nmmyLHMC5REAsq2viyeJYjBjVHno1HydPvHrVarNXQTMEzEmR8TRZaG2FsnzpszXKK2cMA69CUmF9qQpHqU%3D`
         */
        Url: string;
        /**
         * 推广商品code
         * @example `cmapi000****`
         */
        Code: string;
        /**
         * 推广商品名称
         * @example `测试商品`
         */
        Name: string;
    }[];
}
