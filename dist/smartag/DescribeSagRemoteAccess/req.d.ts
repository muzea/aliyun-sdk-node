export interface DescribeSagRemoteAccessRequest {
    /**
     * 智能接入网关实例ID。
     * @example `sag-1um5x5nwhilymw****`
     */
    "SmartAGId": string;
    /**
     * 智能接入网关设备序列号。
     * @example `sage62x022502****`
     */
    "SerialNumber"?: string;
    /**
     * 智能接入网关实例所属地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
}
