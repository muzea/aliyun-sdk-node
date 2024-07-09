export interface DescribeHadoopDataSourceResponse {
    /**
     * 数据源ID。
     * @example `123`
     */
    DataSourceId: string;
    /**
     * 请求ID。
     * @example `B4CAF581-2AC7-41AD-8940-D56DF7AADF5B`
     */
    RequestId: string;
    /**
     * 服务名称。
     * @example `hdfs_pxf`
     */
    DataSourceName: string;
    /**
     * 服务描述，最大长度为256字符。
     * @example `pxf for hdfs data source`
     */
    DataSourceDescription: string;
    /**
     * 服务状态位，取值：
     * - 初始化中 Init
     * - 运行中 Running
     * - 异常 Exception
     * @example `Running`
     */
    DataSourceStatus: string;
    /**
     * 服务目录，在该目录下保留有Hadoop相关的配置文件。
     * @example `HadoopDir`
     */
    DataSourceDir: string;
    /**
     * 服务状态信息，例如异常情况，则显示异常原因。正常Running状态下空值。
     * @example `""`
     */
    StatusMessage: string;
    /**
     * 创建时间。
     * @example `2019-09-08T16:00:00Z`
     */
    CreateTime: string;
    /**
     * 数据源类型
     * @example `hive`
     */
    DataSourceType: string;
    /**
     * 外部服务创建类型：
     * - emr
     * - selfCreate
     * @example `emr`
     */
    HadoopCreateType: string;
    /**
     * Hadoop集群源节点在/etc/hosts文件中的地址和hostname。
     * @example `127.0.0.1 localhost`
     */
    HadoopHostsAddress: string;
    /**
     * Hadoop core-site.xml文件内容。
     * @example `<?xml version="1.0" ?>
    <!-- Created at 2023-08-15 13:52:39.527 -->
    <configuration>
        <property>
            <name>hadoop.http.authentication.kerberos.keytab</name>
            <value>/etc/emr/hadoop-conf/http.keytab</value>
        </property>
        <property>
            <name>fs.oss.idle.timeout.millisecond</name>
            <value>30000</value>
        </property>
        <property>
            <name>fs.oss.download.thread.concurrency</name>
            <value>32</value>
        </property>
    </configuration>`
     */
    HadoopCoreConf: string;
    /**
     * Hadoop hdfs-site.xml文件内容。
     * @example `<?xml version="1.0" ?>
    <!-- Created at 2023-08-15 13:52:43.945 -->
    <configuration>
        <property>
            <name>dfs.datanode.cache.revocation.timeout.ms</name>
            <value>900000</value>
        </property>
        <property>
            <name>dfs.namenode.resource.check.interval</name>
            <value>5000</value>
        </property>
    </configuration>`
     */
    HDFSConf: string;
    /**
     * Hadoop hive-site.xml文件内容。
     * @example `<?xml version="1.0" ?>
    <!-- Created at 2023-08-15 13:52:50.646 -->
    <configuration>
        <property>
            <name>hive.exec.reducers.bytes.per.reducer</name>
            <value>256000000</value>
        </property>
        <property>
            <name>hive.stats.column.autogather</name>
            <value>false</value>
        </property>
    </configuration>`
     */
    HiveConf: string;
    /**
     * Hadoop yarn-site.xml文件内容。
     * @example `<?xml version="1.0" ?>
    <!-- Created at 2023-08-15 13:53:29.021 -->
    <configuration>
        <property>
            <name>yarn.nodemanager.linux-container-executor.nonsecure-mode.local-user</name>
            <value>hadoop</value>
        </property>
        <property>
            <name>yarn.scheduler.fair.dynamic.max.assign</name>
            <value>true</value>
        </property>
    </configuration>`
     */
    YarnConf: string;
    /**
     * hadoop mapred-site.xml文件内容。
     * @example `<?xml version="1.0" ?>
    <!-- Created at 2023-08-15 13:53:28.962 -->
    <configuration>
        <property>
            <name>mapreduce.map.speculative</name>
            <value>true</value>
        </property>
        <property>
            <name>mapreduce.jobhistory.keytab</name>
            <value></value>
        </property>
    </configuration>`
     */
    MapReduceConf: string;
    /**
     * emr实例id。
     * @example `c-1234567`
     */
    EmrInstanceId: string;
}
