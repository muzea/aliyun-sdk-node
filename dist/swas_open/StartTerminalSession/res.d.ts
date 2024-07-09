export interface StartTerminalSessionResponse {
    /**
     * Id of the request
     * @example `20758A-585D-4A41-A9B2-28DA8F4F****`
     */
    RequestId: string;
    /**
     * 会话ID。
     * @example `ffb90b6e-b18a-4a33-88cf-86fb88****`
     */
    SessionId: string;
    /**
     * 附加在WebSocket的请求头部，用于系统校验本次请求。
     * @example `token-xxxaaz`
     */
    SecurityToken: string;
    /**
     * 远程连接轻量应用服务器实例的WebSocket会话对应的URL。包含了会话ID（`SessionId`）以及用于系统校验的`SecurityToken`。
     * @example `wss://xxxx`
     */
    WebSocketUrl: string;
}
