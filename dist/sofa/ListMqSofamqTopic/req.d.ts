export interface ListMqSofamqTopicRequest {
    /**
     * 需获取的 Topic 信息列表所对应的实例 ID
     * @example `000001`
     */
    "InstanceId": string;
    /**
     * 页码
     * @example `1`
     */
    "PageNum": number;
    /**
     * 每页显示条数
     * @example `10`
     */
    "PageSize": number;
    /**
     * 查询指定 Topic 时设置，否则查询所有 Topic
     * @example `TP_TEST`
     */
    "Topic"?: string;
}
