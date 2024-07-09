export interface DisableSmartAccessGatewayUserRequest {
    /**
     * 用户名。
     * @example `1234`
     */
    "UserName": string;
    /**
     * 智能接入网关实例ID。
     * @example `sag-va03wf4l4idaj*****`
     */
    "SmartAGId": string;
    /**
     * 地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
}
