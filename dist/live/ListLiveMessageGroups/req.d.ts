export interface ListLiveMessageGroupsRequest {
    /**
     * 应用ID。
     * @example `demo`
     */
    "AppId": string;
    /**
     * 排序方式，按群组创建时间先后进行排序。取值：
     * - 1：正序。
     * - 2：逆序。
     * @example `1`
     */
    "SortType": number;
    /**
     * 查询页的起始位置，若为空或-1，则默认为首页。
     * @example `1001`
     */
    "NextPageToken"?: number;
    /**
     * 群组状态，默认值为0。取值：
     * - 0：查询全部群组。
     * - 1：查询未被删除群组。
     * - 2：查询已删除群组。
     * @example `1`
     */
    "GroupStatus"?: number;
    /**
     * 数据中心，需要与[CreateLiveMessageApp](~~2593195~~)中的数据中心一致，当前支持上海（取值为cn-shanghai)、新加坡（取值为ap-southeast-1）。
     * @example `cn-shanghai`
     */
    "DataCenter"?: string;
}
