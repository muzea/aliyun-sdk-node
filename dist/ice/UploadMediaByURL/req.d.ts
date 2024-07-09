export interface UploadMediaByURLRequest {
    /**
     * 媒体源文件URL。
     * - URL中需要包括扩展名, 比如`https://****.mp4`中mp4为扩展名。
     *     - 如果URL中不包含扩展名，可以在`UploadMetadatas`中传入`FileExtension`来指定。
     *     - 如果URL中有扩展名且同时传入`FileExtension`，以传入的`FileExtension`为准。
     * - URL编码，多个地址之间以半角逗号（,）分隔，最多支持20个。
     * - 避免存在特殊字符导致无法上传视频，需要URL编码后再做逗号拼接。
     * @example `https://diffurl.mp4`
     */
    "UploadURLs"?: string;
    /**
     * 应用ID。
     * @example `app-1000000`
     */
    "AppId"?: string;
    /**
     * 自定义设置。为JSON字符串，支持消息回调等设置。
     * @example `{"MessageCallback":{"CallbackURL":"http://example.aliyundoc.com"},"Extend":{"localId":"xxx","test":"www"}}`
     */
    "UserData"?: string;
    /**
     * 目标存储地址。
     * StorageType 取值：仅支持oss。
     * StorageLocation 仅支持VOD点播存储，不支持用户自有OSS存储。
     * @example `{"StorageType":"oss","StorageLocation":"outin-***.oss-cn-shanghai.aliyuncs.com"}`
     */
    "UploadTargetConfig"?: string;
    /**
     * 上传媒体文件的元数据信息，为JSON字符串。
     * - 与UploadURLs里的URL匹配才能生效。
     * - JSON格式：[UploadMetadata, UploadMetadata,…]，需转为JSON字符串 。
     * - 更多信息，请参见下表UploadMetadata。
     * @example `[{"SourceURL":"https://example.aliyundoc.com/video01.mp4","Title":"urlUploadTest"}]`
     */
    "MediaMetaData"?: string;
    /**
     * Type = video  || audio  有上传后处理动作。
     * ProcessType取值：Workflow。
     * @example `{"ProcessType": "Workflow","ProcessID":"b72a06c6beeb4dcdb898feef067b1***"}`
     */
    "PostProcessConfig"?: string;
    /**
     * 实体 ID。可调用CreateEntity接口创建实体，自定义动态元数据结构。
     * @example `d67281da3c8743b8823ad12976187***`
     */
    "EntityId"?: string;
}
