export interface GetVpcEndpointAttributeRequest {
    /**
     * 获取属性信息的终端节点所属的地域ID。
     * 您可以通过调用[DescribeRegions](~~120468~~)接口获取地域ID。
     * @example `cn-huhehaote`
     */
    "RegionId": string;
    /**
     * 获取属性信息的终端节点ID。
     * @example `ep-hp33b2e43fays7s8****`
     */
    "EndpointId": string;
}
