export interface DescribeDBClusterMigrationResponse {
    /**
     * PolarDB连接地址详情。
     */
    DBClusterEndpointList: {
        /**
         * 连接串详情。
         */
        AddressItems: {
            /**
             * 虚拟交换机ID。
             * @example `vsw-**********`
             */
            VSwitchId: string;
            /**
             * 连接串。
             * @example `pc-**************.rwlb.rds.aliyuncs.com`
             */
            ConnectionString: string;
            /**
             * 连接串网络类型，取值范围如下：
             * * **Public**：公网地址
             * * **Private**：私网地址
             * * **Inner**：私网地址（经典网络）
             * @example `Private`
             */
            NetType: string;
            /**
             * 端口号。
             * @example `3306`
             */
            Port: string;
            /**
             * 专有网络ID。
             * @example `vpc-**********`
             */
            VPCId: string;
            /**
             * IP地址。
             * @example `192.***.***.10`
             */
            IPAddress: string;
            /**
             * 是否开启SSL加密。取值如下：
             * * **Enabled**：开启SSL加密。
             * * **Disabled**：关闭SSL加密。
             * @example `Enabled`
             */
            SSLEnabled: string;
        }[];
        /**
         * 连接地址ID。
         * @example `pe-***********`
         */
        DBEndpointId: string;
        /**
         * 连接地址类型，取值范围如下：
         * * **Cluster**：默认集群地址
         * * **Primary**：主地址
         * * **Custom**：自定义集群地址
         * @example `Cluster`
         */
        EndpointType: string;
        /**
         * 读写模式，取值范围如下：
         * - ReadWrite：可读可写（自动读写分离）。
         * - ReadOnly（默认）：只读。
         * @example `ReadOnly`
         */
        ReadWriteMode: string;
    }[];
    /**
     * 迁移异常的注释信息，若迁移无异常则返回空值。
     * @example `test`
     */
    Comment: string;
    /**
     * 请求ID。
     * @example `F2A9EFA7-915F-4572-8299-85A307******`
     */
    RequestId: string;
    /**
     * RDS与PolarDB之间的复制关系到期时间，格式为`YYYY-MM-DDThh:mm:ssZ`（UTC时间）。
     * @example `2020-06-17T01:56:36Z`
     */
    ExpiredTime: string;
    /**
     * 集群ID。
     * @example `pc-****************`
     */
    DBClusterId: string;
    /**
     * 同步关系，取值范围如下：
     * * **RDS2POLARDB**：从RDS到PolarDB同步
     * * **POLARDB2RDS**：从PolarDB到RDS同步
     * @example `RDS2POLARDB`
     */
    Topologies: string;
    /**
     * 源RDS实例读写模式，取值范围如下：
     * * **rw**：读写
     * * **ro**：只读
     * @example `rw`
     */
    RdsReadWriteMode: string;
    /**
     * 源RDS实例ID。
     * @example `rm-************`
     */
    SourceRDSDBInstanceId: string;
    /**
     * 集群读写模式，取值范围如下：
     * * **rw**：读写。
     * * **ro**：只读。
     * @example `ro`
     */
    DBClusterReadWriteMode: string;
    /**
     * RDS与PolarDB之间的复制延迟时间，单位为秒。
     * @example `0`
     */
    DelayedSeconds: number;
    /**
     * PolarDB集群的迁移状态，取值范围如下：
     * * **NO_MIGRATION**：没有迁移任务。
     * * **RDS2POLARDB_CLONING**：数据克隆中。
     * * **RDS2POLARDB_SYNCING**：数据同步中，此时PolarDB的读写状态为只读，RDS的读写状态为可读可写。
     * * **SWITCHING**：数据库切换中。
     * * **POLARDB2RDS_SYNCING**：数据库切换完成，此时PolarDB的读写状态为可读可写，RDS的读写状态为只读。您可以修改应用内的连接地址。
     * * **ROLLBACK**：迁移回滚中，回滚完成后，状态变更为**RDS2POLARDB_SYNCING**。
     * * **CLOSING_MIGRATION**：关闭迁移任务中。
     * @example `RDS2POLARDB_SYNCING`
     */
    MigrationStatus: string;
    /**
     * 同步任务ID。
     * @example `dts**********618bs`
     */
    DtsInstanceId: string;
    /**
     * RDS连接地址详情。
     */
    RdsEndpointList: {
        /**
         * 连接串详情。
         */
        AddressItems: {
            /**
             * 虚拟交换机ID。
             * @example `vsw-**************`
             */
            VSwitchId: string;
            /**
             * 连接串。
             * @example `rm-***********.mysql.rds.aliyuncs.com`
             */
            ConnectionString: string;
            /**
             * 连接串网络类型，取值范围如下：
             * * **Public**：公网地址
             * * **Private**：私网地址
             * * **Inner**：私网地址（经典网络）
             * @example `Private`
             */
            NetType: string;
            /**
             * 端口号。
             * @example `3306`
             */
            Port: string;
            /**
             * 专有网络ID。
             * @example `vpc-************`
             */
            VPCId: string;
            /**
             * IP地址。
             * @example `172.***.***.173`
             */
            IPAddress: string;
            /**
             * 是否开启SSL加密。取值如下：
             * * **Enabled**：开启SSL加密。
             * * **Disabled**：关闭SSL加密。
             * @example `Enabled`
             */
            SSLEnabled: string;
        }[];
        /**
         * 连接地址ID。
         * @example `rm-************-normal`
         */
        DBEndpointId: string;
        /**
         * 连接地址类型，取值范围如下：
         * * **Normal**：普通地址
         * * **ReadWriteSplitting**：读写分离地址
         * @example `Normal`
         */
        EndpointType: string;
        /**
         * 源数据库类型
         */
        CustinsType: string;
    }[];
    /**
     * 源数据库类型。取值如下：
     * *  **PolarDBMySQL**：PolarDB大版本升级迁移时的源数据库类型。
     * * **RDS**：将数据从RDS迁移至PolarDB MySQL时的源数据类型。
     * @example `PolarDBMySQL`
     */
    SrcDbType: string;
}
