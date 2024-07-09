export interface DeleteSmartAccessGatewayClientUserRequest {
    /**
     * 智能接入网关App实例所属地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 智能接入网关App实例ID。
     * @example `sag-kzo5dvms3dqii3****`
     */
    "SmartAGId": string;
    /**
     * 客户端的用户名。
     * @example `username`
     */
    "UserName": string;
}
