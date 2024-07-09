export interface ModifyAudioFileResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 响应码。
     * @example `OK`
     */
    Code: string;
    /**
     * 响应信息。
     * @example `无`
     */
    Message: string;
    /**
     * 数据。
     * @example `无`
     */
    Data: string;
    /**
     * 请求ID。
     * @example `D2F84AAC-7C79-547F-8EE9-7B735F42B93F`
     */
    RequestId: string;
}
