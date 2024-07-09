export interface ModifyGlobalSecurityIPGroupRelationRequest {
    /**
     * 地域ID，您可以调用[DescribeRegions](~~61933~~)查询。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例ID。
     * @example `dds-2ze6069764423m0l`
     */
    "DBClusterId": string;
    /**
     * IP白名单模板ID。
     * @example `g-u0qdtybfvxhaxrrhk4n7`
     */
    "GlobalSecurityGroupId": string;
}
