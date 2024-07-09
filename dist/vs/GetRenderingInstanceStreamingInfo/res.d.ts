export interface GetRenderingInstanceStreamingInfoResponse {
    /**
     * 请求ID
     * @example `BEA5625F-8FCF-48F4-851B-CA63946DA664`
     */
    RequestId: string;
    /**
     * 云应用服务实例ID
     * @example `render-9f8c57355d224ad7beaf95e145f22111`
     */
    RenderingInstanceId: string;
    /**
     * 云应用服务实例流化网关域名
     * @example `10.178.208.22`
     */
    Gateway: string;
    /**
     * 云应用服务实例串流域名/IP
     * @example `10.18.20.2`
     */
    Hostname: string;
    /**
     * 流化连接端口
     * @example `10003`
     */
    Port: string;
    /**
     * 本次连接的令牌
     * @example `792fy125-594c-4dde-ab35-9ff8hrf0a86f`
     */
    FlowId: string;
}
