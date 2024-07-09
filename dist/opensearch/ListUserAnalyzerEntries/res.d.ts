export interface ListUserAnalyzerEntriesResponse {
    /**
     * Object	自定义分析器词条
     * 参考：UserAnalyzerEntry
     * @example `[
    {
        "cmd": "add",
        "key": "kevintest",
        "value": "kevin test",
        "created": 1536690285,
        "updated": 1537348987,
        "status": "ACTIVE",
        "splitEnabled": true
    }
    ]`
     */
    result: any;
    /**
     * 请求ID
     * @example `516A02B7-2167-8D92-12D0-B639A2A0F3C5`
     */
    RequestId: string;
}
