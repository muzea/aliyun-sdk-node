export interface ListTopicsRequest {
    /**
     * 指定需要获取哪个实例下的主题列表。
     * @example `rmq-cn-7e22ody****`
     */
    "instanceId": string;
    /**
     * 查询的过滤条件，若不输入则查询该实例下所有的主题。
     * @example `topic_test`
     */
    "filter"?: string;
    /**
     * 分页页码，查询第几页的返回结果。
     * @example `1`
     */
    "pageNumber"?: number;
    /**
     * 分页大小，每页最多显示的返回结果数量。
     * @example `3`
     */
    "pageSize"?: number;
    /**
     * 主题的消息类型。
     */
    "messageTypes"?: string[];
}
