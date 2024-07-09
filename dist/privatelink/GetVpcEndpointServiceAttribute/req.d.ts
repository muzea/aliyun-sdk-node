export interface GetVpcEndpointServiceAttributeRequest {
    /**
     * 终端节点服务所属的地域ID。
     * 您可以通过调用[DescribeRegions](~~120468~~)接口获取地域ID。
     * @example `cn-huhehaote`
     */
    "RegionId": string;
    /**
     * 终端节点服务的ID。
     * @example `epsrv-hp3vpx8yqxblby3i****`
     */
    "ServiceId": string;
}
