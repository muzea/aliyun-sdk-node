export interface CreateExtensionsRequest {
    /**
     * 地域ID。
     * > 您可以调用[DescribeRegions](~~86912~~)接口查看可用的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 实例ID。
     * > 您可以调用[DescribeDBInstances](~~86911~~)接口查看目标地域下所有的AnalyticDB PostgreSQL实例的实例ID。
     * @example `gp-xxxxxxxxx`
     */
    "DBInstanceId": string;
    /**
     * 需要安装的插件，多个插件间使用英文逗号（,）分隔。
     * @example `citext, dblink`
     */
    "Extensions": string;
    /**
     * 实例数据库名。
     * @example `demo1`
     */
    "DBNames": string;
}
