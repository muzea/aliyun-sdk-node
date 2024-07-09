export interface DescribeActiveOperationTasksResponse {
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 请求ID。
     * @example `C634E813-42FA-53D2-A7EB-B881C4B264CC`
     */
    RequestId: string;
    /**
     * 每页可展示的最大记录数。
     * @example `30`
     */
    PageSize: number;
    /**
     * 总记录数。
     * @example `1`
     */
    TotalRecordCount: number;
    /**
     * 运维任务列表。
     */
    Items: {
        /**
         * 任务运行状态，返回值：
         * - **2**：等待用户指定时间。
         * - **3**：等待处理。
         * - **4**：处理中。
         * - **5**：成功。
         * - **6**：失败。
         * - **7**：已取消。
         * @example `5`
         */
        Status: number;
        /**
         * 变更级别名称的英文。
         * @example `Risk repairment`
         */
        ChangeLevelEn: string;
        /**
         * 任务类型，返回值：**rds_apsaradb_upgrade**表示小版本升级。
         * @example `rds_apsaradb_upgrade`
         */
        TaskType: string;
        /**
         * HBase实例ID。
         * @example `ld-bp150tns0sjxs****`
         */
        InsName: string;
        /**
         * 地域ID。
         * @example `cn-hanghzou`
         */
        Region: string;
        /**
         * 业务影响中文。
         * @example `中断`
         */
        ImpactZh: string;
        /**
         * 运维任务的创建时间。
         * @example `2022-02-15 23:59:59`
         */
        CreatedTime: string;
        /**
         * 系统发起的切换操作的时间。
         * @example `2022-02-19 14:00:00`
         */
        SwitchTime: string;
        /**
         * 变更级别名称的中文。
         * @example `风险修复`
         */
        ChangeLevelZh: string;
        /**
         * 运维任务执行时间可调整范围的最晚期时间。
         * @example `2022-02-19 23:59:59`
         */
        Deadline: string;
        /**
         * 运维任务开始时间到切换时间之间所需的准备时间。
         * @example `14:00:00`
         */
        PrepareInterval: string;
        /**
         * 任务类型中文。
         * @example `小版本升级`
         */
        TaskTypeZh: string;
        /**
         * 当前AVZ。
         * @example `cn-shanghai-et-a`
         */
        CurrentAVZ: string;
        /**
         * 是否允许修改时间，返回值：
         * - **0**：不允许
         * - **1**：允许
         * @example `1`
         */
        AllowChange: string;
        /**
         * 数据库版本。
         * @example `2.0`
         */
        DbVersion: string;
        /**
         * 业务影响英文。
         * @example `Transient instance disconnection`
         */
        ImpactEn: string;
        /**
         * 实例描述。
         * @example `--`
         */
        InsComment: string;
        /**
         * 运维任务开始执行的时间。
         * @example `2022-02-19 10:00:00`
         */
        StartTime: string;
        /**
         * 运维任务修改时间。
         * @example `2022-02-19 14:00:00`
         */
        ModifiedTime: string;
        /**
         * 是否允许取消，返回值：
         * - **0**：不允许
         * - **1**：允许
         * @example `1`
         */
        AllowCancel: string;
        /**
         * 数据库类型，返回值：
         * - **hbaseue**：云数据库HBase增强版。
         * - **hbase**：云数据库HBase标准版。
         * - **bds**：BDS数据同步服务。
         * @example `hbaseue`
         */
        DbType: string;
        /**
         * 变更级别。
         * @example `all`
         */
        ChangeLevel: string;
        /**
         * 任务类型英文。
         * @example `rds_apsaradb_upgrade`
         */
        TaskTypeEn: string;
        /**
         * 执行结果描述。
         * @example `--`
         */
        ResultInfo: string;
        /**
         * 运维任务ID。
         * @example `111111`
         */
        Id: number;
        SubInsNames: string[];
    }[];
}
