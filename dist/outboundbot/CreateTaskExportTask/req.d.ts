export interface CreateTaskExportTaskRequest {
    /**
     * 实例ID
     * @example `1dcb09c5-d5db-4397-bf65-db854463beea`
     */
    "InstanceId": string;
    /**
     * 任务创建时间搜索开始时间
     * @example `1646496000000`
     */
    "TaskCreateTimeGte"?: number;
    /**
     * 任务创建时间搜索截止时间
     * @example `1646582400000`
     */
    "TaskCreateTimeLte"?: number;
    /**
     * 任务组ID
     * @example `cb731aee-0a5b-4c2b-924c-d9e82eb1d8d7`
     */
    "JobGroupId"?: string;
    /**
     * 有无应答
     * @example `true`
     */
    "HasAnswered"?: boolean;
    /**
     * 是否拒识挂机
     * @example `true`
     */
    "HasHangUpByRejection"?: boolean;
    /**
     * 是否对话完结
     * @example `true`
     */
    "HasReachedEndOfFlow"?: boolean;
    /**
     * 任务名称
     * @example `测试_20220217_160147`
     */
    "JobGroupNameQuery"?: string;
    /**
     * 作业ID
     * @example `82097dd5-54df-475f-beba-eec8f4b7a3e1`
     */
    "JobId"?: string;
    /**
     * 被叫号码
     * @example `11111111111`
     */
    "CalledNumber"?: string;
    /**
     * 用户ID
     * @example `82097dd5-54df-475f-beba-eec8f4b7a3e1`
     */
    "UserIdMatch"?: string;
    /**
     * 任务ID
     * @example `64ebe700-91b4-49cb-b457-0b7c0b598a86`
     */
    "TaskId"?: string;
    /**
     * 拨打时间搜索开始时间(包含)
     * @example `1646496000000`
     */
    "ActualTimeGte"?: number;
    /**
     * 拨打时间搜索截止时间(包含)
     * @example `1646582400000`
     */
    "ActualTimeLte"?: number;
    /**
     * 振铃时长搜索开始时间
     * @example `10`
     */
    "RecordingDurationGte"?: number;
    /**
     * 振铃时长搜索截止时间
     * @example `20`
     */
    "RecordingDurationLte"?: number;
    /**
     * 页码（从0开始）
     * @example `0`
     */
    "PageIndex"?: number;
    /**
     * 分页大小
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 其他ID
     * @example `64ebe700-91b4-49cb-b457-0b7c0b598a86`
     */
    "OtherId"?: string;
    /**
     * 排序字段
     * @example `actualTime`
     */
    "SortBy"?: string;
    /**
     * 排序类型 asr:升序,desc:降序
     * @example `desc`
     */
    "SortOrder"?: string;
    /**
     * 通话时长搜索最小时间
     * @example `10`
     */
    "CallDurationGte"?: number;
    /**
     * 通话时长搜索最大时间
     * @example `20`
     */
    "CallDurationLte"?: number;
    /**
     * 作业状态
     * @example `Succeeded`
     */
    "JobStatusStringList"?: string;
    /**
     * 通话状态
     * @example `Succeeded,Failed`
     */
    "TaskStatusStringList"?: string;
    /**
     * 场景名称
     * @example `测试`
     */
    "ScriptNameQuery"?: string;
}
