export interface DescribeRestorePlansResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `BE120DAB-F4E7-4C53-ADC3-A97578AB****`
     */
    RequestId: string;
    /**
     * 页面显示信息。
     */
    PageInfo: {
        /**
         * 分页查询时，当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页查询时，每页显示的备份恢复任务的数量。
         * @example `20`
         */
        PageSize: number;
        /**
         * 查询到的备份恢复任务的总数量。
         * @example `33`
         */
        TotalCount: number;
        /**
         * 当前页面显示的备份恢复任务的数量。
         * @example `20`
         */
        Count: number;
    };
    /**
     * 恢复任务的集合。
     */
    RestorePlans: {
        /**
         * 备份计划状态。取值包括：
         * - **init**：初始化中
         * - **created**：创建中
         * - **running**：执行中
         * - **completed**：执行成功
         * - **error**：执行失败
         * - **restoring**：恢复中
         * @example `running`
         */
        Status: string;
        /**
         * 恢复时间点。
         * @example `165875100****`
         */
        RestorePoint: number;
        /**
         * 备份任务最后更新的时间戳，单位为毫秒。
         * @example `166849080****`
         */
        UpdatedTime: number;
        /**
         * 数据库的名称。
         * @example `Bankup****`
         */
        DatabaseName: string;
        /**
         * 恢复服务器实例的名称。
         * @example `sql-test-001`
         */
        InstanceName: string;
        /**
         * 目标服务器实例名称。
         * @example `hbr-detection-hh`
         */
        TargetInstanceName: string;
        /**
         * 目标数据库名称。
         * @example `OABak`
         */
        TargetDatabaseName: string;
        /**
         * 数据库防勒索备份策略的名称。
         * @example `KtDataBase`
         */
        PolicyName: string;
        /**
         * 数据库防勒索备份策略的ID。
         * @example `123`
         */
        PolicyId: number;
        /**
         * 目标服务器实例ID。
         * @example `i-2zehqflgbl9ep2he****`
         */
        TargetInstanceId: string;
        /**
         * 创建恢复任务的时间戳，单位为毫秒。
         * @example `1655174753****`
         */
        CreatedTime: number;
    }[];
}
