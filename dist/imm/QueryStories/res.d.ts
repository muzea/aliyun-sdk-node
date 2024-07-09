export interface QueryStoriesResponse {
    /**
     * 当次请求的Request ID。
     * @example `2C5C1E0F-D8B8-4DA0-8127-EC32C771****`
     */
    RequestId: string;
    /**
     * 查询的故事列表。
     */
    Stories: any[];
    /**
     * 表示当前调用返回读取到的位置，空代表数据已经读取完毕。
     * @example `MTIzNDU2Nzg6aW1tdGVzdDpleGFtcGxlYnVja2V0OmRhdGFzZXQwMDE6b3NzOi8vZXhhbXBsZWJ1Y2tldC9zYW1wbGVvYmplY3Qx****`
     */
    NextToken: string;
}
