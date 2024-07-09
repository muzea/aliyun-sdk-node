export interface UpdateSmartAGAccessPointRequest {
    /**
     * 智能接入网关实例所属地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 要切换到的接入点ID。
     * @example `10`
     */
    "AccessPointId": number;
    /**
     * 智能接入网关实例ID。
     * @example `sag-far8v6owtdxlua****`
     */
    "SmartAGId": string;
}
