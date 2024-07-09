export interface StartConferenceRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 发起会议的坐席ID，非必填，不填则默认使用当前RAM账户映射的坐席。
     * @example `agent@ccc-test`
     */
    "UserId"?: string;
    /**
     * 参会方列表，格式为JSON数组的字符串，数组元素是参会方，如果是内呼坐席，参会方是目标的坐席分机号，如果是外呼客户，参会方是客户号码。
     * @example `["8045****","1317511****"]`
     */
    "ParticipantListJson": string;
    /**
     * 超时时间，呼叫在经过该参数指定的时间仍然未接通的情况下，则主动挂断，非必填，默认30，单位秒。
     * @example `30`
     */
    "TimeoutSeconds"?: number;
    /**
     * 随路数据，不能超过128字节，主要用于扩展需求，普通客户无需关心。
     * @example `无`
     */
    "Tags"?: string;
}
