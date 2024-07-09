export interface ListHotNewsWithTypeRequest {
    /**
     * 业务空间唯一标识：AgentKey
     * @example `c160c841c8e54295bf2f441432785944_p_efm`
     */
    "AgentKey": string;
    /**
     * 新闻类别。society: 社会时事，person: 人物新闻，government: 党政时事
     * @example `society`
     */
    "NewsType"?: string;
    /**
     * 新闻类别列表多选。society: 社会时事，person: 人物新闻，government: 党政时事
     */
    "NewsTypes"?: string[];
    /**
     * 每页记录数
     * @example `10`
     */
    "Size"?: number;
    /**
     * 当前页码
     * @example `1`
     */
    "Current"?: number;
}
