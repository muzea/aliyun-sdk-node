export interface DeleteCommentByCreatorIdRequest {
    /**
     * 应用唯一标识，可以包含小写字母、数字，长度为6个字符。
     * @example `7m***q`
     */
    "AppId": string;
    /**
     * 直播间唯一标识，在调用CreateRoom返回。
     * @example `AE35****T95F`
     */
    "RoomId": string;
    /**
     * 删除的操作人ID。
     * @example `62**59`
     */
    "UserId": string;
    /**
     * 弹幕的创建者ID。
     * @example `12**86`
     */
    "CreatorId": string;
    /**
     * 需要删除的弹幕消息ID的列表，为当前创建者下的弹幕ID列表。列表的最大长度不得超过100。该参数为空时，删除操作将异步执行。
     * @example `Hello, World`
     */
    "CommentIdList"?: string[];
}
