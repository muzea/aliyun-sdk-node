export interface GrantSagInstanceToCcnRequest {
    /**
     * 智能接入网关实例所属的地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 智能接入网关实例ID。
     * @example `sag-tzirqx07bvcngm****`
     */
    "SmartAGId": string;
    /**
     * 云连接网实例ID。
     * @example `ccn-n2935s1mnwv8i*****`
     */
    "CcnInstanceId": string;
    /**
     * 云连接网实例所属阿里云账号（主账号）ID。
     * @example `1210123456123456`
     */
    "CcnUid": number;
    /**
     * 是否给跨账号的云连接网实例授权智能接入网关实例的流量服务能力。
     * 授权成功后，跨账号云连接网实例可以引导智能接入网关实例去往公网的流量做安全审计。
     * - **true**：授权。
     * - **false**：不授权。
     * >在您授权成功后，如果智能接入网关实例开启了安全引流功能，则不允许取消授权。
     * @example `true`
     */
    "GrantTrafficService"?: boolean;
}
