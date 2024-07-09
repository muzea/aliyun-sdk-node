export interface ModifySmartAccessGatewayClientUserRequest {
    /**
     * 智能接入网关App实例所属地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 智能接入网关App实例ID。
     * @example `sag-rz2e23c0e78ema****`
     */
    "SmartAGId": string;
    /**
     * 客户端的用户名。
     * @example `username`
     */
    "UserName": string;
    /**
     * 客户端可使用的带宽。单位：Kbps。
     * 取值范围：**1**~**20000**。
     * @example `1`
     */
    "Bandwidth"?: number;
    /**
     * 客户端的邮箱地址。
     * @example `username@example.com`
     */
    "Email"?: string;
}
