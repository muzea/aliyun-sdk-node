export interface DeleteEcuResponse {
    /**
     * 接口响应码。
     * @example `200`
     */
    Code: number;
    /**
     * 附加信息。
     * @example `success`
     */
    Message: string;
    /**
     * 成功返回`OK`。
     * @example `OK`
     */
    Data: string;
    /**
     * 请求ID。
     * @example `fb08fd29-b197-40ab-****-****`
     */
    RequestId: string;
}
