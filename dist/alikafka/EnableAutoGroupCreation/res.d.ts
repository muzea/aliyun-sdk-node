export interface EnableAutoGroupCreationResponse {
    /**
     * 返回码。
     * 返回 **200** 为成功。
     * @example `200`
     */
    Code: number;
    /**
     * 返回信息。
     * @example `operation success`
     */
    Message: string;
    /**
     * 请求 ID。
     * @example `A421CCD7-5BC5-4B32-8DD8-64668A8FCB56`
     */
    RequestId: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
}
