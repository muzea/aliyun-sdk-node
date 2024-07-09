export interface ModifySmartAccessGatewayClientUserResponse {
    /**
     * 客户端的用户名。
     * @example `username`
     */
    UserName: string;
    /**
     * 请求ID。
     * @example `5F0078B5-8AAD-4B53-8351-4C91B8EA528A`
     */
    RequestId: string;
    /**
     * 客户端的邮箱地址。
     * @example `username@example.com`
     */
    UserMail: string;
    /**
     * 客户端可使用的带宽。单位：Kbps。
     * @example `1`
     */
    Bandwidth: number;
    /**
     * 客户端的IP地址。
     * @example `10.10.10.1`
     */
    ClientIp: string;
}
