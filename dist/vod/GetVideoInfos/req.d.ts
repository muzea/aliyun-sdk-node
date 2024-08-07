export interface GetVideoInfosRequest {
    /**
     * 音/视频ID列表。多个ID之间使用半角逗号（,）分隔，最多支持20个。可通过以下方式获取音/视频ID：
     * - 通过控制台上传的视频，可登录[点播控制台](https://vod.console.aliyun.com)，选择**媒资库** > **音/视频**查看音/视频ID。
     * - 通过[获取视频上传地址和凭证](~~55407~~)接口获取上传地址和凭证时，音/视频ID为返回参数VideoId的值。
     * - 音/视频上传后，可通过[搜索媒体信息](~~86044~~)接口查询音/视频ID，为请求后返回参数VideoId的值。
     * @example `7753d144efd8e649c6c45fe0579****,7753d144efd74d6c45fe0570****`
     */
    "VideoIds": string;
}
