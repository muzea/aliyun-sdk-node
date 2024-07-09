export interface ApplyForStreamAccessTokenResponse {
    /**
     * Id of the request
     * @example `736994BD-AA35-4742-88C9-E64BE4BAA14B`
     */
    RequestId: string;
    /**
     * 服务的请求Token。
     * @example `63ba97b4f18a4a04f715c81e8e643938`
     */
    AccessToken: string;
    /**
     * 通道ID
     * @example `cc9e88c0-4f41-4f1d-a1a9-91a72d2aa27d`
     */
    ChannelId: string;
    /**
     * 业务空间的密钥，流式请求加签使用
     * @example `cc9e88c0-4f41-4f1d-a1a9-91a72d2aa27d`
     */
    StreamSecret: string;
}
