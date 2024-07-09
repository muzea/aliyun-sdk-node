export interface DescribeApiMeteringRequest {
    /**
     * 商品code
     * @example `cmapi0004****`
     */
    "productCode"?: string;
    /**
     * 类型，1表示套餐包，2表示资源包
     * @example `1`
     */
    "type"?: number;
    /**
     * 页码
     * @example `1`
     */
    "pageNum": number;
}
