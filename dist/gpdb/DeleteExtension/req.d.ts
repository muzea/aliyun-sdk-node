export interface DeleteExtensionRequest {
    /**
     * 实例所在地域ID。
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
     * 插件名称
     * @example `citext`
     */
    "Extension": string;
    /**
     * 实例数据库名。
     * @example `demo1`
     */
    "DBNames": string;
}
