export interface DescribeActiveOperationTasksResponse {
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 请求ID。
     * @example `2D9F3768-EDA9-4811-943E-42C8006E****`
     */
    RequestId: string;
    /**
     * 分页大小，默认为25。
     * @example `25`
     */
    PageSize: number;
    /**
     * 返回任务记录数。
     * @example `1`
     */
    TotalRecordCount: number;
    /**
     * 运维任务列表。
     */
    Items: {
        /**
         * 任务状态，返回值：
         * - **3**：待处理任务。
         * - **4**：处理中任务。
         * - **5**：成功结束任务。
         * - **6**：失败结束任务。
         * - **7**：已取消任务。
         * @example `5`
         */
        Status: number;
        /**
         * 事件等级（英文）。
         * @example `System maintenance
        `
         */
        ChangeLevelEn: string;
        /**
         * 任务类型。
         * @example `rds_apsaradb_transfer`
         */
        TaskType: string;
        /**
         * Redis实例ID。
         * @example `r-bp1lgal1sdvxrz****`
         */
        InsName: string;
        /**
         * 地域ID。
         * @example `cn-hanghzou`
         */
        Region: string;
        /**
         * 事件影响（中文）。
         * @example `实例闪断
        `
         */
        ImpactZh: string;
        /**
         * 创建时间，为 UTC 时间，格式为 YYYY-MM-DDTHH:mm:ssZ。
         * @example `2018-05-30T14:30:00Z
        `
         */
        CreatedTime: string;
        /**
         * 后台发起切换操作的时间点，为 UTC 时间，格式为 YYYY-MM-DDTHH:mm:ssZ。
         * @example `2018-05-30T14:30:00Z
        `
         */
        SwitchTime: string;
        /**
         * 事件等级（中文）。
         * @example `系统运维
        `
         */
        ChangeLevelZh: string;
        /**
         * 任务执行时间可调整范围的最晚期限，为 UTC 时间，格式为 YYYY-MM-DDTHH:mm:ssZ。
         * @example `2018-05-30T23:59:59Z`
         */
        Deadline: string;
        /**
         * 开始时间到切换时间之间所需的准备时间, 格式为 HH:mm:ss。
         * @example `04:00:00
        `
         */
        PrepareInterval: string;
        /**
         * 任务原因中文。
         * @example `小版本升级
        `
         */
        TaskTypeZh: string;
        /**
         * 当前可用区。
         * @example `cn-beijing-h
        `
         */
        CurrentAVZ: string;
        /**
         * 是否允许修改时间，1 表示允许用户修改时间，0 表示不允许用户修改时间。
         * @example `1`
         */
        AllowChange: string;
        /**
         * 内核版本号。
         * @example `5.0`
         */
        DbVersion: string;
        /**
         * 事件影响（英文）。
         * @example `Transient instance disconnection`
         */
        ImpactEn: string;
        /**
         * 实例别名/实例备注。
         * @example `test`
         */
        InsComment: string;
        /**
         * 后台执行任务的时间点，为 UTC 时间，格式为 YYYY-MM-DDTHH:mm:ssZ。
         * @example `2018-05-30T00:00:00Z
        `
         */
        StartTime: string;
        /**
         * 修改时间，为 UTC 时间，格式为 YYYY-MM-DDTHH:mm:ssZ。
         * @example `2018-05-30T14:30:00Z
        `
         */
        ModifiedTime: string;
        /**
         * 是否允许取消，1 表示允许用户取消任务，0 表示不允许取消。
         * @example `1`
         */
        AllowCancel: string;
        /**
         * 数据库类型，返回值：**redis**。
         * @example `redis`
         */
        DbType: string;
        /**
         * 事件等级代码，S1 系统运维 S0 风险修复。
         * @example `S1`
         */
        ChangeLevel: string;
        /**
         * 任务原因英文。
         * @example `Minor version update`
         */
        TaskTypeEn: string;
        /**
         * 执行结果信息。
         * @example `userCancel`
         */
        ResultInfo: string;
        /**
         * 任务 ID。
         * @example `11111`
         */
        Id: number;
        /**
         * 实例分片。
         */
        SubInsNames: string[];
        /**
         * 任务参数。
         * @example `{
              "Action": "UpgradeDBInstance"
        }`
         */
        TaskParams: string;
        /**
         * 事件影响。
         * @example `TransientDisconnection`
         */
        Impact: string;
    }[];
}
