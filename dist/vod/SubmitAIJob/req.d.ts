export interface SubmitAIJobRequest {
    /**
     * 视频ID。可通过以下方式获取：
     * - 通过控制台上传的视频，可登录[点播控制台](https://vod.console.aliyun.com)，选择**媒资库** > **音/视频**查看视频ID。
     * - 通过[获取视频上传地址和凭证](~~55407~~)接口获取上传地址和凭证时，视频ID为返回参数VideoId的值。
     * - 视频上传后，可通过[搜索媒体信息](~~86044~~)接口查询视频ID，为请求后返回参数VideoId的值。
     * @example `3D3D12340d9401fab46a0b847****`
     */
    "MediaId"?: string;
    /**
     * AI作业类型。多个作业类型之间用半角逗号（,）分隔。取值：
     * - **AIMediaDNA**：视频DNA。
     * - **AIVideoTag**：智能标签。
     * @example `AIVideoTag`
     */
    "Types"?: string;
    /**
     * AI作业配置，JSON格式。
     * - 当`Types`设置为`AIVideoTag`时，`Config`支持配置`AnalyseTypes`，设置智能标签作业分析算法的类型，取值如下：
     *   - ASR：语音识别，从视频的⾳频语⾳中识别出标签 。
     *   - OCR：图文识别，从视频的图像⽂字中识别出标签 。
     * - 当`Types`设置为`AIMediaDNA`时，`Config`支持配置`DNADBId`，设置DNA指纹库ID，用于指定视频DNA作业的指纹库。
     * @example `{"AIVideoTag": {"AnalyseTypes": "ASR"} }`
     */
    "Config"?: string;
    /**
     * 自定义设置，为JSON字符串。参数结构详情参考[UserData](~~86952#h2--userdata-div-id-userdata-div-3~~)。
     * @example `{"Extend":{"localId":"***","test":"www"}}`
     */
    "UserData"?: string;
}
