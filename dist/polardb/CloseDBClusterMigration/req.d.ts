export interface CloseDBClusterMigrationRequest {
    /**
     * 集群ID。
     * @example `pc-**************`
     */
    "DBClusterId": string;
    /**
     * 是否继续打开Binlog，取值范围如下：
     * * **true**：继续打开Binlog
     * * **false**：关闭Binlog
     * 默认取值为**true**。
     * > 关闭Binlog将会重启您的PolarDB集群。
     * @example `true`
     */
    "ContinueEnableBinlog"?: boolean;
}
