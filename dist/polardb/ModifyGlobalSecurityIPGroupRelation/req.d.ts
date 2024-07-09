export interface ModifyGlobalSecurityIPGroupRelationRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 集群ID。
     * @example `pc-*****************`
     */
    "DBClusterId": string;
    /**
     * IP白名单模板ID。
     * @example `g-zsldxfiwjmti0kcm****`
     */
    "GlobalSecurityGroupId": string;
    /**
     * 资源组ID。
     * @example `rg-**********`
     */
    "ResourceGroupId"?: string;
}
