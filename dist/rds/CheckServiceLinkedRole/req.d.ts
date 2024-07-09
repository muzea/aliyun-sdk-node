export interface CheckServiceLinkedRoleRequest {
    /**
     * 地域ID。
     * > 该参数不影响查询结果，配置任意地域即可，您可以通过DescribeRegions接口查看可用的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 服务关联角色。
     * > RDS支持的服务关联角色，请参见[服务关联角色](~~342840~~)。
     * @example `AliyunServiceRoleForRdsPgsqlOnEcs`
     */
    "ServiceLinkedRole": string;
    /**
     * 资源组ID。
     * @example `rg-bp67acfmxazb4p****`
     */
    "ResourceGroupId"?: string;
}
