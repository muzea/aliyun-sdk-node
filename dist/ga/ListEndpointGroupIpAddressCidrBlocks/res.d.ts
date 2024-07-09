export interface ListEndpointGroupIpAddressCidrBlocksResponse {
    /**
     * 终端节点组所属的地域ID。
     * @example `cn-hangzhou`
     */
    EndpointGroupRegion: string;
    /**
     * Ip地址段列表
     */
    IpAddressCidrBlocks: string[];
    /**
     * 资源组ID。
     * @example `rg-aekztkx4zwc****`
     */
    ResourceGroupId: string;
    /**
     * 资源状态
     * @example `active`
     */
    State: string;
    /**
     * 请求ID。
     * @example `4B6DBBB0-2D01-4C6A-A384-4129266E6B78`
     */
    RequestId: string;
}
