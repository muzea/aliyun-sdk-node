export interface DescribeSoarRecordActionOutputListResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `6A2BF9CF-3E32-5E45-A79B-8F67E0A4FE90`
     */
    RequestId: string;
    /**
     * 组件动作执行时的输出数据，为JSONArray格式。
     * > 输出数据的具体格式，由编写剧本时配置的组件来确定。
     * @example `[
        {
            "a": "a",
            "taskname": "92af3c79-1754-4646-9366-9ddbd1e45536_xxxx",
            "log_time": 1699868849000
        }
    ]`
     */
    ActionOutputs: string;
    /**
     * 当前分页的页码数。默认值为1。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 分页展示时，每个分页包含的列表条目数。默认为10。
     * @example `10`
     */
    PageSize: number;
    /**
     * 总页数。
     * @example `100`
     */
    TotalCount: number;
}
