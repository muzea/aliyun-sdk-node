export interface GetAuthTokenResponse {
    /**
     * 返回Token信息。
     * @example `eyJhbGciOiJIUzI1NiJ9******`
     */
    Data: string;
    /**
     * 请求ID。
     * @example `1A9C645C-C83F-4C9D-8CCB-29BEC9E1****`
     */
    RequestId: string;
    /**
     * 状态码。200为成功，其他状态码为异常。
     * @example `200`
     */
    Code: number;
    /**
     * 附加信息
     * @example `success`
     */
    Message: string;
    /**
     * 查询是否成功：true：成功。                                 false：失败。
     * @example `true`
     */
    Success: boolean;
}
