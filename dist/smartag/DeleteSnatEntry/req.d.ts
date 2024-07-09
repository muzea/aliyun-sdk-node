export interface DeleteSnatEntryRequest {
    /**
     * 智能接入网关实例所在的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 智能接入网关实例ID。
     * @example `sag-hfbd*******`
     */
    "SmartAGId": string;
    /**
     * SNAT实例ID。
     * @example `snat-djngdheb*******`
     */
    "InstanceId": string;
}
