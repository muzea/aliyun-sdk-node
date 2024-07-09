export interface ListStreamingJobsResponse {
    /**
     * 请求ID。
     * @example `B4CAF581-2AC7-41AD-8940-D56DF7AADF5B`
     */
    RequestId: string;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 当前页记录数。
     * @example `2`
     */
    PageRecordCount: number;
    /**
     * 总记录数。
     * @example `2`
     */
    TotalRecordCount: number;
    /**
     * 返回的任务列表。
     */
    JobItems: {
        /**
         * 任务ID。
         * @example `1`
         */
        JobId: string;
        /**
         * 任务名称。
         * @example `test-job`
         */
        JobName: string;
        /**
         * 数据源ID。
         * @example `58`
         */
        DataSourceId: string;
        /**
         * 任务描述。
         * @example `test job`
         */
        JobDescription: string;
        /**
         * 源端数据字段列表。
         */
        SrcColumns: string[];
        /**
         * 目标数据表映射字段列表。
         */
        DestColumns: string[];
        /**
         * 匹配列，通常为目标表的所有主键列，此配置内所有列的值相同即视为两行数据为重复数据。
         */
        MatchColumns: string[];
        /**
         * 更新列，通常为目标表的所有非主键列，当通过MatchColumns确定数据重复时，通过更新UpdateColumns列的值，产生使新数据覆盖旧数据的效果。
         */
        UpdateColumns: string[];
        /**
         * 账号名称。
         * @example `test-account`
         */
        Account: string;
        /**
         * 密码。
         * @example `pwd123`
         */
        Password: string;
        /**
         * 目标数据库名称。
         * @example `dest-db`
         */
        DestDatabase: string;
        /**
         * 目标命名空间。
         * @example `dest-schema`
         */
        DestSchema: string;
        /**
         * 目标表名称。
         * @example `dest-table`
         */
        DestTable: string;
        /**
         * 写入模式。
         * @example `INSERT/UPDATE/MERGE`
         */
        WriteMode: string;
        /**
         * 配置模式
         * 1. basic模式需要指定一些配置字段
         * 1. professional支持提交yaml文件
         * @example `basic / professional`
         */
        Mode: string;
        /**
         * 错误信息。
         * 只会在**Status**参数返回值为**false**时返回该参数。
         * @example `""`
         */
        ErrorMessage: string;
        /**
         * 服务状态，取值：
         * - Init：初始化中
         * - Running：运行中
         * - Exception：异常
         * - Paused：暂停
         * @example `Running`
         */
        Status: string;
        /**
         * 创建时间。
         * @example `2019-09-08T16:00:00Z`
         */
        CreateTime: string;
        /**
         * 最后修改时间。
         * @example `2019-09-08T17:00:00Z`
         */
        ModifyTime: string;
        /**
         * FallbackOffset 回退点位，回退偏移量
         * - FallbackOffset参数定义了当consumer没有请求需要消费的位点或者请求的消费的位点超出当前kafka集群的记录的位点信息的时候的行为。可以选择从earliest（最新）或者latest（最晚）位点开始消费。
         * @example `EARLIEST /  LATEST`
         */
        FallbackOffset: string;
        /**
         * 投递保证。
         * @example `ATLEAST / EXACTLY`
         */
        Consistency: string;
        /**
         * 数据源名称。
         * @example `test-kafka`
         */
        DataSourceName: string;
    }[];
}
