export interface DescribeSagVbrRelationsRequest {
    /**
     * 智能接入网关实例所属地域ID。
     * 您可以调用[DescribeRegions](~~69813~~)接口查询智能接入网关支持的地域以及对应的地域ID。
     * @example `cn-shanghai`
     */
    "RegionId"?: string;
    /**
     * 边界路由器实例所属地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "VbrRegionId": string;
    /**
     * 边界路由器实例ID。可以一次查询多个边界路由器实例，N取值最大为**20**。
     * @example `vbr-bp15ihkk93ezxppkd****`
     */
    "VbrInstanceIds": string[];
}
