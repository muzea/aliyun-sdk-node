export interface UnbindSmartAccessGatewayRequest {
    /**
     * 云连接网ID。
     * @example `ccn-kygbldwikz********`
     */
    "CcnId": string;
    /**
     * 智能接入网关的ID。
     * @example `sag-0ovhf732a********`
     */
    "SmartAGId": string;
    /**
     * 智能接入网关的所属区域。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 智能接入网关实例的用户ID。
     * @example `1688401595963306`
     */
    "SmartAGUid"?: number;
}
