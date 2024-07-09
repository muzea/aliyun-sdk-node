export interface GetAdvancedMonitorStateRequest {
    /**
     * 智能接入网关实例ID。
     * @example `sag-asdfz6ac74oj5v****`
     */
    "SagId": string;
    /**
     * 智能接入网关实例所属的地域ID。
     * 您可以通过调用[DescribeRegions](~~69813~~)接口获取地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
}
