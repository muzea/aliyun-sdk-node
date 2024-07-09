export interface SubmitAIImageAuditJobRequest {
    /**
     * 图片ID。
     * 上传图片到点播返回的图片唯一标识。
     * @example `f1aa3024aee64*****6dc8ca20dbc320`
     */
    "MediaId": string;
    /**
     * AI模板ID。可通过以下方式获取：
     * - 调用[添加AI模板](~~102930~~)接口添加AI模板时，AI模板ID为返回参数TemplateId的值。
     * - AI模板添加后，可调用[查询AI模板列表](~~102936~~)接口查询AI模板ID，为请求后返回参数TemplateId的值。
     * @example `a07a7f7d7d10eb9fd999e56ecc****`
     */
    "TemplateId": string;
    /**
     * 审核任务配置信息。
     * - 审核任务其他配置项，当前仅支持ResourceType字段，用于控制媒体文件类型，且可针对该类型调整审核标准和规则。
     * - ResourceType使用说明：只允许英文、数字、下划线。
     * >- ResourceType字段可以按照使用说明自定义。自定义后需要[填写宜搭信息](https://yida.alibaba-inc.com/o/ticketapply)提交到阿里云后台处理后才会生效。
     * >- 如需针对ResourceType调整审核标准和规则，您可以[填写宜搭信息](https://yida.alibaba-inc.com/o/ticketapply)申请技术支持。
     * @example `{"ResourceType":"****_short_video"}`
     */
    "MediaAuditConfiguration"?: string;
}
