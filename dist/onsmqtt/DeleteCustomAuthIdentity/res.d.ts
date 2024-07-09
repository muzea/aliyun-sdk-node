export interface DeleteCustomAuthIdentityResponse {
    /**
     * Id of the request
     * @example `11568B5B-13A8-4E72-9DBA-3A14F7D3****`
     */
    RequestId: string;
    /**
     * 状态码。200为成功，其他状态码为异常。
     * @example `200`
     */
    Code: number;
    /**
     * 操作是否成功。取值：true：成功。false：失败。
     * @example `True`
     */
    Success: boolean;
    /**
     * 返回信息。
     * @example `operation success.`
     */
    Message: string;
}
