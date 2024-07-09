export interface RefreshUploadVideoRequest {
    /**
     * 音/视频ID。可通过以下方式获取：
     * - 通过控制台上传的视频，可登录[点播控制台](https://vod.console.aliyun.com)，选择**媒资库** > **音/视频**查看音频或视频ID。
     * - 通过[CreateUploadVideo](~~55407~~)接口上传音频或视频时，音/视频ID为返回参数VideoId的值。
     * - 音频或视频上传后，可通过[SearchMedia](~~86044~~)接口查询音/视频ID，为请求后返回参数VideoId的值。
     * @example `c6a23a870c8c4ffcd40cbd381333****`
     */
    "VideoId": string;
}
