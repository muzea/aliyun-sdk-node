export interface UpdateCustomAuthIdentityResponse {
    /**
     * Id of the request
     * @example `3F00084A-7F07-4B15-BADA-8903A4FB****`
     */
    RequestId: string;
    /**
     * 返回结果编码。
     * @example `200`
     */
    Code: number;
    /**
     * 操作是否成功。取值：true：成功。false：失败。
     * @example `True`
     */
    Success: boolean;
    /**
     * 返回消息。
     * @example `operation success.`
     */
    Message: string;
}
