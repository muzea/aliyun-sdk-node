export interface DeleteVerifyResultResponse {
    /**
     * 本次请求的ID
     * @example `4EB35****87EBA1`
     */
    RequestId: string;
    /**
     * 返回码
     * @example `200`
     */
    Code: string;
    /**
     * 返回信息
     * @example `success`
     */
    Message: string;
    /**
     * 返回结果
     */
    Result: {
        /**
         * 认证请求的唯一标识
         * @example `4ab0b***cbde97`
         */
        TransactionId: string;
        /**
         * 删除的结果。其中Y表示删除成功，N表示删除失败
         * @example `Y/N`
         */
        DeleteResult: string;
    };
}
