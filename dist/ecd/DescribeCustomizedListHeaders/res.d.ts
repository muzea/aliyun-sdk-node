export interface DescribeCustomizedListHeadersResponse {
    /**
     * 请求ID。
     * @example `1CBAFFAB-B697-4049-A9B1-67E1FC5F****`
     */
    RequestId: string;
    /**
     * 表头列表。
     */
    Headers: {
        /**
         * 表头的显示类型。可调用[ModifyCustomizedListHeaders](~~452324~~)更改。
         * @example `display`
         */
        DisplayType: string;
        /**
         * 表头键值。
         * @example `system_data_disk`
         */
        HeaderKey: string;
        /**
         * 表头名称。
         * @example `系统盘/数据盘`
         */
        HeaderName: string;
    }[];
}
