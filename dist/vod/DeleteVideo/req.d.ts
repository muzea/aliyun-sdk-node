export interface DeleteVideoRequest {
    /**
     * 视频ID列表。由一个或多个视频ID组成，多个ID之间使用半角逗号（,）分隔。最多支持20个。视频ID可通过以下方式获取：
     * - 通过控制台上传的视频，可登录[点播控制台](https://vod.console.aliyun.com)，选择**媒资库** > **音/视频**查看视频ID。
     * - 通过[CreateUploadVideo](~~55407~~)接口上传视频时，视频ID为返回参数VideoId的值。
     * - 视频上传后，可通过[SearchMedia](~~86044~~)接口查询视频ID，为请求后返回参数VideoId的值。
     * @example `e44ebf1147hdsa2d2adbea8b****,e44ebf11oj984adbea8****,73ab850b4f6f4b6e91d24d81d54****`
     */
    "VideoIds": string;
}
