export interface DescribeDbfsSpecificationsRequest {
    /**
     * DBFS实例所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * ECS实例规格族。
     * @example `ecs.g7se`
     */
    "EcsInstanceType": string;
    /**
     * DBFS版本类型。取值范围：
     * - standard
     * - enterprise
     * @example `enterprise`
     */
    "Category": string;
}
