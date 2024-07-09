export interface ListSmartAGApiUnsupportedFeatureRequest {
    /**
     * 智能接入网关实例所属的地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 智能接入网关设备所属的智能接入网关实例ID。
     * @example `sag-4d6i45zess8nj4****`
     */
    "SmartAGId": string;
    /**
     * 智能接入网关设备序列号。
     * @example `sage62x052614****`
     */
    "SerialNumber": string;
    /**
     * 功能特性相关的OpenAPI名称。
     * @example `ModifySagWan`
     */
    "OpenApiName": string;
}
