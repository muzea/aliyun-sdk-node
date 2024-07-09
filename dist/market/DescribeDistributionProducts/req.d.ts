export interface DescribeDistributionProductsRequest {
    /**
     * 当前页数。
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 每页的推广商品数量。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 过滤条件列表。
     */
    "Filter"?: {
        /**
         * 搜索标签类别，取值：
         * - code：推广商品Code
         * - name：推广商品名称
         * - supplierName：推广服务商名称
         * @example `supplierName`
         */
        Key: string;
        /**
         * 搜索标签取值：
         * - code: 测试商品code
         * - name:测试商品名称
         * - supplierName:测试供应商家名称
         * @example `cmj0000000`
         */
        Value: string;
    }[];
}
