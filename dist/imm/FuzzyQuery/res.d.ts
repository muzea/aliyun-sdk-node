export interface FuzzyQueryResponse {
    /**
     * 当文件总数大于设置的MaxResults时，用于翻页的Token。
     * 下一次列出文件信息时以此值为NextToken，将未返回的结果返回。
     * 当文件未全部返回时，此参数才有值。
     * @example `MTIzNDU2Nzg6aW1tdGVzdDpleGFtcGxlYnVja2V0OmRhdGFzZXQwMDE6b3NzOi8vZXhhbXBsZWJ1Y2tldC9zYW1wbGVvYmplY3QxLmpwZw==`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `1B3D5E0A-D8B8-4DA0-8127-ED32C851****`
     */
    RequestId: string;
    /**
     * 文件信息列表。
     */
    Files: any[];
    /**
     * 命中的记录数。
     */
    TotalHits: number;
}
