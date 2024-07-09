export interface GrantInstanceToCbnRequest {
    /**
     * 云企业网实例所属的阿里云账号（主账号）ID。
     * @example `1250123456123456`
     */
    "CenUid": number;
    /**
     * 云连接网实例ID。
     * @example `ccn-n2935s1mnwv8i*****`
     */
    "CcnInstanceId": string;
    /**
     * 云企业网实例ID。
     * @example `cen-7qthudw0ll6jm*****`
     */
    "CenInstanceId": string;
    /**
     * 云连接网实例所属的地域ID。
     * 您可以调用[DescribeRegions](~~69813~~l)接口查询智能接入网关支持的地域以及对应的地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 是否给跨账号的云企业网实例授权云连接网实例的流量服务能力。
     * - **true**：授权。
     * - **false**：（默认值）不授权。
     * >在您授权成功后，如果云连接网下的智能接入网关实例开启了安全引流功能，则不允许取消授权。
     * @example `true`
     */
    "GrantTrafficService"?: boolean;
}
