export interface SubmitAIMediaAuditJobRequest {
    /**
     * 音/视频ID。可登录[点播控制台](https://vod.console.aliyun.com)，选择**审核管理** > **视频审核**查看音/视频ID。
     * @example `fe028d09441afffb138cd7ee****`
     */
    "MediaId": string;
    /**
     * AI模板ID。可通过以下方式获取：
     * - 调用[添加AI模板](~~102930~~)接口添加AI模板时，AI模板ID为返回参数TemplateId的值。
     * - AI模板添加后，可调用[查询AI模板列表](~~102936~~)接口查询AI模板ID，为请求后返回参数TemplateId的值。
     * > 不指定AI模板ID时，则使用智能审核默认AI模板ID。
     * @example `a07a7f7d7d10eb9fd999e56ecc****`
     */
    "TemplateId"?: string;
    /**
     * 自定义设置。为JSON字符串，支持消息回调等设置。更多详情，请参见[UserData](~~86952~~)。
     * > 此参数中消息回调的使用前提是需要在控制台配置HTTP回调地址和勾选对应的回调事件类型才能使用，否则回调设置不生效。控制台配置HTTP回调的操作，请参考[回调设置](~~86071~~)。
     * @example `{"MessageCallback":{"CallbackURL":"http://test.test.com"},"Extend":{"localId":"xxx","test":"www"}}`
     */
    "UserData"?: string;
    /**
     * 媒体类型。目前仅支持：**video**。
     * @example `video`
     */
    "MediaType"?: string;
    /**
     * 审核任务配置信息。
     * - 审核任务其他配置项，当前仅支持ResourceType字段，用于控制媒体文件类型，且可针对该类型调整审核标准和规则。
     * - 需要针对ResourceType调整审核标准和规则，请提交工单获取技术支持，关于如何提交工单，请参见[联系我们](~~464625~~)。
     * - ResourceType使用说明：只允许英文、数字、下划线。
     * @example `{"ResourceType":"****_movie"}`
     */
    "MediaAuditConfiguration"?: string;
}
