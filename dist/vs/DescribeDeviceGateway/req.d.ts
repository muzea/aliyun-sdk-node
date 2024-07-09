export interface DescribeDeviceGatewayRequest {
    /**
     * 设备ID。
     * @example `24611****70597051-cn-beijing`
     */
    "Id": string;
    /**
     * 客户端的IP地址。
     * @example `192.168.0.1`
     */
    "ClientIp"?: string;
    /**
     * 过期时间。
     * @example `3600`
     */
    "Expire"?: number;
}
