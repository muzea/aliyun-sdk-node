export interface UpdateMediaCoverRequest {
    /**
     * 需要更新封面的媒体ID。可以从[新增媒体](~~44458~~)的返回参数中获取，也可以登录媒体处理控制台，通过**媒体管理** > **媒体列表**找到目标视频，单击**管理**，从目标视频的基础信息页签获取。
     * @example `6cc3aa66d1cb4bb2adf14e726c0a****`
     */
    "MediaId": string;
    /**
     * 媒体封面。URL遵循RFC 2396（UTF8编码），最大3200字节。
     * > CoverURL通过OSS Bucket中的图片URL获取，取问号之前的部分。目前仅支持HTTP协议。
     * @example `http://example-bucket-****.oss-cn-hangzhou.aliyuncs.com//example-****.mp4`
     */
    "CoverURL"?: string;
}
