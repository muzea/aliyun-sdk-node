export interface DescribeHadoopConfigsRequest {
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
     * EMR实例ID。
     * @example `c-xxx`
     */
    "EmrInstanceId": string;
    /**
     * 配置文件名称：
     * - hdfs-site：hdfs-site.xml文件
     * - core-site：core-site.xml文件
     * - yarn-site：yarn-site.xml文件
     * - mapred-site：mapred-site.xml文件
     * - hive-site：hive-site.xml文件
     * @example `hdfs-site`
     */
    "ConfigName": string;
}
