export interface OnsMessagePageQueryByTopicRequest {
    /**
     * 需查询的消息的Topic名称。
     * @example `test-mq_topic`
     */
    "Topic": string;
    /**
     * 查询范围的起始时间戳，单位：毫秒。
     * 通过**TaskId**进行后续取消息时，该参数设置的值不生效，默认以第一次查询时输入的起始时间为准。
     * @example `1570723200000`
     */
    "BeginTime": number;
    /**
     * 查询范围的终止时间戳，单位：毫秒。
     * 通过**TaskId**进行后续取消息时，该参数设置的值不生效，默认以第一次查询时输入的终止时间为准。
     * @example `1570809600000`
     */
    "EndTime": number;
    /**
     * 查询任务的ID，首次查询不需要输入，后续取消息必须传入，根据前一次的返回结果取出该字段。
     * @example `0BC1310300002A9F000021E4D7A48346`
     */
    "TaskId"?: string;
    /**
     * 当前取第几页消息，从1开始递增，最大值为50，取消息时不可超过最大页数。
     * @example `2`
     */
    "CurrentPage": number;
    /**
     * 分页查询，每页最多显示的消息数量，默认是20，最小5条，最多50条。
     * 通过**TaskId**进行后续取消息时，该参数设置的值不生效，默认以第一次查询时输入的每页消息数量为准。
     * @example `5`
     */
    "PageSize"?: number;
    /**
     * 需查询的消息所对应的实例ID。
     * @example `MQ_INST_111111111111_DOxxxxxx`
     */
    "InstanceId"?: string;
}
