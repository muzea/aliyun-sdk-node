export interface GetSnapshotUrlsResponse {
    /**
     * 请求ID
     * @example `******11-DB8D-4A9A-875B-275798******`
     */
    RequestId: string;
    /**
     * 截图总数量
     * @example `30`
     */
    Total: number;
    /**
     * 截图URL列表
     */
    SnapshotUrls: string[];
    /**
     * WebVTT文件URL
     * @example `http://test-bucket.oss-cn-shanghai.aliyuncs.com/ouoput.vtt`
     */
    WebVTTUrl: string;
}
