export interface QueryAvailableAuthCodeResponse {
    /**
     * 请求ID。
     * @example `6ADDCD31-6BC7-5913-A47F-E29A07E37FEE`
     */
    RequestId: string;
    /**
     * 返回状态码描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 返回的数据内容。
     */
    Data: string[];
    /**
     * 请求状态码。 **OK**为成功。
     * @example `OK`
     */
    Code: string;
    /**
     * 是否成功。取值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
}
