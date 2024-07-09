export interface GetUploadDetailsRequest {
    /**
     * 媒体ID，即音/视频ID（VideoId）。多个ID之间使用半角逗号（,）分隔，最多支持20个。可通过以下方式获取：
     * - 通过控制台上传的音/视频，可登录[点播控制台](https://vod.console.aliyun.com)，选择**媒资库** > **音/视频**查看音/视频ID。
     * - 通过[获取音视频上传地址和凭证](~~55407~~)接口获取上传地址和凭证时，为返回参数VideoId的值。
     * - 音/视频上传后，可通过[搜索媒体信息](~~86044~~)接口查询，为请求后返回参数VideoId的值。
     * @example `61ccbdb06fa83012be4d8083f6****,7d2fbc380b0e08e55f****`
     */
    "MediaIds": string;
    /**
     * 媒体类型。取固定值：**video**（音/视频）。
     * @example `video`
     */
    "MediaType"?: string;
}
