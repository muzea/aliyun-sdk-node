export interface DeleteUserResponse {
    /**
     * 无
     */
    Errors: {
        /**
         * 无
         * @example `无`
         */
        Message: string;
        /**
         * 无
         * @example `无`
         */
        Field: string;
    }[];
    /**
     * 错误信息
     * @example `无`
     */
    Message: string;
    /**
     * 请求 ID
     * @example `59b0bbfe-929b-4a8c-9833-3ce70b4bad38`
     */
    RequestId: string;
    /**
     * 数据
     * @example `无`
     */
    Data: any;
    /**
     * 状态码
     * @example `OK`
     */
    Code: string;
}
