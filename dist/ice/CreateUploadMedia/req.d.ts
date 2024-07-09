export interface CreateUploadMediaRequest {
    /**
     * 应用ID。默认取值：app-1000000。
     * @example `app-1000000`
     */
    "AppId"?: string;
    /**
     * 实体 ID。可调用CreateEntity接口创建实体，自定义动态元数据结构。
     * @example `9e177cac2fb44f8b8c67b199fcc7bffd`
     */
    "EntityId"?: string;
    /**
     * 文件信息，JSON类型，包含参数字段：
     * - Type（必填）：文件类型，取值video、image、audio、text、other。
     * - Name（必填）：文件名，不带扩展名。
     * - Size（选填）：文件大小。
     * - Ext（必填）：文件扩展名。
     * @example `{\"Type\":\"video\",\"Name\":\"test\",\"Size\":108078336,\"Ext\":\"mp4\"}`
     */
    "FileInfo"?: string;
    /**
     * 自定义设置。为JSON字符串，支持消息回调等设置。
     * @example `{"MessageCallback":{"CallbackURL":"http://example.aliyundoc.com"},"Extend":{"localId":"*****","test":"www"}}`
     */
    "UserData"?: string;
    /**
     * 目标存储地址。
     * StorageType 取值：仅支持oss。
     * StorageLocation 仅支持VOD点播存储，不支持用户自有OSS存储。
     * @example `{\"StorageType\":\"oss\",\"StorageLocation\":\"outin-***.oss-cn-shanghai.aliyuncs.com\"}`
     */
    "UploadTargetConfig"?: string;
    /**
     * 上传媒资的元数据，JSON格式。
     * Title  标题（必填）：
     * - 长度不超过128个字符。
     * - UTF-8编码。
     * Description  描述（选填）：
     * - 长度不超过1024个字符。
     * - UTF-8编码。
     * CateId 分类ID（选填）。
     * Tags 标签（选填）。
     * BusinessType  业务类型（必填），取值：
     * - Type = video ，取值：
     * opening： 片头/开场；ending： 片尾
     * - Type =  image ，取值：
     *   default：默认；
     *   cover：封面
     * - Type = text ，取值：
     *   subtitles：字幕；
     *   font：字体；
     * - Type=material ，取值：
     *   watermark：水印；
     * - general 通用；
     * CoverURL 封面（选填）。
     * DynamicMetaData 动态元数据，类型为字符串。
     * @example `{\"Title\": \"UploadTest\", \"Description\": \"UploadImageTest\", \"Tags\": \"tag1,tag2\",\"BusinessType\":\"cover\"}`
     */
    "MediaMetaData"?: string;
    /**
     * Type = video  || audio  有上传后处理动作。
     * ProcessType取值：Workflow。
     * @example `{\"ProcessType\":\"Workflow\",\"ProcessID\":\"74ba870f1a4873a3ba238e0bf6fa9***\"}`
     */
    "PostProcessConfig"?: string;
}
