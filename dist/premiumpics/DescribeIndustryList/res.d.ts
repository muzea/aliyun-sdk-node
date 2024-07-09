export interface DescribeIndustryListResponse {
    /**
     * 是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `True`
     */
    Success: boolean;
    /**
     * 请求ID
     * @example `2653A619-5539-50C3-8120-1594A3B758DD`
     */
    RequestId: string;
    /**
     * 结果。
     */
    Data: {
        /**
         * 行业id
         * @example `21`
         */
        IndustryId: string;
        /**
         * Waba名称
         * @example `金百丽`
         */
        Name: string;
        /**
         * 域名描述。
         * @example `高端海鲜`
         */
        Description: string;
    }[];
}
