export interface GetResourceConfigurationRequest {
    /**
     * 资源地域ID。
     * @example `cn-shanghai`
     */
    "ResourceRegionId": string;
    /**
     * 资源类型。
     * 支持资源中心的资源类型，请参见[支持资源中心的云服务及资源类型](~~477798~~)。
     * @example `ACS::VPC::RouteTable`
     */
    "ResourceType": string;
    /**
     * 资源ID。
     * @example `eip-bp1kyg72m****`
     */
    "ResourceId": string;
}
