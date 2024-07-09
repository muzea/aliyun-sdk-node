export interface ProbeAccessPointNetworkQualityRequest {
    /**
     * 智能接入网关实例所属地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 智能接入网关实例ID。
     * @example `sag-6z21oj0vjjrx6s****`
     */
    "SmartAGId": string;
    /**
     * 接入点ID列表。
     */
    "AccessPointIds": number[];
}
