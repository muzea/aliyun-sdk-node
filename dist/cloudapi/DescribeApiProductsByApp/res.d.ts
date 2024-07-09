export interface DescribeApiProductsByAppResponse {
    /**
     * 请求ID
     * @example `0B805201-AF4C-5788-AC9E-C3EEC83DC82A`
     */
    RequestId: string;
    /**
     * 分页参数：每页显示条数，默认值10
     * @example `10`
     */
    PageSize: number;
    /**
     * 分页参数：当前页码，默认值1
     * @example `1`
     */
    PageNumber: number;
    /**
     * 返回结果的总条数
     * @example `4`
     */
    TotalCount: number;
    ApiProductInfoList: {
        /**
         * API产品信息列表
         */
        ApiProductInfo: {
            /**
             * API产品ID
             * @example `117b7a64a8b3f064eaa4a47ac62aac5e`
             */
            ApiProductId: string;
        }[];
    };
}
