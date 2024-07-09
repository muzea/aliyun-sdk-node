export interface ListTriggersResponse {
    /**
     * 触发器列表
     */
    Triggers: any[];
    /**
     * 翻页标记。
     * 当文件总数大于设置的MaxResults时，用于翻页的Token。从NextToken开始按字典序返回文件信息列表。
     * 第一次调用此接口时，设置为空。
     * @example `MTIzNDU2Nzg6aW1tdGVzdDpleGFtcGxlYnVja2V0OmRhdGFzZXQwMDE6b3NzOi8vZXhhbXBsZWJ1Y2tldC9zYW1wbGVvYmplY3QxLmpwZw==`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `F480BFAF-E778-5079-93AD-1E4631******`
     */
    RequestId: string;
}
