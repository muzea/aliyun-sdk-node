export interface DeleteCommentRequest {
    /**
     * 用户的应用ID，在控制台创建应用时生成。包含小写字母、数字，长度为6个字符。
     * @example `7m***q`
     */
    "AppId": string;
    /**
     * 房间的唯一标识，在调用CreateRoom时返回。
     * @example `AE35****T95F`
     */
    "RoomId": string;
    /**
     * 操作人的用户ID，用于表示谁执行了删除弹幕消息的操作。
     * @example `as****hs`
     */
    "UserId": string;
    /**
     * 需要删除的弹幕消息ID的列表。列表的最大长度不得超过100。
     * @example `Hello, World`
     */
    "CommentIdList": string[];
}
