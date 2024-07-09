export interface ExecContainerCommandResponse {
    /**
     * 请求ID，唯一标识。
     * @example `28B583A8-313D-4383-7817-B5A9F7E0****`
     */
    RequestId: string;
    /**
     * WebSocket URL。您可以利用WebSocket URL建立与容器的连接。
     * @example `wss://eci-cn-shanghai.aliyun.com/exec/?s=ktHPx****`
     */
    WebSocketUri: string;
    /**
     * HTTP URL。在30秒内访问该地址可以进入到容器。更多信息，请参见[使用并集成ECI Terminal](~~202846~~)。
     * @example `https://eci.console.aliyun.com/terminal?param=X32a****`
     */
    HttpUrl: string;
    /**
     * 命令的返回结果。当Sync设置为true时返回该参数。
     * @example `Hello`
     */
    SyncResponse: string;
}
