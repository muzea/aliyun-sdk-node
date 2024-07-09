export interface DescribeUniBackupPolicyDetailResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `F35F45B0-5D6B-4238-BE02-A62D0760****`
     */
    RequestId: string;
    /**
     * 数据库防勒索备份策略的详细信息。
     */
    UniBackupPolicyDTO: {
        /**
         * 数据库防勒索备份策略状态，取值：
         * - **initiating**：初始化中
         * - **opening**：开启
         * - **closing**：关闭
         * - **deleting**：删除中
         * @example `opening`
         */
        PolicyStatus: string;
        /**
         * 数据库类型，取值如下：
         * - **MYSQL**
         * - **MSSQL**
         * - **Oracle**
         * @example `ORACLE`
         */
        DatabaseType: string;
        /**
         * 服务器实例的名称。
         * @example `sql-test-01`
         */
        InstanceName: string;
        /**
         * 备份快照保留天数。
         * @example `7`
         */
        Retention: number;
        /**
         * 备份网络带宽限制。单位为字节。
         * @example `5242880`
         */
        SpeedLimiter: number;
        /**
         * 数据库防勒索备份策略的名称。
         * @example `auto_test_sql`
         */
        PolicyName: string;
        /**
         * 服务器实例的ID。
         * @example `i-2zefcy2id5d60m9t****`
         */
        InstanceId: string;
        /**
         * 数据库防勒索备份策略的ID。
         * @example `123`
         */
        PolicyId: number;
        /**
         * 数据库客户端代理的状态。取值包括：
         * - **UNKNOWN**：未知
         * - **INSTALLED**：已安装
         * - **INSTALL_FAILED**：安装失败
         * - **UNINSTALL_FAILED**：卸载失败
         * @example `INSTALLED`
         */
        AgentStatus: string;
        /**
         * 数据库账户名称。
         * @example `admin`
         */
        AccountName: string;
        /**
         * 全量备份策略详情。
         */
        FullPlan: {
            /**
             * 全量备份开始时间。格式：hh:mm:ss。
             * @example `00:10:00`
             */
            StartTime: string;
            /**
             * 间隔周期单位，取值如下：
             * - **hourly**：小时
             * - **daily**：天
             * - **weekly**：周
             * @example `daily`
             */
            PlanType: string;
            /**
             * 间隔周期。
             * @example `2`
             */
            Interval: number;
            /**
             * 周中执行日期集合。
             */
            Days: string[];
        };
        /**
         * 增量备份策略。
         */
        IncPlan: {
            /**
             * 增量备份开始时间。格式：hh:mm:ss。
             * @example `00:10:00`
             */
            StartTime: string;
            /**
             * 间隔周期单位，取值如下：
             * - **hourly**：小时
             * - **daily**：天
             * - **weekly**：周
             * @example `daily`
             */
            PlanType: string;
            /**
             * 间隔周期。
             * @example `2`
             */
            Interval: number;
            /**
             * 周中执行日期集合。
             */
            Days: string[];
        };
    };
}
