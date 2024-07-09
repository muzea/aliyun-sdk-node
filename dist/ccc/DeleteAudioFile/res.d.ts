export interface DeleteAudioFileResponse {
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
     * @example `FB77821C-912F-57FF-8834-6336A6479093`
     */
    RequestId: string;
}
