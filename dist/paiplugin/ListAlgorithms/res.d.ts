export interface ListAlgorithmsResponse {
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 算法列表。
         */
        Algorithms: {
            /**
             * 算法ID。
             * @example `sms_recall`
             */
            Id: string;
            /**
             * 算法名称。
             * @example `短信召回`
             */
            Name: string;
        }[];
        /**
         * 分页数，从1开始，默认为1。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 分页大小，默认为10。
         * @example `10`
         */
        PageSize: number;
        /**
         * 总算法数量。
         * @example `10`
         */
        TotalCount: number;
    };
    /**
     * 错误码。
     * @example `0`
     */
    ErrorCode: number;
    /**
     * 错误信息。
     * @example `OK`
     */
    ErrorMessage: string;
    /**
     * 请求ID。
     * @example `f8651828-609d-4de8-ab49-ab781d7fd85a`
     */
    RequestId: string;
}
