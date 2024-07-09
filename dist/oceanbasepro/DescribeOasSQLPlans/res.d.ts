export interface DescribeOasSQLPlansResponse {
    /**
     * 请求 ID。
     * @example `EE205C00-30E4-****-****-87E3A8A2AA0C`
     */
    RequestId: string;
    /**
     * SQL 执行计划信息列表。
     */
    Data: {
        /**
         * SQL 执行计划在诊断系统内部的标识。
         * @example `1758****24913166****`
         */
        PlanHash: string;
        /**
         * 执行计划列表。
         */
        Plans: {
            /**
             * Plan 的唯一标识。
             * @example `AAAAAAAAAAI****AAFoT2QAF--7W****`
             */
            Uid: string;
            /**
             * 计划 ID。
             * @example `590****`
             */
            PlanId: number;
            /**
             * Plan 首次被加载的时间。
             * @example `2023-04-12T04:46:38Z`
             */
            FirstLoadTime: string;
            /**
             * Plan 类型：LOCAL、REMOTE、DIST。
             * @example `LOCAL`
             */
            PlanType: string;
            /**
             * SQL 执行计划在诊断系统内部的标识。
             * @example `-86290582****886880`
             */
            PlanHash: string;
            /**
             * 计划大小。
             * @example `10****`
             */
            PlanSize: number;
            /**
             * Schema 版本。
             * @example `16838****3550464`
             */
            SchemaVersion: number;
            /**
             * 合并版本。
             * @example `513`
             */
            MergedVersion: number;
            /**
             * server  ID。
             * @example `2`
             */
            ObServerId: number;
            /**
             * 数据库 ID。
             * @example `11006****828`
             */
            ObDbId: number;
            /**
             * 后端服务器实例 ID。
             * @example `2`
             */
            ServerId: number;
            /**
             * 首次加载时间。
             * @example `1684****03289441`
             */
            FirstLoadTimeUs: number;
            /**
             * 是否命中诊断。
             * @example `false`
             */
            HitDiagnosis: boolean;
            /**
             * SQL 执行计划的 outline_data 字段。
             * @example `/*+ BEGIN_OUTLINE_DATA INDEX(@\"SEL$1\`
             */
            OutlineData: string;
            /**
             * Outline ID。
             * @example `-1`
             */
            OutlineId: number;
            /**
             * 收集时间。
             * @example `1684368****00000`
             */
            CollectTimeUs: number;
            /**
             * SQL 执行所在的 Server。
             * @example `i-bp1db1a9us038****jio`
             */
            Server: string;
            /**
             * 命中率。
             * @example `100.0`
             */
            HitPercentage: number;
            /**
             * 期间的总执行次数。
             * @example `1`
             */
            Executions: number;
            /**
             * 期间的平均每秒执行次数。
             * @example `0.31`
             */
            ExecPs: number;
            /**
             * 期间内的平均物理读次数。
             * @example `0.0`
             */
            AvgDiskReads: number;
            /**
             * 期间内的平均物理写入次数。
             * @example `0.0`
             */
            AvgDiskWrites: number;
            /**
             * 计划在期间内的平均缓存读次数。
             * @example `30137.03`
             */
            AvgBufferGets: number;
            /**
             * 期间内的平均 Application 事件等待时间（毫秒）。
             * @example `0.0`
             */
            AvgApplicationWaitTime: number;
            /**
             * 期间内的平均 Concurrency 事件等待时间（毫秒）。
             * @example `0.0`
             */
            AvgConcurrencyWaitTime: number;
            /**
             * 期间内的平均 UserIo 事件等待时间（毫秒）。
             * @example `0.0`
             */
            AvgUserIoWaitTime: number;
            /**
             * 期间内的平均行处理等待时间（毫秒）。
             * @example `1.0`
             */
            AvgRowProcessed: number;
            /**
             * 期间内的平均间隔等待时间（毫秒）。
             * @example `1876.78`
             */
            AvgElapsedTime: number;
            /**
             * 期间内的平均 CPU 时间（毫秒）。
             * @example `1875.34`
             */
            AvgCpuTime: number;
            /**
             * 长时间执行查询的完成百分比。
             * @example `0.0`
             */
            LargeQueryPercentage: number;
            /**
             * 长时间执行查询的延迟百分比。
             * @example `0.0`
             */
            DelayedLargeQueryPercentage: number;
            /**
             * 超时百分比。
             * @example `0.0`
             */
            TimeoutPercentage: number;
            /**
             * 是否全表扫描。
             * @example `false`
             */
            TableScan: boolean;
            /**
             * SQL 执行计划在诊断系统内部的唯一标识。
             * @example `"52c7c53****53e61b3f7586b17****ad"`
             */
            PlanUnionHash: string;
            /**
             * SQL ID。
             * @example `46939C87ECA****95ED0FF64F44B****`
             */
            SqlId: string;
        }[];
        /**
         * 合并版本。
         * @example `513`
         */
        MergedVersion: number;
        /**
         * 首次加载时间
         * @example `2023-04-12T04:46:38Z`
         */
        FirstLoadTime: string;
        /**
         * 执行计划类型。
         * @example `LOCAL`
         */
        PlanType: string;
        /**
         * 是否命中诊断。
         * @example `false`
         */
        HitDiagnosis: boolean;
        /**
         * 命中率。
         * @example `100.0`
         */
        HitPercentage: number;
        /**
         * 期间内的平均 CPU 时间（毫秒）。
         * @example `1875.34`
         */
        AvgCpuTime: number;
        /**
         * 执行计划。
         */
        PlanExplain: {
            /**
             * SQL 执行计划的 JSON 字符串。
             * @example `"PlanJsonString":"{\"RootOperations\":[{\"Children\":[{\"Children\":[{\"Cost\":2000,\"ObjectName\":\"TR\",\"Operator\":\"PHY_TABLE_SCAN\",\"Property\":\"table_rows:8593, physical_range_rows:85, logical_range_rows:85, index_back_rows:0, output_rows:85, est_method:default_stat, avaiable_index_name[ALL_VIRTUAL_AGENT]\",\"Rows\":86},{\"Children\":[{\"Cost\":2000,\"ObjectName\":\"NA\",\"Operator\":\"PHY_TABLE_SCAN\",\"Property\":\"table_rows:1750, physical_range_rows:17, logical_range_rows:17, index_back_rows:0, output_rows:17, est_method:default_stat, avaiable_index_name[ALL_VIRTUAL_AGENT]\",\"Rows\":18}],\"Cost\":2013,\"ObjectName\":\"NULL\",\"Operator\":\"PHY_SORT\",\"Property\":\"NULL\",\"Rows\":18}],\"Cost\":4024,\"ObjectName\":\"NULL\",\"Operator\":\"PHY_MERGE_JOIN\",\"Property\":\"NULL\",\"Rows\":26}],\"Cost\":4025,\"ObjectName\":\"NULL\",\"Operator\":\"PHY_SCALAR_AGGREGATE\",\"Property\":\"NULL\",\"Rows\":1}]}"`
             */
            PlanJsonString: string;
        };
        /**
         * 执行次数。
         * @example `1`
         */
        Executions: number;
        /**
         * SQL 执行计划在诊断系统内部的唯一标识。
         * @example `"52c7c53****53e61b3f7586b17****ad"`
         */
        PlanUnionHash: string;
        /**
         * 查询语句。
         * > <br>暂未使用，恒为空。
         * @example `"select 1 from t"`
         */
        QuerySql: string;
        /**
         * 是否绑定该执行计划。
         * @example `false`
         */
        Bounded: boolean;
    }[];
}
