export interface DescribeDeviceGatewayResponse {
    /**
     * 云服务的服务地址。
     * @example `192.168.0.1`
     */
    Host: string;
    /**
     * 令牌码。
     * @example `f5578fbc-694c-461d-a2a2-eb090775cef0`
     */
    Token: string;
    /**
     * 该条任务请求ID。
     * @example `BEA5625F-8FCF-48F4-851B-CA63946DA664`
     */
    RequestId: string;
    /**
     * 端口号。
     * @example `8080`
     */
    Port: number;
    /**
     * 设备注册协议。
     * @example `gb28181`
     */
    Protocol: string;
}
