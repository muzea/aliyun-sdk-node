export interface DescribeDBClusterPerformanceResponse {
    /**
     * 查询结束时间。格式为<i>yyyy-MM-ddTHH:mm:ssZ</i>（UTC时间）。
     * @example `2021-05-03T15:01:00Z`
     */
    EndTime: string;
    /**
     * 请求ID。
     * @example `25B56BC7-4978-40B3-9E48-4B7067******`
     */
    RequestId: string;
    /**
     * 查询开始时间。格式为<i>yyyy-MM-ddTHH:mm:ssZ</i>（UTC时间）。
     * @example `2021-05-03T15:00:00Z`
     */
    StartTime: string;
    /**
     * 集群ID。
     * @example `am-8vbf80pjcz*****`
     */
    DBClusterId: string;
    /**
     * 集群性能指标列表。
     */
    Performances: {
        /**
         * 性能指标名称。
         * @example `AnalyticDB_CPU`
         */
        Key: string;
        /**
         * 数据单位。
         * @example `%`
         */
        Unit: string;
        /**
         * 性能数据列表。
         */
        Series: {
            /**
             * 性能指标数值详情。
             */
            Values: string[];
            /**
             * *   CPU
             *
             *     *   **AnalyticDB\_CPU**：CPU平均使用率。
             *
             *         *   worker\_avg\_cpu\_used：存储节点平均CPU使用率。
             *
             *         *   worker\_max\_cpu\_used：存储节点最大CPU使用率。
             *
             *         *   executor\_avg\_cpu\_used：计算节点平局CPU使用率。
             *
             *         *   executor\_max\_cpu\_used：计算节点最大CPU使用率。
             *
             * *   连接数
             *
             *     *   **AnalyticDB\_Connections**：数据库连接数。
             *
             *         *   connections：集群当前连接数。
             *
             * *   写入
             *
             *     *   **AnalyticDB\_TPS**：写入TPS。
             *
             *         *   tps：insert\_tps、update\_tps、 delete\_tps和load\_tps的累加值。
             *
             *         *   insert\_tps：INSERT INTO VALUES操作每秒成功数。
             *
             *         *   update\_tps：UPDATE操作每秒成功数。
             *
             *         *   delete\_tps：DELETE操作每秒成功数。
             *
             *         *   load\_tps：LOAD操作(INSERT OVERWRITE)每秒成功数。
             *
             *     *   **AnalyticDB\_InsertRT**：写入响应时间。
             *
             *         *   insert\_avg\_rt：写入操作平均耗时。
             *
             *         *   insert\_max\_rt：写入操作最大耗时。
             *
             *     *   **AnalyticDB\_InsertBytes**：写入吞吐量。
             *
             *         *   insert\_in\_bytes：写入数据量。
             *
             * *   更新
             *
             *     *   **AnalyticDB\_UpdateRT**：更新响应时间。
             *
             *         *   updateinto\_avg\_rt：UPDATE操作平均耗时。
             *
             *         *   updateinto\_max\_rt：UPDATE操作最大耗时。
             *
             * *   删除
             *
             *     *   **AnalyticDB\_DeleteRT**：删除响应时间。
             *
             *         *   delete\_avg\_rt：delete操作平均耗时。
             *
             *         *   delete\_max\_rt：delete操作平均耗时。
             *
             * *   查询
             *
             *     *   **AnalyticDB\_QPS**：QPS。
             *
             *         *   qps：SELECT操作每秒完成数。
             *
             *         *   etl\_qps：ETL操作(INSERT OVERWRITE)每秒完成数。
             *
             *     *   **AnalyticDB\_QueryRT**：查询响应时间。
             *
             *         *   query\_avg\_rt：查询平均耗时。
             *
             *         *   query\_max\_rt：查询最大耗时。
             *
             *         *   etl\_avg\_rt：ETL操作平均耗时。
             *
             *         *   etl\_max\_rt：ETL操作最大耗时。
             *
             *     *   **AnalyticDB\_QueryWaitTime**：查询等待耗时。
             *
             *         *   query\_avg\_wait\_time：查询(包括SELECT和ETL)平均等待时间。
             *
             *         *   query\_max\_wait\_time：查询(包括SELECT和ETL)最大等待时间。
             *
             *     *   AnalyticDB\_QueryFailedRatio：查询失败率。
             *
             *         *   query\_failed\_ratio：查询(包括SELECT和ETL)失败率。
             *
             * *   磁盘
             *
             *     *   **AnalyticDB\_IO**：磁盘IO吞吐。
             *
             *         *   worker\_avg\_read\_bytes\_ratio：存储节点平均读操作吞吐。
             *
             *         *   worker\_avg\_write\_bytes\_ratio：存储节点平均写操作吞吐。
             *
             *     *   **AnalyticDB\_IO\_UTIL**：磁盘IO使用率。
             *
             *         *   worker\_avg\_io\_util：存储节点IO使用率。
             *
             *     *   **AnalyticDB\_IO\_WAIT**：IO等待时间。
             *
             *         *   worker\_avg\_io\_await：存储节点平均IO等待时间。
             *
             *     *   **AnalyticDB\_IOPS**：磁盘IOPS。
             *
             *         *   worker\_avg\_read\_ratio：存储节点平均读IOPS。
             *
             *         *   worker\_avg\_write\_ratio：存储节点平均写IOPS。
             *
             *     *   **AnalyticDB\_DiskUsage**：磁盘用量。
             *
             *         *   disk\_used\_ratio：磁盘空间使用率。
             *
             *         *   worker\_max\_node\_disk\_used\_ratio：磁盘空间使用率最大节点的使用率。
             *
             *     *   **AnalyticDB\_HotDataDiskUsage**：热数据磁盘用量。
             *
             *         *   local\_disk\_used：热数据磁盘使用量。
             *
             *     *   **AnalyticDB\_ColdDataDiskUsage**：冷数据磁盘用量。
             *
             *         *   remote\_disk\_used：冷数据磁盘使用量。
             *
             *     *   AnalyticDB\_DiskUsedRatio：空间分析-节点磁盘使用率。
             *
             *         *   disk\_used\_ratio：平均节点磁盘使用率。
             *
             *         *   worker\_max\_node\_disk\_used\_ratio：最大节点磁盘使用率。
             *
             *     *   AnalyticDB\_DiskUsedSize：集群总数据量。
             *
             *         *   disk\_no\_log\_used：（数仓版预留模式集群）总数据量。
             *
             *         *   disk\_no\_log\_used\_max：（数仓版预留模式集群）最大节点数据量。
             *
             *         *   disk\_no\_log\_used\_avg：（数仓版预留模式集群）平均节点数据量。
             *
             *         *   user\_used\_disk\_max：（数仓版弹性模式集群）最大节点热数据量。
             *
             *         *   user\_used\_disk\_avg：（数仓版弹性模式集群）最大节点热数据量。
             *
             *         *   hot\_disk\_used：（数仓版弹性模式集群）热数据量。
             *
             *         *   cold\_disk\_used：（数仓版弹性模式集群）冷数据量。
             *
             * *   其他
             *
             *     *   **AnalyticDB\_BuildTaskCount**：Build任务数
             *
             *         *   max\_build\_task\_count：运行中的最大Build任务数。
             *
             *         *   avg\_build\_task\_count：运行中的平均Build任务数。
             *
             *     *   **AnalyticDB\_ComputeMemoryUsedRatio**: 计算内存使用率。
             *
             *         *   max\_worker\_compute\_memory\_used\_ratio：存储节点最大计算内存使用率。
             *
             *         *   avg\_worker\_compute\_memory\_used\_ratio：存储节点平均计算内存使用率。
             *
             *         *   max\_executor\_compute\_memory\_used\_ratio：计算节点最大计算内存使用率。
             *
             *         *   avg\_executor\_compute\_memory\_used\_ratio：计算节点平均计算内存使用率。
             *
             *     *   AnalyticDB\_UnavailableNodeCount：不可用节点数。
             *
             *         *   worker\_unavailable\_node\_count：存储节点不可用节点数。
             *
             *         *   executor\_unavailable\_node\_count：计算节点不可用节点数。
             *
             * *   WLM相关
             *
             *     *   AnalyticDB\_WLM\_ResubmitQueries\_Count：WLM重新投递查询数。
             *
             *         *   AnalyticDB\_WLM\_ResubmitQueries\_Count：WLM重新投递查询数。
             *
             *     *   AnalyticDB\_WLM\_SQA\_AvgRt\_MS：WLM小查询加速平均耗时。
             *
             *         *   AnalyticDB\_WLM\_SQA\_AvgRt\_MS：WLM小查询加速平均耗时。
             *
             *     *   AnalyticDB\_WLM\_SQA\_Queries\_Count：WLM小查询加速查询数。
             *
             *         *   AnalyticDB\_WLM\_SQA\_Queries\_Count：WLM小查询加速查询数。
             *
             *     *   AnalyticDB\_WLM\_TotalQueries\_Count：WLM总查询数。
             *
             *         *   AnalyticDB\_WLM\_TotalQueries\_Count：WLM总查询数。
             *
             * *   APS相关
             *
             *     *   AnalyticDB\_APS\_BPS：数仓版aps bps。
             *
             *         *   APS\_Read\_BPS：APS读BPS。
             *
             *     *   AnalyticDB\_APS\_CPU：数仓版APS CPU利用率。
             *
             *         *   APS\_CPU\_Avg\_Usage\_Percentage：APS平均CPU使用率。
             *
             *         *   APS\_CPU\_Max\_Usage\_Percentage：APS最大CPU使用率。
             *
             *     *   AnalyticDB\_APS\_Memory：数仓版APS内存利用率。
             *
             *         *   APS\_Memory\_Avg\_Usage\_Percentage：APS平均内存使用率。
             *
             *         *   APS\_Memory\_Max\_Usage\_Percentage：APS最大内存使用率。
             *
             *     *   AnalyticDB\_APS\_RPS：数仓版RPS RPS。
             *
             *         *   APS\_Read\_RPS：APS读RPS。
             *
             *     *   AnalyticDB\_APS\_RT：数仓版APS RT。
             *
             *         *   APS\_Read\_Avg\_RT：APS平均耗时。
             *
             *         *   APS\_Read\_Max\_RT：APS最大耗时。
             * @example `worker_avg_cpu_used`
             */
            Name: string;
            /**
             * 标签。
             * @example `instance_name: "amv-8vbf80pjcz*****"`
             */
            Tags: string;
        }[];
    }[];
}
