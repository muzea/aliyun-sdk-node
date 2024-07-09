export interface GetUserResponse {
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 账号状态。
         * - 0 : 正常使用。
         * - 1 : 因欠费等原因暂时停用。
         * - 2 : 已释放产品。
         * @example `0`
         */
        AccountStatus: number;
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
