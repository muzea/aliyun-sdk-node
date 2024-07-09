export interface DescribeCloudbenchTaskConfigResponse {
    /**
     * 返回的状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 请求返回消息。
     * >  请求成功时该参数返回**Successful**，请求失败时会返回请求异常信息（如错误码等）。
     * @example `Successful`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `B6D17591-B48B-4D31-9CD6-9B9796B2****`
     */
    RequestId: string;
    /**
     * 请求是否执行成功：
     * - **true**：执行成功。
     * - **false**：执行失败。
     * @example `true`
     */
    Success: string;
    /**
     * 详细信息列表，包括信息总数、错误码等。
     */
    Data: {
        /**
         * 压测生成的临时目录。
         * @example `/tmp/bench/`
         */
        WorkDir: string;
        /**
         * 归档文件路径。
         * @example `/tmp/das/cloudbench/archive-sqls/`
         */
        ArchiveFolder: string;
        /**
         * 元文件路径。
         * @example `/tmp/das/cloudbench/cl-1621353601000-360****.meta`
         */
        MetaFilePath: string;
        /**
         * 元文件名。
         * @example `cl-1621353601000-360****.meta`
         */
        MetaFileName: string;
        /**
         * 元文件在OSS的名称。
         * @example `"https://cb-rm-bp1w9g06h560l****.oss-cn-hangzhou.aliyuncs.com/cl-1621353601000-360****.meta?OSSAccessKeyId=LTAI5tKj8B4wikkVtupK****&Expires=1622441372&Signature=Qsehg3tzeA57M%2BIixAbWPWAtvl****`
         */
        MetaFileOnOss: string;
        /**
         * 阿里云账号ID。
         * @example `1091411816252****`
         */
        UserId: string;
        /**
         * 压测的命令。
         * @example `java -jar /tmp/das/cloudbench/CloudBenchClient.jar --bench --rocksdb /tmp/das/cloudbench/rocksdb --meta /tmp/das/cloudbench/cl-1621353601000-360****.meta --task_name 2777bba9-a836-49e6-9f70-1c3822fc9239 --result_file /tmp/das/cloudbench/null.result --user cloudb**** --pwd \"cloudbench@****\" --host rm-bp1j5f8s5x26kq79216****.mysql.rds.aliyuncs.com --port 3306 --charset utf8mb4 --interval 1 --bench_time 3600 --rate_factor 1.0 --start_time 1621353601 --rt > /tmp/das/cloudbench/null.log`
         */
        BenchCmd: string;
        /**
         * 全量SQL文件在OSS的名称。
         * @example `https://cb-rm-bp1w9g06h560l****.oss-cn-hangzhou.aliyuncs.com/cl-1621353601000-360****.sc?OSSAccessKeyId=LTAI5tKj8B4wikkVtupK****&Expires=1622441372&Signature=LYMADwo%2BRrJeqR3e4d8OlIkVmw****`
         */
        SqlFileOnOss: string;
        /**
         * SQL文件预加载的命令。
         * @example `java -jar /tmp/das/cloudbench/CloudBenchClient.jar --load --out /tmp/das/cloudbench/cl-1621353601000-360****.sc --meta /tmp/das/cloudbench/cl-1621353601000-360****.meta --task_name 2777bba9-****-49e6-9f70-1c3822fc**** --rocksdb /tmp/das/cloudbench/rocksdb`
         */
        LoadCmd: string;
        /**
         * RocksDB存储系统在压测机中的位置。
         * @example `/tmp/das/cloudbench/rocksdb`
         */
        RocksDbPath: string;
        /**
         * SQL文件解析的命令。
         * @example `cd /tmp/das/cloudbench && java -jar CloudBenchClient.jar --parse --threads 32 --file /tmp/das/cloudbench/2777bba9-a836-49e6-9f70-1c3822fc9239.archiveSql --meta /tmp/das/cloudbench/cl-1621353601000-360****.meta --out /tmp/das/cloudbench/cl-1621353601000-360****.sc --parent_patmp/das/cloudbench --source RDS --h /thost rm-bp1j5f8s5x266****.mysql.rds.aliyuncs.com --port 3306 --user cloudb**** --pwd \"cloudbench@****\" --cutSqlLen 8192 --db_black_list=information_schema,test,unknow,null`
         */
        ParseCmd: string;
        /**
         * 全量SQL文件名。
         * @example `cl-1621353601000-360****.sc`
         */
        SqlFileName: string;
        /**
         * 压测Jar包路径。
         * @example `/tmp/das/cloudbench/CloudBenchClient.jar`
         */
        ClientJarPath: string;
        /**
         * SQL文件路径。
         * @example `/tmp/das/cloudbench/cl-1621353601000-360****.sc`
         */
        SqlFilePath: string;
        /**
         * 解析后的SQL文件路径。
         * @example `/tmp/das/cloudbench/2777bba9-a836-49e6-9f70-1c3822fc****.archiveSql`
         */
        ParseFilePath: string;
        /**
         * 压测Jar包在OSS的路径。
         * @example `https://cloudbench-cn-hangzhou.oss-cn-hangzhou.aliyuncs.com/CloudBenchClient.jar?OSSAccessKeyId=LTAI5tKj8B4wikkVtupK****&Expires=1622441372&Signature=28p%2BCe4tNHpr9VPOcHc3Si9iOb****`
         */
        JarOnOss: string;
        /**
         * 任务ID。
         * @example `e5cec704-0518-430f-8263-76f4dcds****`
         */
        TaskId: string;
    };
}
