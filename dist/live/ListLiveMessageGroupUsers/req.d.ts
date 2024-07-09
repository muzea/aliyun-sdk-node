export interface ListLiveMessageGroupUsersRequest {
    /**
     * 需要查询的直播互动应用ID。
     * @example `demo`
     */
    "AppId": string;
    /**
     * 需要查询的群组的GroupID。
     * @example `grouptest`
     */
    "GroupId": string;
    /**
     * 一次显示的用户数量，取值范围**[10，50]**。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 排序方式，按用户加入群组时间先后进行排序。取值：
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
     * 数据中心，需要与[CreateLiveMessageApp](~~2593195~~)中的数据中心一致，当前支持上海（取值为cn-shanghai)、新加坡（取值为ap-southeast-1）。
     * @example `cn-shanghai`
     */
    "DataCenter"?: string;
}
