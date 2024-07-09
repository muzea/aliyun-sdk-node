export interface LookupEventsResponse {
    /**
     * 检索到事件的结束时间。
     * @example `2020-07-22T14:00:00Z`
     */
    EndTime: string;
    /**
     * 返回下一页的检索结果。
     * > 若无更多结果，则不返回此字段。
     * @example `eyJhY2NvdW50IjoiMTQyNDM3OTU4NjM4NzE2MSIsImV2ZW50SWQiOiI3MkJDRTExRi02OTU3LTQ0NUItQjY0MC1CNEUyMkM4NUEwQzgiLCJsb2dJZCI6IjgyLTE0MjQzNzk1ODYzODcxNjEiLCJ0aW1lIjoxNjAyMzExNTQwMD****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `FD79665A-CE8B-49D4-82E6-5EE2E0E791DD`
     */
    RequestId: string;
    /**
     * 检索到的事件列表。
     */
    Events: any[];
    /**
     * 检索到事件的开始时间。
     * @example `2020-07-15T14:00:00Z`
     */
    StartTime: string;
}
