export interface RebootSmartAccessGatewayRequest {
    /**
     * 智能接入网关实例ID。
     * @example `sag-w9unmktmupcde*****`
     */
    "SmartAGId": string;
    /**
     * 地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 硬件序列号。
     * @example `a1b2c3d4e****`
     */
    "SerialNumber"?: string;
}
