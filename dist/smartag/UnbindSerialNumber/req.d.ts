export interface UnbindSerialNumberRequest {
    /**
     * 智能接入网关实例的地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 智能接入网关实例ID。
     * @example `sag-0phdojgu5tqr1p****`
     */
    "SmartAGId": string;
    /**
     * 智能接入网关设备的SN号。
     * @example `cn-sh-0-0927-16****`
     */
    "SerialNumber": string;
}
