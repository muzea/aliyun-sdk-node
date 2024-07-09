export interface GenerateUserAccessTokenResponse {
    /**
     * Id of the request
     * @example `E6988CE6-41CF-1103-9BEC-2B20D26C0B51`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回编码
     * @example `200`
     */
    Code: string;
    /**
     * 异常信息
     * @example `Parameter.Invalid`
     */
    Message: string;
    /**
     * Token值
     * @example `DDEXEDAFWAGASDFWAEFFAWEFAWFWEAFWAFWAEF`
     */
    Data: string;
}
