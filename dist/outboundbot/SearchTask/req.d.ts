export interface SearchTaskRequest {
    /**
     * 实例id
     * @example `d481cebe-0bb6-4d13-9649-42ce5074fb75`
     */
    "InstanceId": string;
    /**
     * 任务创建时间lta
     * @example `1646792941`
     */
    "TaskCreateTimeGte"?: number;
    /**
     * 任务创建时间
     * @example `1646792941`
     */
    "TaskCreateTimeLte"?: number;
    /**
     * 任务组id
     * @example `3a30ae7c-27b2-4305-9444-7185ced9d51f`
     */
    "JobGroupId"?: string;
    /**
     * 作业组名字
     * @example `国寿财住院保续保_20220301_134130`
     */
    "JobGroupNameQuery"?: string;
    /**
     * 作业id
     * @example `11994321-e6bc-47bb-8b1c-8eef8f2f768b`
     */
    "JobId"?: string;
    /**
     * 被叫号码
     * @example `15126426342`
     */
    "CalledNumber"?: string;
    /**
     * 用户ID
     * @example `12341155`
     */
    "UserIdMatch"?: string;
    /**
     * 任务id
     * @example `744b27f3-437f-4a8c-a181-f668e492fd24`
     */
    "TaskId"?: string;
    /**
     * 通话开始时间
     * @example `1646582400000`
     */
    "ActualTimeGte"?: number;
    /**
     * 通话开始时间
     * @example `1643126399000`
     */
    "ActualTimeLte"?: number;
    /**
     * 录音总时长
     * @example `10`
     */
    "RecordingDurationGte"?: number;
    /**
     * 录音总时长
     * @example `60`
     */
    "RecordingDurationLte"?: number;
    /**
     * 页号
     * @example `2`
     */
    "PageIndex"?: number;
    /**
     * 个数
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 其他id
     * @example `AVD-2021-39685`
     */
    "OtherId"?: string;
    /**
     * 排序方式
     * @example `actualTime`
     */
    "SortBy"?: string;
    /**
     * 排序顺序。取值范围：
     * - Ascending（升序）
     * - Descending（默认值）：降序
     * @example `desc`
     */
    "SortOrder"?: string;
    /**
     * 通话时长搜索最小时间
     * @example `12341155`
     */
    "CallDurationGte"?: number;
    /**
     * 通话时长搜索最大时间
     * @example `12341155`
     */
    "CallDurationLte"?: number;
    /**
     * 作业状态，多个以英文逗号分隔，当该字段不为空时，会将jobStatusList覆盖
     * @example `Succeeded`
     */
    "JobStatusStringList"?: string;
    /**
     * 通话状态，多个以英文逗号分隔，当该字段不为空时，会将taskStatusList覆盖
     * @example `Succeeded`
     */
    "TaskStatusStringList"?: string;
    /**
     * 场景名称
     * @example `国寿财`
     */
    "ScriptNameQuery"?: string;
}
