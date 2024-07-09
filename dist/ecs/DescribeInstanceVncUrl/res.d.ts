export interface DescribeInstanceVncUrlResponse {
    /**
     * VNC登录地址。
     * >**VNC登录地址存在时效性，有效期为15秒，调用接口成功后如果15秒内不使用该链接，URL地址会自动失效，您需要重新调用接口获取。**
     * @example `wss%3A%2F%2Fhz01-vncproxy.aliyun.com%2Fwebsockify%2F%3Fs%3DDvh%252FIA%252BYc73gWO48cBx2gBxUDVzaAnSKr74pq30mzqUYgeUMcB%252FbkNixDxdEA996`
     */
    VncUrl: string;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
}
