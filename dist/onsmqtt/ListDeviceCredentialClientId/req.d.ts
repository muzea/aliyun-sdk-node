export interface ListDeviceCredentialClientIdRequest {
    /**
     * 云消息队列 MQTT 版实例的ID，一定要和客户端实际使用的实例ID匹配。您可以在控制台**实例详情**页面获取该ID。
     * @example `mqtt-xxxxxxxx`
     */
    "InstanceId": string;
    /**
     * 微消息队列 MQTT 版的 Group ID。
     * @example `GID_xxx`
     */
    "GroupId": string;
    /**
     * 查询第几页的返回结果。起始页从第1页开始计算。
     * @example `1`
     */
    "PageNo"?: string;
    /**
     * 每页最多显示几条查询记录。
     * 取值范围：1~100。
     * @example `100`
     */
    "PageSize": string;
    /**
     * 下一页查询开始的Token。
     * @example `FFdXXXXXWa`
     */
    "NextToken"?: string;
}
