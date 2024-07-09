export interface QueryCustomAuthIdentityRequest {
    /**
     * 云消息队列MQTT版实例的ID。
     * @example `post-111****`
     */
    "InstanceId": string;
    /**
     * 用户名。
     * @example `test`
     */
    "Username"?: string;
    /**
     * 身份类型。
     * @example `USER`
     */
    "IdentityType"?: string;
    /**
     * 当查询身份类型是CLIENT时，可以指定设备的ClientID。
     * @example `GID_test@@@test`
     */
    "ClientId"?: string;
    /**
     * 用来标记当前查询结束的位置，以便下一次调用时作为参数传入，继续翻页。首次调用或返回最后一页时，取值为空字符串。
     * @example `eyJhY2NvdW50IjoiMTM4MTcxODk3NDQzMjQ1OSIsImV2ZW50SWQiOiJGMkUxOUE3QS1FM0Q0LTVCOEYtQkU4OS1CNkMyM0RBM0UyRjIiLCJsb2dJZCI6IjY2LTEzODE3MTg5NzQ0MzI0NTkiLCJydyI6IlciLCJ0aW1lIjoxNjc4MzI2MTI1MDAwfQ`
     */
    "NextToken"?: string;
    /**
     * 查询数量，最大值：100。
     * @example `100`
     */
    "Size": number;
}
