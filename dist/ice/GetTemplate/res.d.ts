export interface GetTemplateResponse {
    /**
     * 请求Id
     * @example `******11-DB8D-4A9A-875B-275798******`
     */
    RequestId: string;
    /**
     * 模板信息
     */
    Template: {
        /**
         * 模板ID
         * @example `****20b48fb04483915d4f2cd8ac****`
         */
        TemplateId: string;
        /**
         * 模板名称
         * @example `视频添加水印模板`
         */
        Name: string;
        /**
         * 模板类型，目前支持：
         * - Timeline
         * - VETemplate
         * @example `Timeline`
         */
        Type: string;
        /**
         * 模板配置
         * - 普通模板配置，参考[Timeline模板配置详解](https://help.aliyun.com/document_detail/277430.html)
         * - 高级模板配置，参考[创建高级模板](https://help.aliyun.com/document_detail/291418.html#title-3tf-skt-eoi)
         * @example `参考Timeline模板配置详解`
         */
        Config: string;
        /**
         * 预览素材
         * @example `****20b48fb04483915d4f2cd8ac****`
         */
        PreviewMedia: string;
        /**
         * 模板状态，取值范围
         * - Available
         * - Created
         * - Uploading
         * - Processing
         * - UploadFailed
         * - ProcessFailed
         * @example `Available`
         */
        Status: string;
        /**
         * 创建来源，取值范围：
         * - AliyunConsole
         * - OpenAPI
         * - WebSDK
         * @example `OpenAPI`
         */
        CreateSource: string;
        /**
         * 修改来源，取值范围：
         * - AliyunConsole
         * - OpenAPI
         * - WebSDK
         * @example `OpenAPI`
         */
        ModifiedSource: string;
        /**
         * 预览素材状态
         * - Init（初始状态：源文件未就绪）
         * - Preparing（源文件准备中：比如上传中或者剪辑合成中）
         * - PrepareFail（源文件准备失败：比如获取源文件信息失败）
         * - Normal（正常：源文件已就绪）
         * @example `Normal`
         */
        PreviewMediaStatus: string;
        /**
         * 创建时间
         * @example `2020-12-26T04:11:10Z`
         */
        CreationTime: string;
        /**
         * 修改时间
         * @example `2020-12-26T04:11:10Z`
         */
        ModifiedTime: string;
        /**
         * 封面URL
         * @example `http://example-bucket.oss-cn-shanghai.aliyuncs.com/cover.jpg`
         */
        CoverURL: string;
        /**
         * 提交合成任务的ClipsParam参数模板，可把mediaId和text换成真实的参数来提交合成任务。使用方式参考：
         * - [普通模版创建及使用](https://help.aliyun.com/document_detail/328557.html)
         * - [高级模板创建及使用](https://help.aliyun.com/document_detail/291418.html)
         * @example `{"Media1":"mediaId","Text1":"text"}`
         */
        ClipsParam: string;
        /**
         * 模板关联素材，普通模板编辑器使用
         * @example `{"video":["******c04f1d4a06996144cc1a******"],"audio":["******c04f1d4a06996144cc1a******"],"image":["******c04f1d4a06996144cc1a******"]}`
         */
        RelatedMediaids: string;
    };
}
