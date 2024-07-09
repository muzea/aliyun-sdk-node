export interface AddTemplateResponse {
    /**
     * Id of the request
     * @example `****2876-6263-4B75-8F2C-CD0F7FCF****`
     */
    RequestId: string;
    /**
     * 模板信息
     */
    Template: {
        /**
         * 模板Id
         * @example `****01bf24bf41c78b2754cb3187****`
         */
        TemplateId: string;
        /**
         * 模板名称
         * @example `模板名称`
         */
        Name: string;
        /**
         * 模板类型
         * @example `Timeline`
         */
        Type: string;
        /**
         * 参见Timeline模板Config文档
         * @example `参见Config文档`
         */
        Config: string;
        /**
         * 模板封面
         * @example `http://example-bucket.oss-cn-shanghai.aliyuncs.com/cover.jpg`
         */
        CoverUrl: string;
        /**
         * 预览视频媒资id
         * @example `****01bf24bf41c78b2754cb3187****`
         */
        PreviewMedia: string;
        /**
         * 模板状态
         * @example `Available`
         */
        Status: string;
        /**
         * 模板创建来源
         * @example `OpenAPI`
         */
        CreateSource: string;
        /**
         * 模板修改来源
         * @example `OpenAPI`
         */
        ModifiedSource: string;
    };
}
