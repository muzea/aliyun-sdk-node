export interface GetInstanceStatusStatisticRequest {
    /**
     * DataWorks工作空间的ID。您可以登录DataWorks管控台，进入工作空间配置页面获取工作空间ID。
     * @example `1234`
     */
    "ProjectId": number;
    /**
     * 运行的环境，包括PROD（生产环境）和DEV（开发环境）。
     * @example `PROD`
     */
    "ProjectEnv": string;
    /**
     * 获取不同实例状态数量的业务日期。格式为yyyy-MM-dd。
     * @example `2020-01-01`
     */
    "BizDate": string;
    /**
     * 调度的类型，取值如下：
     * - NORMAL：周期调度
     * - MANUAL：手动调度
     * - PAUSE：暂停调度
     * - SKIP：空跑
     * @example `NORMAL`
     */
    "SchedulerType"?: string;
    /**
     * Dag Type的类型：
     * - MANUAL：手动任务工作流
     * - SMOKE_TEST：冒烟测试工作流
     * - SUPPLY_DATA：补数据
     * - BUSINESS_PROCESS_DAG：一次性业务流程工作流
     * @example `MANUAL`
     */
    "DagType"?: string;
    /**
     * 调度周期。
     * - MINUTE：分钟。
     * - HOUR：小时。
     * - DAY：天。
     * - WEEK：周。
     * - MONTH：月。
     * @example `DAY`
     */
    "SchedulerPeriod"?: string;
}
