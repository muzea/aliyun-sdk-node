export interface DescribeSagRouteProtocolBgpRequest {
    /**
     * 智能接入网关实例所属地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 智能接入网关实例ID。
     * @example `sag-whfn****`
     */
    "SmartAGId": string;
    /**
     * 绑定的智能接入网关设备序列号。
     * @example `sag32a30****`
     */
    "SmartAGSn": string;
}
