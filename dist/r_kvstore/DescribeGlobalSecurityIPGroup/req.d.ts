export interface DescribeGlobalSecurityIPGroupRequest {
    /**
     * 资源组ID。
     * @example `rg-acfmyiu4ekp****`
     */
    "ResourceGroupId"?: string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * IP白名单模板ID。
     * @example `g-zsldxfiwjmti0kcm****`
     */
    "GlobalSecurityGroupId"?: string;
}
