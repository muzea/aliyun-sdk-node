export interface DeleteMultipartUploadRequest {
    /**
     * 媒体ID，即音/视频ID（VideoId）。可通过以下方式获取：
     * - 通过控制台上传的音/视频，可登录[点播控制台](https://vod.console.aliyun.com)，选择**媒资库** > **音/视频**查看音/视频ID。
     * - 通过[获取视频上传地址和凭证](~~55407~~)接口获取上传地址和凭证时，音/视频ID为返回参数VideoId的值。
     * - 音/视频上传后，可通过[搜索媒体信息](~~86044~~)接口查询音/视频ID，为请求后返回参数VideoId的值。
     * @example `61ccbdb06fa3012be4d8083f6****`
     */
    "MediaId": string;
    /**
     * 媒体类型。取固定值：**video**（音/视频）。
     * @example `video`
     */
    "MediaType": string;
}
