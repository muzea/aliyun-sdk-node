export interface DescribeSQLPlanResponse {
    /**
     * 请求ID。
     * @example `22D6DEF0-CBC7-4388-A41C-D5FD62******`
     */
    RequestId: string;
    /**
     * 计划阶段的信息列表。
     */
    StageList: {
        /**
         * 该计划阶段的最终执行状态，取值范围如下：
         * * FINISHED：完成。
         * * CANCELED：取消。
         * * ABORTED：中止。
         * * FAILED：失败。
         * @example `FINISHED`
         */
        State: string;
        /**
         * 该阶段的`CPU Time`在各个计算节点的平均值，单位为毫秒（ms）。
         * @example `5984`
         */
        CPUTimeAvg: number;
        /**
         * 该阶段的`CPU Time`在各个计算节点的最大值，单位为毫秒（ms）。
         * @example `5984`
         */
        CPUTimeMax: number;
        /**
         * 该阶段内部总的算子耗时，等同于该阶段的CPU Time，可用于判断查询哪些部分消耗了较多的计算资源。单位为毫秒（ms）。
         * @example `5984`
         */
        OperatorCost: number;
        /**
         * 带数据扫描算子的阶段在各个存储节点读取数据耗时的最大值，单位为毫秒（ms）。
         * @example `0`
         */
        ScanTimeMax: number;
        /**
         * 阶段在各个计算节点的输入数据量的最大值，单位为Byte。
         * @example `173`
         */
        InputSizeMax: number;
        /**
         * 阶段ID。
         * @example `1`
         */
        StageId: number;
        /**
         * 带数据扫描算子的阶段在各个存储节点的扫描数据量的最大值，单位为Byte。
         * @example `0`
         */
        ScanSizeMax: number;
        /**
         * 该阶段的`CPU Time`在各个计算节点的最小值，单位为毫秒（ms）。
         * @example `47`
         */
        CPUTimeMin: number;
        /**
         * 带数据扫描算子的阶段在各个存储节点读取数据耗时的最小值，单位为毫秒（ms）。
         * @example `0`
         */
        ScanTimeMin: number;
        /**
         * 带数据扫描算子的阶段在各个存储节点的扫描数据量的最小值，单位为Byte。
         * @example `0`
         */
        ScanSizeMin: number;
        /**
         * 阶段在各个计算节点的输入数据量的最小值，单位为Byte。
         * @example `173`
         */
        InputSizeMin: number;
        /**
         * 执行目标SQL时的峰值内存，单位为Byte。
         * @example `74208`
         */
        PeakMemory: number;
        /**
         * 带数据扫描算子的阶段在各个存储节点读取数据耗时的平均值，单位为毫秒（ms）。
         * @example `0`
         */
        ScanTimeAvg: number;
        /**
         * 带数据扫描算子的阶段在各个存储节点的扫描数据量的平均值，单位为Byte。
         * @example `0`
         */
        ScanSizeAvg: number;
        /**
         * 阶段在各个计算节点的输入数据量的平均值，单位为Byte。
         * @example `173`
         */
        InputSizeAvg: number;
    }[];
    /**
     * SQL Plan的详细原始数据。
     * @example `{\"queryId\":\"20210527_160443_10581_hdhzr\",\"session\":{\"queryId\":\"20210527_160443_10581_hdhzr\",\"hasSharedStage\":false,\"parentId\":0}}`
     */
    OriginInfo: string;
    /**
     * 目标SQL的详细执行信息。
     */
    Detail: {
        /**
         * SQL语句。
         * @example `INSERT OVERWRITE INTO hdfs_import_external\nSELECT *\nFROM adb_hdfs_import_source`
         */
        SQL: string;
        /**
         * 目标SQL语句的总输出数据量，单位为Byte。
         * @example `9`
         */
        OutputSize: number;
        /**
         * 目标SQL语句的最终执行状态，取值范围如下：
         * * FINISHED：完成。
         * * FAILED ：失败。
         * @example `FINISHED`
         */
        State: string;
        /**
         * 目标SQL的总输出行数。
         * @example `1`
         */
        OutputRows: number;
        /**
         * 提交目标SQL语句的用户名。
         * @example `test_acc`
         */
        User: string;
        /**
         * 目标SQL语句的执行开始时间，格式为Unix时间戳，单位为毫秒。
         * @example `1622102683243`
         */
        StartTime: string;
        /**
         * 目标SQL中包含的总阶段个数。
         * @example `4`
         */
        TotalStage: number;
        /**
         * 执行目标SQL的排队时间，单位为毫秒（ms）。
         * @example `0`
         */
        QueuedTime: number;
        /**
         * 目标SQL的执行总耗时，单位为毫秒（ms）。
         * @example `2340`
         */
        TotalTime: number;
        /**
         * 目标SQL中包含的总任务个数。
         * @example `4`
         */
        TotalTask: number;
        /**
         * 执行目标SQL的数据库名称。
         * @example `adb_demo`
         */
        Database: string;
        /**
         * 执行目标SQL时的峰值内存，单位为Byte。
         * @example `441802`
         */
        PeakMemory: number;
        /**
         * 提交目标SQL语句的客户端IP地址。
         * @example `172.16.***.***`
         */
        ClientIP: string;
        /**
         * 执行目标SQL时生成执行计划的时间，单位为毫秒（ms）。
         * @example `86`
         */
        PlanningTime: number;
        /**
         * 执行目标SQL时，算子处理数据单元的总耗时，是多服务器多线程上的累计值。单位为毫秒（ms）。
         * @example `6100`
         */
        CPUTime: number;
    };
}
