export interface DescribeHadoopConfigsResponse {
    /**
     * 请求ID。
     * @example `B4CAF581-2AC7-41AD-8940-D56DF7AADF5B`
     */
    RequestId: string;
    /**
     * 配置文件名称：
     * - hdfs-site
     * - core-site
     * - yarn-site
     * - mapred-site
     * - hive-site
     * @example `hdfs-site`
     */
    ConfigName: string;
    /**
     * 配置值
     * @example `<?xml version="1.0" ?>
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
    ConfigValue: string;
}
