export interface ListSyntheticDetailResponse {
    /**
     * Id of the request
     * @example `70675725-8F11-4817-8106-CFE0AD71****`
     */
    RequestId: string;
    /**
     * 状态码。200表示成功。
     * @example `200`
     */
    Code: number;
    /**
     * 错误信息。
     * @example `null`
     */
    Message: string;
    /**
     * 返回结构体。
     */
    Data: {
        /**
         * 拨测结果列表。
         */
        Items: any[];
        /**
         * 数据总条数。
         * @example `12`
         */
        Total: number;
        /**
         * 当前页数。
         * @example `1`
         */
        Page: number;
        /**
         * 分页大小。
         * @example `10`
         */
        PageSize: number;
        /**
         * 保留字段。
         * @example `保留字段。`
         */
        TaskCreateTime: number;
    };
}
