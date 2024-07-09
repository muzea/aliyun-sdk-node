export interface QueryCustomAuthPermissionRequest {
    /**
     * 云消息队列MQTT版实例的ID。
     * @example `post-cn-0pp12gl****`
     */
    "InstanceId": string;
    /**
     * 身份类型。
     * @example `USER`
     */
    "IdentityType"?: string;
    /**
     * 用户名或客户端ID。
     * @example `test`
     */
    "Identity"?: string;
    /**
     * 授权的Topic，支持mqtt多级topic与通配符。
     * @example `test`
     */
    "Topic"?: string;
    /**
     * 用来标记当前查询结束的位置，以便下一次调用时作为参数传入，继续翻页。首次调用或返回最后一页时，取值为空字符串。
     * @example `AAAAAThmKW2HkRgzo4G7IRRTK2fC6zZmAk6y0bwoNPFOOcSP`
     */
    "NextToken"?: string;
    /**
     * 查询数量，最大值：100。
     * @example `100`
     */
    "Size": number;
}
