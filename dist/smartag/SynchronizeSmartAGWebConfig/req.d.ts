export interface SynchronizeSmartAGWebConfigRequest {
    /**
     * 智能接入网关地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 智能接入网关实例ID。
     * @example `sag-nylv14tghsk26c****`
     */
    "SmartAGId": string;
    /**
     * 智能接入网关设备序列号。
     * @example `sag32a30****`
     */
    "SmartAGSn": string;
}
