export interface GetTemplateMaterialsResponse {
    /**
     * 请求ID。
     * @example `******11-DB8D-4A9A-875B-275798******`
     */
    RequestId: string;
    /**
     * 关联素材地址。
     * @example `{"music.mp3":"https://bucket.oss-cn-shanghai.aliyuncs.com/music.mp3?sign=xxx","config.json":"https://bucket.oss-cn-shanghai.aliyuncs.com/config.json?sign=xxx","assets/1.jpg":"https://bucket.oss-cn-shanghai.aliyuncs.com/assets/1.jpg?sign=xxx"}`
     */
    MaterialUrls: string;
}
