export interface VoiceModerationCancelResponse {
    /**
     * Id of the request
     * @example `4A926AE2-4C96-573F-824F-0532960799F8`
     */
    RequestId: string;
    /**
     * 返回码。返回200代表成功。
     * @example `200`
     */
    Code: number;
    /**
     * 请求消息的响应消息。
     * @example `SUCCESS`
     */
    Message: string;
}
