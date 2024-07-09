export interface VideoModerationCancelResponse {
    /**
     * Id of the request
     * @example `6CF2815C-****-****-B52E-FF6E2****492`
     */
    RequestId: string;
    /**
     * 返回码。返回200代表成功。
     * @example `200`
     */
    Code: number;
    /**
     * 返回信息。
     * @example `OK`
     */
    Message: string;
}
