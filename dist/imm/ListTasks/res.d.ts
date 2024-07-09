export interface ListTasksResponse {
    /**
     * 请求ID。
     * @example `9847E7D0-A9A3-0053-84C6-BA16FFFA726E`
     */
    RequestId: string;
    /**
     * 项目名称。
     * @example `immtest`
     */
    ProjectName: string;
    /**
     * 翻页标记。当任务列表总数大于设置的MaxResults时，用于翻页的Token。符合条件的任务列表未全部返回时，此参数才有值。
     * 下一次列出任务列表时将此值作为NextToken传入，将后续的任务列表返回。
     * @example `MTIzNDU2Nzg6aW1tdGVzdDpleGFtcGxlYnVja2V0OmRhdGFzZXQwMDE6b3NzOi8vZXhhbXBsZWJ1Y2tldC9zYW1wbGVvYmplY3QxLmpwZw==`
     */
    NextToken: string;
    /**
     * 本次返回的任务列表长度。
     * @example `1`
     */
    MaxResults: string;
    /**
     * 任务信息列表。
     */
    Tasks: any[];
}
