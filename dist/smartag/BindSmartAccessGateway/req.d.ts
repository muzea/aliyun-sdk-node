export interface BindSmartAccessGatewayRequest {
    /**
     * 要绑定的云连接网ID。
     * @example `ccn-isdjvvkexkrpk*****`
     */
    "CcnId": string;
    /**
     * 智能接入网关ID。
     * @example `sag-m7ez44zpayma*****`
     */
    "SmartAGId": string;
    /**
     * 智能接入网关的所属区域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 智能接入网关实例的用户ID。
     * @example `1250123456123456`
     */
    "SmartAGUid"?: number;
}
