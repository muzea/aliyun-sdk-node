export interface SubmitAIImageJobRequest {
    /**
     * 视频ID。可通过以下方式获取：
     * - 通过控制台上传的视频，可登录[点播控制台](https://vod.console.aliyun.com)，选择**媒资库** > **音/视频**查看视频ID。
     * - 通过[CreateUploadVideo](~~55407~~)接口上传视频时，视频ID为返回参数VideoId的值。
     * - 视频上传后，可通过[SearchMedia](~~86044~~)接口查询视频ID，为请求后返回参数VideoId的值。
     * @example `357a8748c5774*****89d2726e6436aa`
     */
    "VideoId": string;
    /**
     * AI图片模板ID。可通过以下方式获取：
     * - 通过[AddAITemplate](~~102930~~)接口创建图片模板时，返回参数TemplateId的值。
     * - 模板创建后，可通过[ListAITemplate](~~102936~~)接口查询AI图片模板ID，为请求后返回参数TemplateId的值。
     * @example `ef1a8842cb9f*****cea80cad902e416`
     */
    "AITemplateId": string;
    /**
     * 自定义设置。
     * - 必须是JSON字符串。
     * - 需要包含MessageCallback或者Extend参数。
     * - 最大长度为512个字节。
     * 参数构造详情，请参见[UserData](~~86952~~)。
     * @example `{"Extend":{"localId":"****","test":"www"}}`
     */
    "UserData"?: string;
    /**
     * AI任务管道ID。
     * > 有默认ID，可不填写。如果需要批量导入，需要使用单独的任务管道，请提交工单申请配置或联系阿里云售后进行配置，关于如何提交工单，请参见[联系我们](~~464625~~)。
     * @example `6492025b8f*****6ba5bb755a33438`
     */
    "AIPipelineId"?: string;
}
