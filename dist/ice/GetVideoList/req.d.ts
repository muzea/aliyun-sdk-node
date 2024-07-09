export interface GetVideoListRequest {
    /**
     * 分类ID。
     * @example `781111`
     */
    "CateId"?: number;
    /**
     * 视频状态。支持获取多个状态的视频，多个状态之间使用半角逗号（,）分隔。
     * @example `Uploading,Normal`
     */
    "Status"?: string;
    /**
     * CreationTime（创建时间）的开始时间。格式为：yyyy-MM-ddTHH:mm:ssZ（UTC时间）。
     * @example `2017-01-11T12:00:00Z`
     */
    "StartTime"?: string;
    /**
     * CreationTime的结束时间，需晚于开始时间。格式为：yyyy-MM-ddTHH:mm:ssZ（UTC时间）。
     * @example `2017-01-11T12:59:00Z`
     */
    "EndTime"?: string;
    /**
     * 查询结果排序。取值：
     * - CreationTime:Desc（默认值）：按创建时间倒序。
     * - CreationTime:Asc：按创建时间升序。
     * @example `CreationTime:Asc`
     */
    "SortBy"?: string;
    /**
     * 当前页码。默认值为1。
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * 列表页大小。默认值为10，最大值为50。
     * @example `20`
     */
    "PageSize"?: number;
}
