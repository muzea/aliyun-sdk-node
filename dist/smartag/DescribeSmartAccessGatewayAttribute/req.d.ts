export interface DescribeSmartAccessGatewayAttributeRequest {
    /**
     * 智能接入网关实例所属的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 智能接入网关实例ID。
     * @example `sag-6z21oj0vjjrx****`
     */
    "SmartAGId": string;
}
