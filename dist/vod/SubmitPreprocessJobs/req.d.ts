export interface SubmitPreprocessJobsRequest {
    /**
     * 视频ID。可通过以下方式获取：
     * - 通过控制台上传的视频，可登录[点播控制台](https://vod.console.aliyun.com)，选择**媒资库** > **音/视频**查看视频ID。
     * - 通过[CreateUploadVideo](~~55407~~)接口上传视频时，视频ID为返回参数VideoId的值。
     * - 视频上传后，可通过[SearchMedia](~~86044~~)接口查询视频ID，为请求后返回参数VideoId的值。
     * @example `d3e680e618708efbf2cae7cc9312****`
     */
    "VideoId": string;
    /**
     * 预处理类型。取固定值：**LivePreprocess**（导播台视频预处理）。
     * @example `LivePreprocess`
     */
    "PreprocessType": string;
}
