export interface GetJobAttemptLogResponse {
    /**
     * 返回的日志。
     * @example `local:///opt/spark/jars/offline-sql.jar, main_file\n+ exec /usr/bin/tini -s -- /jdk/jdk8/bin/java -cp '/opt/tools/exec-wrapper.jar:.:::/opt/spark/jars/*' com.aliyun.dla.spark.SparkJobWrapper /opt/spark/bin/spark-submit --conf spark.driver.host=172.16.6.205 --conf spark.ui.port=4040 --conf 'spark.driver.extraJavaOptions=-Dlog4j.configuration=file:///opt/spark/log-conf/log4j.properties -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/tmp/dump.hprof -XX:OnOutOfMemoryError=\"bash /opt/tools/oss-cp.sh /tmp/dump.hprof oss://dla-test-cn-hangzhou/spark-logs/release-test/j202105272322hangzhou5d64f1560000128-0001/driver/dump.hprof; bash /opt/tools/job-stop.sh\" '`
     */
    Data: string;
    /**
     * 请求的唯一ID。
     * @example `9CE8F271-F918-43B6-8F58-F9F1C2DCFDB8`
     */
    RequestId: string;
}
