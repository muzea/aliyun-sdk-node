export interface ListProductsResponse {
    /**
     * 云产品信息。
     */
    ProductInfo: {
        /**
         * 云产品名称。
         * @example `云服务器ECS`
         */
        ProductName: string;
        /**
         * 产品类目ID。
         * @example `5`
         */
        SecondCategoryId: number;
        /**
         * 云产品英文名称。
         * @example `Elastic Compute Service`
         */
        ProductNameEn: string;
        /**
         * 是否支持动态调整配额。取值：
         * - true
         * - false
         * @example `true`
         */
        Dynamic: boolean;
        /**
         * 产品类目英文名称。
         * @example `Elastic Compute`
         */
        SecondCategoryNameEn: string;
        /**
         * 产品类目名称。
         * @example `弹性计算`
         */
        SecondCategoryName: string;
        /**
         * 云产品名称缩写。
         * @example `ecs`
         */
        ProductCode: string;
        /**
         * 是否支持API速率配额。取值：
         * - support：支持。
         * - unsupport：不支持。
         * @example `unsupport`
         */
        FlowControlSupport: string;
        /**
         * 是否支持通用配额。取值：
         * - support：支持。
         * - unsupport：不支持。
         * @example `support`
         */
        CommonQuotaSupport: string;
        /**
         * 是否支持权益配额。取值：
         * - support：支持。
         * - unsupport：不支持。
         * @example `support`
         */
        WhiteListLabelQuotaSupport: string;
    }[];
    /**
     * 本次请求返回的全部记录条数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 用来标记返回查询数据的位置。空表示数据已经查询完毕。
     * @example `4`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `1DA9C136-11BC-4C39-ADC6-B86276128072`
     */
    RequestId: string;
    /**
     * 本次查询返回的最大记录条数。
     * @example `4`
     */
    MaxResults: number;
}
