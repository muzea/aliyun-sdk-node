export interface ListDialoguesRequest {
    /**
     * 业务空间唯一标识：AgentKey
     * @example `xxxxx_p_efm`
     */
    "AgentKey": string;
    /**
     * 任务唯一标识
     * @example `xxx`
     */
    "TaskId"?: string;
    /**
     * 开始时间
     * @example `2024-01-04 11:46:07`
     */
    "StartTime"?: string;
    /**
     * 结束时间
     * @example `2024-01-04 11:46:07`
     */
    "EndTime"?: string;
    /**
     * 生成类型：1：创作；2：智搜（默认）
     * @example `2`
     */
    "DialogueType"?: number;
    /**
     * 当前页码
     * @example `1`
     */
    "Current"?: number;
    /**
     * 每页条数：默认10
     * @example `10`
     */
    "Size"?: number;
}
