export interface DescribeActiveOperationTasksResponse {
    /**
     * 每页记录数。
     * @example `12`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `xxxx`
     */
    RequestId: string;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 总记录数。
     * @example `23`
     */
    TotalRecordCount: number;
    /**
     * 参数列表。
     */
    Items: {
        /**
         * 是否允许取消
         * - **0**：否
         * - **1**：是
         * @example `0`
         */
        AllowCancel: string;
        /**
         * 是否允许修改
         * - **0**：否
         * - **1**：是
         * @example `0`
         */
        AllowChange: string;
        /**
         * 变动等级（可忽略）。
         * @example `Risk`
         */
        ChangeLevel: string;
        /**
         * 变动等级英文。
         * @example `Risk repairment`
         */
        ChangeLevelEn: string;
        /**
         * 变动等级中文。
         * @example `风险修复`
         */
        ChangeLevelZh: string;
        /**
         * 创建时间。
         * @example `2021-06-15T16:00:00Z`
         */
        CreatedTime: string;
        /**
         * 当前AVZ。
         * @example `cn-shanghai-et-a`
         */
        CurrentAVZ: string;
        /**
         * 数据库类型。
         * @example `polarx`
         */
        DbType: string;
        /**
         * 数据库版本。
         * @example `2.0`
         */
        DbVersion: string;
        /**
         * 截止时间。
         * @example `2021-06-15T16:00:00Z`
         */
        Deadline: string;
        /**
         * 任务ID。
         * @example `1`
         */
        Id: number;
        /**
         * 影响（不输出）。
         * @example `--`
         */
        Impact: string;
        /**
         * 影响英文。
         * @example `Transient instance disconnection`
         */
        ImpactEn: string;
        /**
         * 影响中文。
         * @example `中断`
         */
        ImpactZh: string;
        /**
         * 描述。
         * @example `xxx`
         */
        InsComment: string;
        /**
         * 实例名。
         * @example `pxc-dd`
         */
        InsName: string;
        /**
         * 修改时间。
         * @example `2021-06-15T16:00:00Z`
         */
        ModifiedTime: string;
        /**
         * 准备间隔。
         * @example `03:00:00`
         */
        PrepareInterval: string;
        /**
         * 区域。
         * @example `cn-shanghai-et15-b01`
         */
        Region: string;
        /**
         * 结果信息（可忽略）。
         * @example `--`
         */
        ResultInfo: string;
        /**
         * 开始时间。
         * @example `2021-06-15T16:00:00Z`
         */
        StartTime: string;
        /**
         * 状态 ：
         * - **3**：待执行
         * - **4**：执行中
         * @example `3`
         */
        Status: number;
        /**
         * 子实例列表。
         */
        SubInsNames: string[];
        /**
         * 切换时间。
         * @example `2021-06-15T16:00:00Z`
         */
        SwitchTime: string;
        /**
         * 任务类型。
         * @example `rds_apsaradb_transfer`
         */
        TaskType: string;
        /**
         * 任务类型英文（可忽略）。
         * @example `--`
         */
        TaskTypeEn: string;
        /**
         * 任务类型中文（可忽略）。
         * @example `--`
         */
        TaskTypeZh: string;
    }[];
}
