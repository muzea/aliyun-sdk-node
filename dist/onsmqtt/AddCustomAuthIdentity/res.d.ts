export interface AddCustomAuthIdentityResponse {
    /**
     * Id of the request
     * @example `020F6A43-19E6-4B6E-B846-44EB31DF****`
     */
    RequestId: string;
    /**
     * 状态码。说明 200表示成功。
     * @example `200`
     */
    Code: number;
    /**
     * 操作是否成功。true表示成功，false表示失败。
     * @example `True`
     */
    Success: boolean;
    /**
     * 返回信息。
     * @example `operation success.`
     */
    Message: string;
}
