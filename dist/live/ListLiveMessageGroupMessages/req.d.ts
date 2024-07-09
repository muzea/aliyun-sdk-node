export interface ListLiveMessageGroupMessagesRequest {
    /**
     * 需要查询的互动消息应用ID。
     * @example `demo`
     */
    "AppId": string;
    /**
     * 需要查询的群组的GroupID。
     * @example `grouptest`
     */
    "GroupId": string;
    /**
     * 一次显示的消息数量，取值范围**[10,50]**。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 排序方式，按消息发送时间先后进行排序。取值：
     * - 1：正序
     * - 2：逆序
     * @example `1`
     */
    "SortType": number;
    /**
     * 查询页的起始位置，若为空则默认为首页。
     * @example `1`
     */
    "NextPageToken"?: number;
    /**
     * 需要查询的消息类型，若为空则默认为全部类型。
     * @example `1`
     */
    "MsgType"?: number;
    /**
     * 查询起始时间，用UNIX时间戳表示，单位：秒。若为空则默认为最早时间。
     * @example `1697783235`
     */
    "BeginTime"?: number;
    /**
     * 查询结束时间，用UNIX时间戳表示，单位：秒。若为空则默认为最晚时间。
     * @example `1698301635`
     */
    "EndTime"?: number;
    /**
     * 数据中心，需要与[CreateLiveMessageApp](~~2593195~~)中的数据中心一致，当前支持上海（取值为cn-shanghai)、新加坡（取值为ap-southeast-1）。
     *
     * @example `cn-shanghai`
     */
    "DataCenter"?: string;
}
