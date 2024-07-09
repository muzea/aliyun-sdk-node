export interface QueryProductListResponse {
    /**
     * 返回状态码。
     * @example `Success`
     */
    Code: string;
    /**
     * 返回信息。
     * @example `This API is not applicable for caller.`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `94858229-2758-4663-A7D0-99490D541F15`
     */
    RequestId: string;
    /**
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 阿里云产品信息。
     */
    Data: {
        /**
         * 当前页码。
         * @example `1`
         */
        PageNum: number;
        /**
         * 每页显示记录数。
         * @example `10`
         */
        PageSize: number;
        /**
         * 产品记录总数。
         * @example `449`
         */
        TotalCount: number;
        ProductList: {
            /**
             * 产品定义列表。
             */
            Product: {
                /**
                 * 产品名称。
                 * @example `内容分发网络CDN（按量付费）`
                 */
                ProductName: string;
                /**
                 * 产品类型。
                 * @example `CDN`
                 */
                ProductType: string;
                /**
                 * 订阅类型。取值：
                 * - Subscription：预付费。
                 * - PayAsYouGo：后付费。
                 * @example `PayAsYouGo`
                 */
                SubscriptionType: string;
                /**
                 * 产品代码。
                 * @example `cdn`
                 */
                ProductCode: string;
            }[];
        };
    };
}
