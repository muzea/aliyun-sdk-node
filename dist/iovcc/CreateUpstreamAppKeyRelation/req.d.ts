export interface CreateUpstreamAppKeyRelationRequest {
    /**
     * 客户端应用标识，为cmns应用appKey。
     * @example `xglrajCR`
     */
    "AppKey": string;
    /**
     * 处理cmns上行消息的应用服务端标识。
     * @example `fgbbajCR`
     */
    "PAppKey": string;
    /**
     * iovcc项目工程ID。
     * @example `ewrtgggr`
     */
    "ProjectId": string;
}
