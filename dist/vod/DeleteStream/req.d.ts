export interface DeleteStreamRequest {
    /**
     * 媒体流转码的作业ID列表，由一个或多个JobId组成。
     * - 多个ID之间使用半角逗号（,）分隔，最多支持同一个视频下的20个作业ID。
     * - JobId可以通过[GetPlayInfo](~~56124~~)接口中返回的PlayInfo结构体中获取，每个媒体流对应的JobId不同。
     * @example `35eb4dbda18c49cc0025df374b46****`
     */
    "JobIds": string;
    /**
     * 视频ID。可通过以下方式获取：
     * - 通过控制台上传的视频，可登录[点播控制台](https://vod.console.aliyun.com)，选择**媒资库** > **音/视频**查看视频ID。
     * - 通过[CreateUploadVideo](~~55407~~)接口上传视频时，视频ID为返回参数VideoId的值。
     * - 视频上传后，可通过[SearchMedia](~~86044~~)接口查询视频ID，为请求后返回参数VideoId的值。
     * @example `95948ddba24446b6aed5db985e78****`
     */
    "VideoId": string;
}
