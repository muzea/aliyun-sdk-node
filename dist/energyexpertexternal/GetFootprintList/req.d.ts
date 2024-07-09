export interface GetFootprintListRequest {
    /**
     * 请求参数
     */
    "body"?: {
        /**
         * 企业编码
         * @example `C-20080808-1`
         */
        code: string;
        /**
         * 分页参数，页码，从1开始。
         * @example `1`
         */
        currentPage: number;
        /**
         * 分页大小。
         * @example `10`
         */
        pageSize: number;
        /**
         * 产品类型: 1表示请求产品碳足迹，5表示请求供应链碳足迹。
         * @example `1`
         */
        productType: number;
    };
}
