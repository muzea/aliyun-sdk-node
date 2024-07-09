export interface ModifyAnnotationMissionResponse {
    /**
     * 表示是否调用成功。true：调用成功。                                 false：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 状态码
     * @example `OK`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `The operation is not allowed. User state (DIALING) does not meet expectations (READY).`
     */
    Message: string;
    /**
     * 返回数据
     */
    Data: {
        /**
         * 是否成功
         * @example `true`
         */
        Success: boolean;
        /**
         * 错误信息。
         * @example `The operation is not allowed. User state (DIALING) does not meet expectations (READY).`
         */
        Message: string;
    };
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求ID
     * @example `254EB995-DEDF-48A4-9101-9CA5B72FFBCC`
     */
    RequestId: string;
}
