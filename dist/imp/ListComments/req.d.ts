export interface ListCommentsRequest {
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
     * 操作人用户ID，表示谁执行了批量查询弹幕消息的操作。
     * @example `62**59`
     */
    "UserId"?: string;
    /**
     * 弹幕的创建者ID。
     * @example `10**13`
     */
    "CreatorId"?: string;
    /**
     * 批量查询弹幕消息的分页页数。要求从1开始，每次分页拉取时递增加1。
     * @example `1`
     */
    "PageNum": number;
    /**
     * 批量查询弹幕消息的分页大小。最小不得小于1，最大不得超过100。如果超过100，会被截断为前100条。
     * @example `50`
     */
    "PageSize": number;
    /**
     * 批量查询弹幕消息的排序方式。取值仅限0和1。
     * - **0**：按照弹幕消息创建时间递减的顺序查询。
     * - **1**：按照弹幕消息创建时间递增的顺序查询。
     * @example `0`
     */
    "SortType": number;
}
