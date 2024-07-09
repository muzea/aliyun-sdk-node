export interface GetMultiAccountResourceConfigurationRequest {
    /**
     * 资源目录管理账号ID或成员ID。
     * @example `1619302****`
     */
    "AccountId": string;
    /**
     * 资源地域ID。
     * @example `cn-shanghai`
     */
    "ResourceRegionId": string;
    /**
     * 资源类型。
     * @example `ACS::VPC::RouteTable`
     */
    "ResourceType": string;
    /**
     * 资源ID。
     * @example `m-eb3hji****`
     */
    "ResourceId": string;
}
