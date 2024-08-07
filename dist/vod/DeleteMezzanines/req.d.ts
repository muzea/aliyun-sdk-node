export interface DeleteMezzaninesRequest {
    /**
     * 待删除源文件的音/视频ID列表。一次最多支持20个音/视频ID，多个ID之间用半角逗号（,）分隔。可通过以下方式获取：
     * - 通过控制台上传的音/视频，可登录[点播控制台](https://vod.console.aliyun.com)，选择**媒资库** > **音/视频**查看音/视频ID。
     * - 通过[获取视频上传地址和凭证](~~55407~~)接口获取上传地址和凭证时，音/视频ID为返回参数VideoId的值。
     * - 音/视频上传后，可通过[搜索媒体信息](~~86044~~)接口查询音/视频ID，为请求后返回参数VideoId的值。
     * @example `23ab850b4f654b6e91d24d8157****,93ab850b4f6f4b6e91d24d81d4****`
     */
    "VideoIds": string;
    /**
     * 是否强制删除源文件，取值：
     * - **false**：否，默认值。
     * - **true**：是。
     * > 当视频转码模式为不转码或异步转码时，由于源文件会作为原画用于播放，默认不可删除该视频的源文件，此时，若需要强制删除该视频的源文件，可将本参数设置为**true**。
     * @example `false`
     */
    "Force"?: boolean;
}
