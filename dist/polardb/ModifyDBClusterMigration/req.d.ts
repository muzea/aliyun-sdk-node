export interface ModifyDBClusterMigrationRequest {
    /**
     * PolarDB集群ID。
     * @example `pc-**************`
     */
    "DBClusterId": string;
    /**
     * 源RDS实例ID。
     * @example `rm-************`
     */
    "SourceRDSDBInstanceId": string;
    /**
     * 新的实例ID或集群ID，取值范围如下：
     * * 切换前，填写PolarDB集群ID进行切换。
     * * 切换后，填写RDS实例ID进行回滚。
     * @example `pc-**************`
     */
    "NewMasterInstanceId": string;
    /**
     * 是否需要切换连接地址，取值：
     * - **true**：带地址切换（应用程序不用改连接配置）。
     * - **false**：不带地址切换（应用程序需要改为新的PolarDB连接配置）。
     * 默认为**false**。
     * @example `false`
     */
    "SwapConnectionString"?: string;
    /**
     * 需要切换的具体连接地址。取值为需要两两交换的地址对应的JSON串。
     * >当SwapConnectionString取值为true时生效。
     * @example `{"rm-2ze73el581cs*****.mysql.pre.rds.aliyuncs.com":"pc-2ze8200s298e*****.mysql.polardb.pre.rds.aliyuncs.com","rm-2ze73el581cs86*****.mysql.pre.rds.aliyuncs.com":"test-p*****.mysql.polardb.pre.rds.aliyuncs.com"}`
     */
    "ConnectionStrings"?: string;
}
