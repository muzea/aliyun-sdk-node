export interface SubmitDynamicImageJobRequest {
    /**
     * 视频ID。可通过以下方式获取：
     * - 通过控制台上传的视频，可登录[点播控制台](https://vod.console.aliyun.com)，选择**媒资库** > **音/视频**查看视频ID。
     * - 通过[获取视频上传地址和凭证](~~55407~~)接口获取上传地址和凭证时，视频ID为返回参数VideoId的值。
     * - 视频上传后，可通过[搜索媒体信息](~~86044~~)接口查询视频ID，为请求后返回参数VideoId的值。
     * @example `7d2fbc3e273441bdb0e08e55f8****`
     */
    "VideoId": string;
    /**
     * 动图模板ID。
     * @example `1a443dc52ef10abc4794d700*****`
     */
    "DynamicImageTemplateId": string;
    /**
     * 覆盖参数（JSON字符串）。具体详情，请参见[OverrideParams](~~98618~~)。支持对动图模板配置中的参数进行覆盖。具体内容，请参见[DynamicImageTemplateConfig](~~52839~~)。
     * @example `{"Watermarks":[{"Content":"UserID: 666**","WatermarkId":"8ca03c884944bd05efccc312367****"}]}`
     */
    "OverrideParams"?: string;
}
