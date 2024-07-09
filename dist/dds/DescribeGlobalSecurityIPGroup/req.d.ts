export interface DescribeGlobalSecurityIPGroupRequest {
    /**
     * 实例所属的地域ID，您可以通过调用[DescribeDBInstanceAttribute](~~62010~~)进行查询。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * IP白名单模板ID。
     * @example `g-hedmu8kg9nsabw6u42rv`
     */
    "GlobalSecurityGroupId"?: string;
}
