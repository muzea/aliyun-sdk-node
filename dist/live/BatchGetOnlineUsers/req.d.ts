export interface BatchGetOnlineUsersRequest {
    /**
     * 互动消息应用ID。
     * @example `a494caec-***-695ef345db77`
     */
    "AppId": string;
    /**
     * 消息组ID。
     * @example `23wcaec-***695ef`
     */
    "GroupId": string;
    /**
     * 用户UserId列表。多个UserId之间用逗号英文逗号（,）分隔。最多配置20个UserId。
     * @example `de1**a0,hu**9`
     */
    "UserIds": string;
}
