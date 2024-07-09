export interface CreateSmartAccessGatewayClientUserResponse {
    /**
     * 用户名。
     * @example `doc`
     */
    UserName: string;
    /**
     * 请求ID。
     * @example `72E82F5E-66E8-4C22-BF1F-5CEB7DC132E7`
     */
    RequestId: string;
    /**
     * 普通用户的邮箱地址。
     * @example `username@example.com`
     */
    UserMail: string;
    /**
     * 带宽峰值。单位：Kbps。
     * @example `20`
     */
    Bandwidth: number;
    /**
     * 客户端App的IP地址。
     * @example `10.0.XX.XX`
     */
    ClientIp: string;
}
