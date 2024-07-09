export interface CreateAudioFileResponse {
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
     * 数据，音频资源的ID，唯一标识一个音频资源。
     * @example `2301b83f-1f9f-491e-9f97-2f832ed92f0b`
     */
    Data: string;
    /**
     * 请求ID。
     * @example `94E29B9B-DBC6-5951-B3DD-C85C1BDF20ED`
     */
    RequestId: string;
}
