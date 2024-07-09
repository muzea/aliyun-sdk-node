export interface RelateDbForHBaseHaRequest {
    /**
     * BDS集群ID，可调用[DescribeInstances](~~144595~~)接口获取。
     * @example `bds-t4nj9v2x85******`
     */
    "ClusterId": string;
    /**
     * HaMigrateType为TABLE级别时该项为必填，多个表用半角逗号（,）隔开。
     * @example `test,test1`
     */
    "HaTables"?: string;
    /**
     * 主实例的hdfs链接地址。主实例为非标准实例（即IsActiveStandard为false）时，参数必填。
     * @example `hdfs://hb-t4naqsay5gn******-master1-001.hbase.rds.aliyuncs.com:8020,hb-t4naqsay5gn******-master2-001.hbase.rds.aliyuncs.com:8020`
     */
    "HaActiveHdfsUri"?: string;
    /**
     * 主实例hdfs的目录。主实例为非标准实例（即IsActiveStandard为false）时，参数必填。
     * @example `/hbase`
     */
    "HaActiveHbaseFsDir"?: string;
    /**
     * 主实例zk地址。主实例为非标准实例（即IsActiveStandard为false）时，参数必填。
     * @example `hb-t4naqsay5gn******-master1-001.hbase.singapore.rds.aliyuncs.com,hb-t4naqsay5gn******-master3-001.hbase.singapore.rds.aliyuncs.com,hb-t4naqsay5gn******-master2-001.hbase.singapore.rds.aliyuncs.com:2181:/hbase`
     */
    "HaActiveClusterKey"?: string;
    /**
     * 主实例数据库版本。主实例为非标准实例（即IsActiveStandard为false）时，参数必填。
     * - **HBase1x**：hbase1.x版本。
     * - **HBase2x**：hbase2.x版本。
     * - **HBaseUE**：hbaseue版本。
     * @example `HBase2x`
     */
    "HaActiveVersion"?: string;
    /**
     * 主实例用户名。主实例为**HBaseue**时必填。
     * @example `root`
     */
    "HaActiveUser"?: string;
    /**
     * 主实例用户名对应的密码。主实例为**HBaseue**时必填。
     * @example `root`
     */
    "HaActivePassword"?: string;
    /**
     * 备实例的hdfs链接地址。备实例为非标准实例（即IsStandbyStandard为false）时，参数必填。
     * @example `hdfs://hb-bp1w6krp539******-master1-001.hbase.rds.aliyuncs.com:8020,hb-bp1w6krp539******-master2-001.hbase.rds.aliyuncs.com:8020`
     */
    "HaStandbyHdfsUri"?: string;
    /**
     * 备实例hdfs的目录。备实例为非标准实例（即IsStandbyStandard为false）时，参数必填。
     * @example `/hbase`
     */
    "HaStandbyHbaseFsDir"?: string;
    /**
     * 备实例zk地址。备实例为非标准实例（即IsStandbyStandard为false）时，参数必填。
     * @example `hb-bp1w6krp539******-master1-001.hbase.singapore.rds.aliyuncs.com,hb-bp1w6krp539******-master3-001.hbase.singapore.rds.aliyuncs.com,hb-t4naqsay5gn******-master2-001.hbase.singapore.rds.aliyuncs.com:2181:/hbase`
     */
    "HaStandbyClusterKey"?: string;
    /**
     * 备实例数据库版本。备实例为非标准实例（即IsStandbyStandard为false）时，参数必填。
     * - **HBase1x** ：hbase1.x版本。
     * - **HBase2x**：hbase2.x版本。
     * - **HBaseUE** ：hbaseue版本。
     * @example `HBase2x`
     */
    "HaStandbyVersion"?: string;
    /**
     * 备实例用户名。备实例为**hbaseue**时必填。
     * @example `root`
     */
    "HaStandbyUser"?: string;
    /**
     * 备实例用户名对应的密码。备实例为**hbaseue**时必填。
     * @example `root`
     */
    "HaStandbyPassword"?: string;
    /**
     * 主实例ID。
     * @example `hb-bp1w6krp539******`
     */
    "HaActive": string;
    /**
     * 备实例集群ID。
     * @example `hb-bp1bl7iqzka******`
     */
    "HaStandby": string;
    /**
     * 主实例集群类型，目前支持**HBase**和**HBaseue**。
     * @example `hbase`
     */
    "HaActiveDBType": string;
    /**
     * 备实例集群类型。目前支持**HBase**和**HBaseue**。
     * @example `hbase`
     */
    "HaStandbyDBType": string;
    /**
     * 主实例是否为标准实例，标准实例为**true**。
     * @example `true`
     */
    "IsActiveStandard": boolean;
    /**
     * 备实例是否为标准实例，标准实例为**true**。
     * @example `true`
     */
    "IsStandbyStandard": boolean;
    /**
     * 同步类型。
     * - **CLUSTER**：实例级别。
     * - **TABLE**： 表级别。
     * - **SKIP**：无需同步。
     * @example `CLUSTER`
     */
    "HaMigrateType": string;
}
