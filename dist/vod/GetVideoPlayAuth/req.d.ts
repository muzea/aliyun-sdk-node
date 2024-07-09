export interface GetVideoPlayAuthRequest {
    /**
     * 音/视频ID，仅支持传入单个音/视频ID。可通过以下方式获取：
     * - 通过控制台上传的视频，可登录[点播控制台](https://vod.console.aliyun.com)，选择**媒资库** > **音/视频**查看音/视频ID。
     * - 通过[CreateUploadVideo](~~55407~~)接口上传音/视频时，音/视频ID为返回参数VideoId的值。
     * - 音/视频上传后，可通过[SearchMedia](~~86044~~)接口查询音/视频ID，为请求后返回参数VideoId的值。
     * @example `dfde02284a5c46622a097adaf44a****`
     */
    "VideoId": string;
    /**
     * 播放凭证过期时间，单位：**秒**。如果凭证过期则无法获取播放地址，需要重新获取凭证。
     * - 默认为**100**秒。
     * - 取值范围：`[100,3000]`。
     * @example `100`
     */
    "AuthInfoTimeout"?: number;
    /**
     * API版本号，固定取值为**1.0.0**。
     * @example `1.0.0`
     */
    "ApiVersion"?: string;
}
