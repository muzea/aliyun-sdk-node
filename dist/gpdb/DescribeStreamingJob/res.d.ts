export interface DescribeStreamingJobResponse {
    /**
     * 请求ID。
     * @example `B4CAF581-2AC7-41AD-8940-D56DF7AADF5B`
     */
    RequestId: string;
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
     * 任务描述。
     * @example `test_job`
     */
    JobDescription: string;
    /**
     * 数据源ID。
     * @example `2`
     */
    DataSourceId: string;
    /**
     * 源端字段列表。
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
     * 目标数据库账号。
     * @example `test-account`
     */
    Account: string;
    /**
     * 目标数据库密码。
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
     * @example `basic/professional`
     */
    Mode: string;
    /**
     * 任务配置文件。
     * @example `DATABASE: adbpgss_test
    USER: adbpgss_test
    PASSWORD: adbpgssTest
    HOST: gp-xxx-master.gpdb.rds-aliyun-pre.rds.aliyuncs.com
    PORT: 5432
    KAFKA:
      INPUT:
        SOURCE:
          BROKERS: broker1:9092,broker2:9092,broker3:9092
          TOPIC: testtopic
          FALLBACK_OFFSET: earliest
        KEY:
          COLUMNS:
          - NAME: customer_id
            TYPE: int
          FORMAT: delimited
          DELIMITED_OPTION:
            DELIMITER: '|'
        VALUE:
          COLUMNS:
          - TYPE: integer
            NAME: l_orderkey
          - TYPE: integer
            NAME: l_partkey
          - TYPE: integer
            NAME: l_suppkey
          - TYPE: integer
            NAME: l_linenumber
          - TYPE: decimal
            NAME: l_quantity
          - TYPE: decimal
            NAME: l_extendedprice
          - TYPE: decimal
            NAME: l_discount
          - TYPE: decimal
            NAME: l_tax
          - TYPE: char
            NAME: l_returnflag
          - TYPE: char
            NAME: l_linestatus
          - TYPE: date
            NAME: l_shipdate
          - TYPE: date
            NAME: l_commitdate
          - TYPE: date
            NAME: l_receiptdate
          - TYPE: text
            NAME: l_shipinstruct
          - TYPE: text
            NAME: l_shipmode
          - TYPE: text
            NAME: l_comment
          FORMAT: delimited
          DELIMITED_OPTION:
            DELIMITER: '|'
        ERROR_LIMIT: 10
      OUTPUT:
        SCHEMA: adbpgss_test
        TABLE: write_with_insert_plaintext
        MODE: MERGE
        MATCH_COLUMNS:
        - l_orderkey
        - l_partkey
        - l_suppkey
        UPDATE_COLUMNS:
        - l_linenumber
        - l_quantity
        - l_extendedprice
        - l_discount
        - l_tax
        - l_returnflag
        - l_linestatus
        - l_shipdate
        - l_commitdate
        - l_receiptdate
        - l_shipinstruct
        - l_shipmode
        - l_comment
        MAPPING:
        - EXPRESSION: l_orderkey
          NAME: l_orderkey
        - EXPRESSION: l_partkey
          NAME: l_partkey
        - EXPRESSION: l_suppkey
          NAME: l_suppkey
        - EXPRESSION: l_linenumber
          NAME: l_linenumber
        - EXPRESSION: l_quantity
          NAME: l_quantity
        - EXPRESSION: l_extendedprice
          NAME: l_extendedprice
        - EXPRESSION: l_discount
          NAME: l_discount
        - EXPRESSION: l_tax
          NAME: l_tax
        - EXPRESSION: l_returnflag
          NAME: l_returnflag
        - EXPRESSION: l_linestatus
          NAME: l_linestatus
        - EXPRESSION: l_shipdate
          NAME: l_shipdate
        - EXPRESSION: l_commitdate
          NAME: l_commitdate
        - EXPRESSION: l_receiptdate
          NAME: l_receiptdate
        - EXPRESSION: l_shipinstruct
          NAME: l_shipinstruct
        - EXPRESSION: l_shipmode
          NAME: l_shipmode
        - EXPRESSION: l_comment
          NAME: l_comment
      COMMIT:
        MAX_ROW: 1000
        MINIMAL_INTERVAL: 1000
        CONSISTENCY: ATLEAST
      POLL:
        BATCHSIZE: 1000
        TIMEOUT: 1000
      PROPERTIES:
        group.id: testgroup`
     */
    JobConfig: string;
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
     * 服务状态信息，例如异常情况，则显示异常原因。正常Running状态下空值。
     * @example `""`
     */
    ErrorMessage: string;
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
     * kafka分组名称
     * @example `test_group`
     */
    GroupName: string;
    /**
     * 投递保证。
     * @example `ATLEAST / EXACTLY`
     */
    Consistency: string;
    /**
     * kafka中的数据与adbpg目标表不匹配造时会造成写入失败，此值为允许错误行的行数，超出后会造成任务失败。
     * @example `5`
     */
    ErrorLimitCount: number;
    /**
     * FallbackOffset 回退点位，回退偏移量
     * - FallbackOffset参数定义了当consumer没有请求需要消费的位点或者请求的消费的位点超出当前kafka集群的记录的位点信息的时候的行为。可以选择从earliest（最新）或者latest（最晚）位点开始消费。
     * @example `EARLIEST /  LATEST`
     */
    FallbackOffset: string;
    /**
     * 数据源名称。
     * @example `test_kafka`
     */
    DataSourceName: string;
}
