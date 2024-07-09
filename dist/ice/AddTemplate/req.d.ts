export interface AddTemplateRequest {
    /**
     * 自定义模板名称。
     * @example `模板名称`
     */
    "Name"?: string;
    /**
     * 模板类型，目前支持：
     * - Timeline：基于视频剪辑工程的Timeline（时间线内多个素材，多图层形式进行前后拼接）创建的模板，可实现图文转视频、图片相册、片头片尾、默认水印等效果。
     * - VETemplate：基于AE（Adobe After Effects）特效创建的模板，可实现复杂动效样式的高级媒体效果。
     * @example `Timeline`
     */
    "Type"?: string;
    /**
     * - 普通模板Config是基于云剪辑Timeline的封装，自定义模板Config会更加灵活。如果您有特殊需求，建议熟悉Config结构并自定义模板，详情请参见[普通模板Config详解](~~456193~~)。
     * - 更多模板Config示例，请参见[常见普通模板Config示例](~~451634~~)。
     * @example `参见Timeline模板Config文档`
     */
    "Config"?: string;
    /**
     * 模板封面
     * @example `http://example-bucket.oss-cn-shanghai.aliyuncs.com/cover.jpg`
     */
    "CoverUrl"?: string;
    /**
     * 模板预览视频MediaId
     * @example `****01bf24bf41c78b2754cb3187****`
     */
    "PreviewMedia"?: string;
    /**
     * 模板状态，取值范围：
     * - Available
     * - Created
     * - Uploading
     * - Processing
     * - UploadFailed
     * - ProcessFailed
     * @example `Available`
     */
    "Status"?: string;
    /**
     * 模板创建来源，取值范围：
     * - OpenAPI
     * - AliyunConsole
     * - WebSDK
     * @example `OpenAPI`
     */
    "Source"?: string;
    /**
     * 模板关联素材，普通模板编辑器使用
     * @example `{"video":["1805a0c6ca544fb395a06ca683619655"]}`
     */
    "RelatedMediaids"?: string;
}
