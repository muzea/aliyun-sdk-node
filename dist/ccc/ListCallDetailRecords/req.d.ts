export interface ListCallDetailRecordsRequest {
    /**
     * 分页序号，范围1-100。
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 分页大小，范围1-100。
     * @example `100`
     */
    "PageSize": number;
    /**
     * 获取的历史数据的起始时间，默认为当天的0时，格式为Unix时间戳，单位毫秒。
     * @example `1532448000000`
     */
    "StartTime"?: number;
    /**
     * 获取的历史数据的终止时间，默认为当前时间，格式为Unix时间戳，单位毫秒。
     * @example `1532707199000`
     */
    "EndTime"?: number;
    /**
     * 按通话类型过滤。
     * @example `Outbound`
     */
    "ContactType"?: string;
    /**
     * 按挂断类型过滤，注意：语音邮箱、转人工失败、排队超时、排队溢出、IVR异常的挂断原因需要客户配置挂断原因节点才能体现出来，如果没有配置且IVR中无转人工模块，这时候的挂断原因默认为IVR放弃。
     * @example `Success`
     */
    "ContactDisposition"?: string;
    /**
     * 通过指定的contactId来查询某一通电话的记录，contactId可以通过软电话SDK发生通话时获取到。如果传入该参数，则自动忽略其他查询参数。
     * @example `job-12515239414412****`
     */
    "ContactId"?: string;
    /**
     * 按坐席ID过滤。
     * @example `agent@ccc-test`
     */
    "AgentId"?: string;
    /**
     * 按技能组ID过滤。
     * @example `skillgroup@ccc-test`
     */
    "SkillGroupId"?: string;
    /**
     * 排序方式，非必填，默认为降序。
     * @example `DESC`
     */
    "SortOrder"?: string;
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 排序字段，非必填，默认为startTime（通话开始时间）。
     * @example `startTime`
     */
    "OrderByField"?: string;
    /**
     * 根据主叫或被叫号码模糊查询，格式为JSON字符串，仅包含一个字段phoneNumber，填主叫或被叫号码的全部或者一部分。
     * @example `{"phoneNumber":"0735"}`
     */
    "Criteria"?: string;
    /**
     * 按主叫号码过滤。
     * @example `07353988****`
     */
    "CallingNumber"?: string;
    /**
     * 按被叫号码过滤。
     * @example `1320523****`
     */
    "CalledNumber"?: string;
    /**
     * 按满意度列表过滤，多个满意度结果使用英文逗号隔开。
     * @example `["1","3"]`
     */
    "SatisfactionList"?: string;
    /**
     * 按满意度调查渠道过滤。
     * @example `IVR`
     */
    "SatisfactionSurveyChannel"?: string;
    /**
     * 按满意度描述列表过滤，描述内容由客户自定义。
     * @example `["满意","一般"]`
     */
    "SatisfactionDescriptionList"?: string;
    /**
     * 按未接通原因列表过滤。
     * @example `["NotConnected","NoAnswer"]`
     */
    "EarlyMediaStateList"?: string;
    /**
     * 按挂断原因列表过滤。
     * @example `["Success","NoAnswer"]`
     */
    "ContactDispositionList"?: string;
    /**
     * 按通话类型列表过滤。
     * @example `["Internal","Inbound"]`
     */
    "ContactTypeList"?: string;
}
