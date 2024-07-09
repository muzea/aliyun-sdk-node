export interface ListSignaturesResponse {
    /**
     * 返回数据。
     */
    Data: {
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
         * 分页返回的签名列表
         */
        Signatures: {
            /**
             * 创建时间 (UTC+8)。
             * @example `2020-01-01 12:00:00`
             */
            CreatedTime: string;
            /**
             * 签名ID。
             * @example `0a54e195-03e2-40bd-869d-b71cb302783e`
             */
            Id: string;
            /**
             * 签名名称。
             * @example `用户增长`
             */
            Name: string;
            /**
             * 签名审核状态。
             * - 0：审核中。
             * - 1：审核通过。
             * - 2：审核不通过。
             * @example `0`
             */
            Status: number;
            /**
             * 更新时间 (UTC+8)。
             * @example `2020-01-01 12:00:00`
             */
            UpdatedTime: string;
        }[];
        /**
         * 账号下全部签名注册记录数量。
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
