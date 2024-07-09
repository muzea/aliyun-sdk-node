export interface GetGwpInventorySummaryRequest {
    /**
     * 请求参数。
     */
    "body"?: {
        /**
         * 企业编码。
         * @example `C-20080808-1`
         */
        code: string;
        /**
         * 产品id。
         * @example `1024`
         */
        productId: number;
        /**
         * 产品类型: 1表示请求产品碳足迹，5表示请求供应链碳足迹。
         * @example `1`
         */
        productType: number;
    };
}
