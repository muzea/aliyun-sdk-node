export interface BindSerialNumberRequest {
    /**
     * 智能接入网关实例所属的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 智能接入网关实例ID。
     * @example `sag-r79m060r6oy55******`
     */
    "SmartAGId": string;
    /**
     * 智能接入网关设备的SN号。
     * @example `sage62x021922****`
     */
    "SerialNumber": string;
}
