export interface QueryMqSofamqDLQMessageByGroupIdRequest {
    /**
     * 查询范围的起始时间戳
     * @example `1570723200000`
     */
    "BeginTime": number;
    /**
     * 需要查询的单元
     * @example `RZ01A`
     */
    "Cell"?: string;
    /**
     * 查询范围的终止时间戳
     * @example `1570809600000`
     */
    "EndTime": number;
    /**
     * 需查询的消费端 Group ID
     * @example `GID_test_group_id`
     */
    "GroupId": string;
    /**
     * 需查询的消息所对应的实例 ID。针对有独立命名空间的实例，该参数为必填。
     * @example `MQ_INST_111111111111_DOxxxxxx`
     */
    "InstanceId": string;
    /**
     * 页码
     * @example `1`
     */
    "PageNum": number;
    /**
     * 每页条数
     * @example `10`
     */
    "PageSize": number;
    /**
     * 查询任务的 ID。首次查询不需要输入，后续获取消息必须传入，根据前一次的返回结果取出该字段。
     * @example `0BC1310300002A9F000021E4D7A48346`
     */
    "TaskId"?: string;
}
