export interface MakeDoubleCallResponse {
    /**
     * 请求ID。
     * @example `EE338D98-9BD3-4413-B165`
     */
    RequestId: string;
    /**
     * 接口调用是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 状态码描述。
     * @example `Successful`
     */
    Message: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 会话ID。
         * @example `68255155365620598`
         */
        Acid: string;
    };
}
