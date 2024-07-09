export interface StartTerminalSessionResponse {
    /**
     * 请求ID。
     * @example `EB5173B0-8E80-564E-AAD1-3135412*****`
     */
    RequestId: string;
    /**
     * 会话ID。
     * @example `s-hz023od0x9****`
     */
    SessionId: string;
    /**
     * 附加在WebSocket的请求头部，用于系统校验本次请求。
     * @example `d86c2df2-d19c-4bd8-b817-a19ef123****`
     */
    SecurityToken: string;
    /**
     * 远程连接ECS实例的WebSocket会话对应的URL。包含了会话ID（`SessionId`）以及用于系统校验的`SecurityToken`。
     * @example `wss://cn-hangzhou.axt.aliyuncs.com/session?sessionId=s-hz023od0x9****&token=d86c2df2-d19c-4bd8-b817-a19ef123****`
     */
    WebSocketUrl: string;
}
