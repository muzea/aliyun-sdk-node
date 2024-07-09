export interface ModifyHadoopDataSourceRequest {
    /**
     * 地域ID。
     * > 您可以调用[DescribeRegions](~~86912~~)接口查看可用的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 实例ID。
     * @example `gp-xxxxxxx`
     */
    "DBInstanceId": string;
    /**
     * 数据源ID。
     * @example `123`
     */
    "DataSourceId"?: string;
    /**
     * 服务描述，长度最长为256字符。
     * @example `pxf for hdfs data source`
     */
    "DataSourceDescription"?: string;
    /**
     * 数据源类型，取值：
     * - mysql/postgresql
     * - hdfs/hive
     * @example `mysql`
     */
    "DataSourceType"?: string;
    /**
     * 外部服务创建类型：
     * - emr：emr实例
     * - selfCreate：自建
     * @example `emr`
     */
    "HadoopCreateType"?: string;
    /**
     * Hadoop集群源节点在/etc/hosts文件中的地址和hostname。
     * @example `192.168.220.128 master-1-1.c-0edfee2cccaecc75.cn-shanghai.emr.aliyuncs.com
    192.168.220.129 core-1-1.c-0edfee2cccaecc75.cn-shanghai.emr.aliyuncs.com
    192.168.220.130 core-1-2.c-0edfee2cccaecc75.cn-shanghai.emr.aliyuncs.com`
     */
    "HadoopHostsAddress"?: string;
    /**
     * Hadoop core-site.xml文件内容
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
    </configuration>
    `
     */
    "HadoopCoreConf"?: string;
    /**
     * Hadoop hdfs-site.xml文件内容。在选择开通HDFS外表时，该字段必填。
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
    "HDFSConf"?: string;
    /**
     * Hadoop hive-site.xml文件内容。在选择开通HIVE外表时，该字段必填。
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
    "HiveConf"?: string;
    /**
     * Hadoop yarn-site.xml文件内容。在选择开通HDFS外表时，该字段必填。
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
    "YarnConf"?: string;
    /**
     * Hadoop mapred-site.xml文件内容。在选择开通HDFS外表时，该字段必填。
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
    "MapReduceConf"?: string;
    /**
     * HadoopCreateType=Emr时，此字段值为emr实例id。
     * @example `c-1234567`
     */
    "EmrInstanceId"?: string;
}
