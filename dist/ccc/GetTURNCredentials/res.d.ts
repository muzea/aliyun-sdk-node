export interface GetTurnCredentialsResponse {
    /**
     * 响应码。
     * @example `OK`
     */
    Code: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 响应信息。
     * @example `无`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `EEEE671A-3E24-4A04-81E6-6C4F5B39DF75`
     */
    RequestId: string;
    /**
     * 数据。
     */
    Data: {
        /**
         * 用户名。
         * @example `1602585817:****`
         */
        UserName: string;
        /**
         * 密码。
         * @example `M0NQNG/uRUrfIxW7er/S9gKX****`
         */
        Password: string;
    };
    Params: string[];
}
