export interface ListGeneratedContentsRequest {
    /**
     * 业务空间唯一标识：AgentKey
     * @example `xxxxx_p_efm`
     */
    "AgentKey": string;
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
     * 标题内容
     * @example `杭州亚运会`
     */
    "Title"?: string;
    /**
     * 正文富文本
     * @example `media`
     */
    "ContentDomain"?: string;
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
