export interface UpgradeExtensionsRequest {
    /**
     * 实例所在的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 实例ID。
     * >您可以调用[DescribeDBInstances](~~86911~~)接口查看目标地域下所有的AnalyticDB PostgreSQL实例的详情，包括实例ID。
     * @example `gp-xxxxxxxxx`
     */
    "DBInstanceId": string;
    /**
     * 需要升级的插件，多个插件间使用英文逗号（,）分隔。
     * @example `citext,dblink`
     */
    "Extensions": string;
}
