export interface ListSupportedProductsRequest {
    /**
     * 当请求的返回结果被截断时，您可以使用NextToken再次发起请求，获取从当前截断位置之后的内容。
     * @example `D3AjqMNSy0ls7zBNCf3a****`
     */
    "NextToken"?: string;
    /**
     * 单次请求返回结果的最大条数。
     * 取值范围：1~500。默认值：200。
     * @example `200`
     */
    "MaxResults"?: number;
}
