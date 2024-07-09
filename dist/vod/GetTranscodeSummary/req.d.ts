export interface GetTranscodeSummaryRequest {
    /**
     * 音/视频ID。最多支持10个ID，多个ID之间使用半角逗号（,）分隔。音/视频ID可通过以下方式获取：
     * - 通过控制台上传的音/视频，可登录[点播控制台](https://vod.console.aliyun.com)，选择**媒资库** > **音/视频**查看音/视频ID。
     * - 通过[CreateUploadVideo](~~55407~~)接口获取上传地址和凭证时，音/视频ID为返回参数VideoId的值。
     * - 音/视频上传后，可通过[SearchMedia](~~86044~~)接口查询音/视频ID，为请求后返回参数VideoId的值。
     * @example `"d4860fcc6ae9fed52e8938244****,e1db68cc586644b83e562bcd94****,hhhhhhh"`
     */
    "VideoIds": string;
}
