export interface ListInstanceVncUrlResponse {
    /**
     * VNC登录链接。
     * @example `wss%3A%2F%2Fhz01-vncproxy.aliyun.com%2Fwebsockify%2F%3Fs%3DDvh%252FIA%252BYc73gWO48cBx2gBxUDVzaAnSKr74pq30mzqUYgeUMcB%252FbkNixDxdEA996	`
     */
    VncUrl: string;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * WebRTC登录使用的Token。
     * @example `D3EC1DE8C12E******`
     */
    WebRtcToken: string;
}
