export interface ListTemplatesResponse {
    /**
     * 请求ID。
     * @example `******11-DB8D-4A9A-875B-275798******`
     */
    RequestId: string;
    /**
     * 本次请求条件下的数据总量。
     * @example `100`
     */
    TotalCount: number;
    /**
     * 模板列表。
     */
    Templates: {
        /**
         * 模板ID。
         * @example `****20b48fb04483915d4f2cd8ac****`
         */
        TemplateId: string;
        /**
         * 模板名称。
         * @example `云剪辑模板`
         */
        Name: string;
        /**
         * 模板类型。
         * @example `Timeline`
         */
        Type: string;
        /**
         * 模板配置。
         * @example `参考Timeline模板配置详解`
         */
        Config: string;
        /**
         * 预览素材。
         * @example `****20b48fb04483915d4f2cd8ac****`
         */
        PreviewMedia: string;
        /**
         * 模板状态。
         * @example `Available`
         */
        Status: string;
        /**
         * 创建来源。
         * @example `OpenAPI`
         */
        CreateSource: string;
        /**
         * 修改来源。
         * @example `OpenAPI`
         */
        ModifiedSource: string;
        /**
         * 预览素材状态。
         * @example `Normal`
         */
        PreviewMediaStatus: string;
        /**
         * 创建时间。
         * @example `2020-12-26T04:11:10Z`
         */
        CreationTime: string;
        /**
         * 修改时间。
         * @example `2020-12-26T04:11:10Z`
         */
        ModifiedTime: string;
        /**
         * 封面URL。
         * @example `http://example-bucket.oss-cn-shanghai.aliyuncs.com/cover.jpg`
         */
        CoverURL: string;
        /**
         * 剪辑参数。
         * @example `{"Media1":"mediaId","Text1":"text"}`
         */
        ClipsParam: string;
    }[];
}
