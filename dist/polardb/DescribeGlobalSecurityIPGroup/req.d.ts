export interface DescribeGlobalSecurityIPGroupRequest {
    /**
     * 资源组ID。
     * @example `rg-************`
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
