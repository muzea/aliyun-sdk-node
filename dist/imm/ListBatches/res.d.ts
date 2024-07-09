export interface ListBatchesResponse {
    /**
     * 批处理任务列表。
     */
    Batches: any[];
    /**
     * 翻页标记。
     * 当文件总数大于设置的MaxResults时，用于翻页的Token。从NextToken开始按字典序返回文件信息列表。
     * 第一次调用此接口时，设置为空。
     * @example `MTIzNDU2Nzg6aW1tdGVzdDpleGFtcGxlYnVja2V0OmRhdGFzZXQwMDE6b3NzOi8vZXhhbXBsZWJ1Y2tldC9zYW1wbGVvYmplY3QxLmpw****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `FEDC9B1F-30F2-4C1F-8ED2-B7860187****`
     */
    RequestId: string;
}
