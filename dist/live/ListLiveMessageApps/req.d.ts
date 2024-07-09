export interface ListLiveMessageAppsRequest {
    /**
     * 排序方式，按创建时间先后进行排序。取值：
     * - 1：顺序
     * - 2：逆序
     * @example `1`
     */
    "SortType": number;
    /**
     * 查询页的起始位置，若为空或者-1则默认为首页。
     * @example `-1`
     */
    "NextPageToken"?: number;
    /**
     * 数据中心，需要与[CreateLiveMessageApp](~~2593195~~)中的数据中心一致，当前固定取值cn-shanghai。
     * @example `cn-shanghai`
     */
    "DataCenter"?: string;
}
