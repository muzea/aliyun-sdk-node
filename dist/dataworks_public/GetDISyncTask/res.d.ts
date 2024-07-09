export interface GetDISyncTaskResponse {
    /**
     * 请求是否成功。取值如下：
     * - True：成功。
     * - False：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。用于定位日志，排查问题。
     * @example `0bc1411515937635973****	`
     */
    RequestId: string;
    /**
     * 获取数据集成任务的返回结果。
     */
    Data: {
        /**
         * - 如果TaskType为DI_REALTIME，则获取实时同步任务的详情。
         * - 如果TaskType为DI_SOLUTION，则为null。
         * @example `{"extend":{"mode":"wizard","resourceGroup":"S_res_group_287114642182658_1560324290517"},"nodeDef":{},"order":{"hops":[{"from":"datahub_8htXSsfiS2vtZCVG","to":"datahub_CRHBAyGfhSaLmv2f"}]},"setting":{"errorLimit":{},"jvmOption":""},"steps":[{"stepType":"datahub","category":"writer","displayName":"DataHub1","parameter":{"batchSize":1000,"datasource":"datahub_cloud_dev_test","topic":"dwd_tfc_opt_speed_rid_amap_rt"},"name":"datahub_CRHBAyGfhSaLmv2f","gui":{"x":262,"y":325}},{"stepType":"datahub","displayName":"DataHub2","parameter":{"datasource":"datahub_uric_test","topic":"dwd_tfc_opt_speed_rid_amap_rt_330000","batchSize":1000},"name":"datahub_8htXSsfiS2vtZCVG","gui":{"x":268,"y":160.5},"category":"writer"}]}`
         */
        Code: string;
        /**
         * 获取数据集成同步任务的结果状态。取值如下：
         * Success：表示获取数据集成同步任务成功。
         * Fail：表示获取数据集成同步任务失败。
         * @example `success`
         */
        Status: string;
        /**
         * 获取数据集成同步任务失败后的原因描述。
         * 如果获取数据集成同步任务成功，则该参数的返回值为空。
         * @example `fileId:[100] is invalid.`
         */
        Message: string;
        /**
         * - 如果TaskType为DI_REALTIME，则为null。
         * - 如果TaskType为DI_SOLUTION，则获取同步解决方案任务的详情。
         */
        SolutionDetail: {
            /**
             * 同步解决方案的执行状态
             * - 0-成功
             * - 1-未运行
             * - 2-运行中
             * - 3-失败
             * - 4-提交
             * - 5-待人工确认
             * - 6-人工确认完成
             * - 7-其他
             * - 8-等待
             * - 9-已删除
             * @example `0`
             */
            Status: string;
            /**
             * 同步解决方案任务的类型。
             * @example `holo`
             */
            Type: string;
            /**
             * 同步解决方案任务的开始时间。
             * @example `2021-12-07 14:40:51`
             */
            StartTime: string;
            /**
             * 同步解决方案任务的创建者名称。
             * @example `dataworks_di`
             */
            CreatorName: string;
            /**
             * 同步解决方案任务所在的项目ID。
             * @example `10000`
             */
            ProjectId: number;
            /**
             * 同步解决方案任务源端的类型。
             * @example `mysql`
             */
            SourceType: string;
            /**
             * 同步解决方案的配置详情。
             * @example `{"holoDatasource":"holo","offlineSyncConfig":{"nodeNameRule":"oneclick_holo_di_${db_table_name_src}_to_${db_table_name_dest}","resourceGroup":"group_219193793999490"},"processRuleId":1007,"readerConcurrent":10,"realtimeSyncConfig":{"content":{"order":{"hops":[{"from":"reader","to":"writer"}]},"setting":{"speed":{"readerConcurrent":10}},"steps":[{"stepType":"mysql","name":"reader","category":"reader","parameter":{"connection":[{"datasource":"mm","datasourceType":"mysql","table":[]}]}},{"stepType":"holo","name":"writer","category":"writer","parameter":{"datasource":"holo","writeMode":"replay","datasourceSchema":"public","tableMappingRule":{"datasource":[{"tableRule":[],"srcDatasourceName":"mm"}]}}}]},"extend":{"mode":"migration_holo","resourceGroup":"group_219193793999490"}},"setting":{"autoCreateWorkflow":true,"userDefinedFileNameExpression":"oneclick"},"srcType":"mysql","tableMappingRuleFromRealtimeSyncConfig":{"datasource":[{"srcDatasourceName":"mm","tableRule":[]}]}}`
             */
            ProcessContent: string;
            /**
             * 同步解决方案任务的名称。
             * @example `holo_20211206161025`
             */
            Name: string;
            /**
             * 同步解决方案任务的额外参数。
             * @example `{"processType":"new","tableNum":300}`
             */
            ProcessExtra: string;
            /**
             * 同步解决方案任务提交的时间。
             * @example `2021-12-07 14:40:51`
             */
            SubmitTime: string;
            /**
             * 同步解决方案的任务ID。
             * @example `100`
             */
            Id: number;
        };
    };
}
