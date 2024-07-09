export interface UpdateTemplateRequest {
    /**
     * 云剪辑模板ID。可通过[智能媒体服务控制台](https://ice.console.aliyun.com/production/template/list/common)或[创建模板](~~441161~~)的返回参数中获取。
     * @example `23923ec3318f4c359e42e1e5b296****`
     */
    "TemplateId"?: string;
    /**
     * 云剪辑模板名称。
     * @example `云剪辑模板1`
     */
    "Name"?: string;
    /**
     * 模板配置。详细说明请参见[普通模板Config详解](~~456193~~)。
     * @example `{
        "VideoTracks": [
            {
                "VideoTrackClips": [
                    {
                        "Sys_Type" : "ArrayItems",
                        "Sys_ArrayObject" : "$VideoArray",
                        "Sys_Template" : {
                            "MediaId" : "$MediaId"
                        }
                    }
                ]
            }
        ]
    }`
     */
    "Config"?: string;
    /**
     * 模板封面地址。
     * @example `http://example-bucket.oss-cn-shanghai.aliyuncs.com/cover.jpg`
     */
    "CoverUrl"?: string;
    /**
     * 预览视频媒资ID。
     * @example `1ae320b48fb04483915d4f2cd8ac****`
     */
    "PreviewMedia"?: string;
    /**
     * 模板状态，取值范围：
     * - Available：正常。
     * - Created：已创建，还不能使用。
     * - Uploading：上传中。
     * - Processing：高级模板分析中。
     * - UploadFailed：上传失败。
     * - ProcessFailed：高级模板分析失败。
     * > 高级模板创建后有解析时间，状态为Processing，此时模板不可用，当模板状态为Available方可使用。模板解析时间与模板文件大小有关，一般10s-5min。
     * @example `Available`
     */
    "Status"?: string;
    /**
     * 修改来源，默认OpenAPI，取值范围：
     * - AliyunConsole：通过阿里云控制台创建。
     * - OpenAPI：通过OpenAPI创建。
     * - WebSDK：通过WebSDK创建。
     * @example `OpenAPI`
     */
    "Source"?: string;
    /**
     * 模板关联素材，普通模板编辑器使用。
     * @example `{"video":["f64c6acc840247edb6b12f575c66****","9675dcf040ba4525bb037c29d156****"],"audio":["62a54019d9114009a5ae9bcfd70b****"],"image":["743ffbeb7e004c758cdc1fb34c04****"]}`
     */
    "RelatedMediaids"?: string;
}
