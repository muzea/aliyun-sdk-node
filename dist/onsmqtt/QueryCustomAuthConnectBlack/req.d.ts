export interface QueryCustomAuthConnectBlackRequest {
    /**
     * 消息队列MQTT版实例的ID。
     * @example `post-111****`
     */
    "InstanceId": string;
    /**
     * 查询具体的设备Client ID。
     * @example `GID_test@@@test`
     */
    "ClientId"?: string;
    /**
     * 用来标记当前查询结束的位置，以便下一次调用时作为参数传入，继续翻页。首次调用或返回最后一页时，取值为空字符串。
     * @example `xOfRU60sGEwN1OlFBIL8Ew==`
     */
    "NextToken"?: string;
    /**
     * 查询数量，最大值：100。
     * @example `100`
     */
    "Size": number;
}
