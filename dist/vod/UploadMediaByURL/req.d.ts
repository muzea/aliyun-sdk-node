export interface UploadMediaByURLRequest {
    /**
     * 媒体源文件URL。
     * - URL中需要包括扩展名, 比如`https://****.mp4`中mp4为扩展名。
     *     - 如果URL中不包含扩展名，可以在`UploadMetadatas`中传入`FileExtension`来指定。
     *     - 如果URL中有扩展名且同时传入`FileExtension`，以传入的`FileExtension`为准。
     *     - 指定支持的扩展名，请参见[上传概述](~~55396~~)。
     * - URL编码，多个地址之间以半角逗号（,）分隔，最多支持20个。
     * - 避免存在特殊字符导致无法上传视频，需要URL编码后再做逗号拼接。
     * @example `https://****.mp4`
     */
    "UploadURLs": string;
    /**
     * 转码模板组ID。可通过以下方式获取：
     * - 登录[点播控制台](https://vod.console.aliyun.com)，选择**配置管理** > **媒体处理配置** > **转码模板组**查看转码模版组ID。
     * - 通过[创建转码模板组](~~102665~~)接口创建转码模板组时，转码模板组ID为返回参数TranscodeTemplateGroupId的值。
     * - 通过[查询转码配置列表](~~102669~~)接口查询转码模板组时，为请求后返回参数TranscodeTemplateGroupId的值。
     * >- 不设置转码模板组ID，则按默认的转码模板组进行转码；设置了转码模板组ID时，会使用该指定的模板组进行转码。
     * >- 可以在`UploadMetadatas`中进行设置，如果在UploadMetadatas中设置了TemplateGroupId，此处也设置了TemplateGroupId，则以UploadMetadatas中设置的TemplateGroupId为准。
     * @example `ca3a8f6e4957b65806709586****`
     */
    "TemplateGroupId"?: string;
    /**
     * 媒体文件存储地址。
     * 登录[点播控制台](https://vod.console.aliyun.com/?spm=a2c4g.11186623.2.15.6948257eaZ4m54#/vod/settings/censored)，选择**配置管理** > **媒资管理配置** > **存储管理**查看存储地址。不指定时会使用默认存储地址。
     * @example `outin-bfefbb90a47c******163e1c7426.oss-cn-shanghai.aliyuncs.com`
     */
    "StorageLocation"?: string;
    /**
     * 上传媒体文件的元数据信息，为JSON字符串。
     * - 与UploadURLs里的URL匹配才能生效。
     * - JSON格式：`[UploadMetadata, UploadMetadata,…]`，需转为JSON字符串 。
     * - 更多信息，请参见下表**UploadMetadata**。
     * @example `[{"SourceURL":"https://example.aliyundoc.com/video01.mp4","Title":"urlUploadTest"}]`
     */
    "UploadMetadatas"?: string;
    /**
     * 自定义设置。为JSON字符串，支持消息回调、上传加速等设置。更多信息，请参见[UserData](~~86952#UserData~~)。
     * > - 此参数中消息回调的使用前提是需要在控制台配置HTTP回调地址和勾选对应的回调事件类型才能使用，否则回调设置不生效。控制台配置HTTP回调的操作，请参考[回调设置](~~86071~~)。
     * > - 如需使用上传加速功能，您需要提交工单申请开通，更多信息，请参见[上传相关说明](~~55396~~)。关于如何提交工单，请参见[联系我们](~~464625~~)。
     * @example `{"MessageCallback":{"CallbackURL":"http://example.aliyundoc.com"},"Extend":{"localId":"xxx","test":"www"}}`
     */
    "UserData"?: string;
    /**
     * 应用ID。默认取值：**app-1000000**。 更多信息，请参见[多应用](~~113600~~)。
     * @example `app-****`
     */
    "AppId"?: string;
    /**
     * 工作流ID。可登录[点播控制台](https://vod.console.aliyun.com)，选择**配置管理** > **媒体处理配置** > **工作流管理**查看工作流ID。
     * > 如果同时传递了WorkflowId和TemplateGroupId，以WorkflowId为准。使用说明，请参见[工作流](~~115347~~)。
     * @example `e1e243b42548248197d6f74f9****`
     */
    "WorkflowId"?: string;
    /**
     * 自定义去重识别码，如果传递了该参数请求，当检测到在过去10分钟内曾有过相同识别码的请求，则会在本次请求时返回错误。
     * 该去重识别码由您自定义设置，长度最长为50个字符，支持大小写英文字母、数字、短划线（-）和下划线（_），不传或者带空字符串表示不去重。
     * @example `5c62d40299034bbaa4c195da330****`
     */
    "SessionId"?: string;
}
