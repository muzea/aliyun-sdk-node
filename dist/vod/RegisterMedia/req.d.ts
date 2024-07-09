export interface RegisterMediaRequest {
    /**
     * 注册媒资元数据。为JSON字符串，一次最多支持设置10个媒资元数据。参数结构的更多信息，请参见下表**RegisterMetadata**。
     * @example `[{"FileURL":"https://****.oss-cn-shanghai.aliyuncs.com/video/test/video123.m3u8","Title":"VideoName"}]`
     */
    "RegisterMetadatas": string;
    /**
     * 转码模板组ID。可通过以下方式获取：
     * - 登录[点播控制台](https://vod.console.aliyun.com)，选择**配置管理** > **媒体处理配置** > **转码模板组**查看转码模版组ID。
     * - 通过[创建转码模板组](~~102665~~)接口创建转码模板组时，转码模板组ID为返回参数TranscodeTemplateGroupId的值。
     * - 通过[查询转码配置列表](~~102669~~)接口查询转码模板组时，为请求后返回参数TranscodeTemplateGroupId的值。
     * > - 如果不需要转码无转码，请指定TemplateGroupId为VOD\_NO\_TRANSCODE（不转码模板组），否则视频会出现异常。如果需要转码，则指定转码模板组ID。
     * > - 如果同时传递了WorkflowId和TemplateGroupId，以WorkflowId为准。使用说明，请参见[工作流](~~115347~~)。
     * @example `ca3a8f6e49c87b65806709586****`
     */
    "TemplateGroupId"?: string;
    /**
     * 自定义设置。为JSON字符串，支持消息回调等设置。参数详情，请参见[UserData](~~86952#section_6fg_qll_v3w~~)。
     * >本接口不支持回调，即便此参数中设置了消息回调，在媒资注册完成后也不会产生回调消息。当后续对注册完成的媒资发起转码、截图等媒体处理时，若在发起转码、截图时单独设置了UserData中的消息回调，则优先使用那个回调地址；未设置，则使用此处注册媒资时UserData中设置的回调地址。
     * @example `{"Extend":{"localId":"****","test":"www"}}`
     */
    "UserData"?: string;
    /**
     * 工作流ID。可登录[点播控制台](https://vod.console.aliyun.com)，选择**配置管理** > **媒体处理配置** > **工作流管理**查看工作流ID。
     * > 如果同时传递了WorkflowId和TemplateGroupId，以WorkflowId为准。使用说明，请参见[工作流](~~115347~~)。
     * @example `637adc2b7ba51a83d841606f8****`
     */
    "WorkflowId"?: string;
}
