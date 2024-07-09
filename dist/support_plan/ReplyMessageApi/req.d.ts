export interface ReplyMessageApiRequest {
    /**
     * 任务单id
     * @example `E2012312421`
     */
    "OrderId": string;
    /**
     * 消息类型
     * @example `text`
     */
    "MsgType"?: string;
    /**
     * 场景群id
     * @example `cid+lUpHxTIXt7DYqJDcpVxlA==`
     */
    "OpenGroupId"?: string;
    /**
     * 消息发送人
     * @example `客户名`
     */
    "UserName": string;
    /**
     * 消息内容
     * @example `测试消息`
     */
    "MsgContent": string;
    /**
     * 用户dingUserId
     * @example `123`
     */
    "UserId"?: string;
}
