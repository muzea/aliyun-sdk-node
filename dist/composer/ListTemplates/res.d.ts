export interface ListTemplatesResponse {
    /**
     * 模板总数
     * @example `10`
     */
    TotalCount: number;
    /**
     * 本次请求唯一标识符
     * @example `ADB97A33-50E7-48A5-963D-ACBAE36D0BEC`
     */
    RequestId: string;
    /**
     * 模板列表
     */
    Templates: {
        /**
         * 模板最后更新时间
         * @example `2020-08-19T03:31:32.415Z`
         */
        UpdateTime: string;
        /**
         * 模板概述，为 JSON 字符串
         * @example `[]`
         */
        TemplateOverview: string;
        /**
         * 模板里用到的连接器列表，多个以英文逗号分隔
         * @example `oss,rds`
         */
        TemplateConnector: string;
        /**
         * 模板创建时间
         * @example `2020-08-19T03:31:32.415Z`
         */
        CreateTime: string;
        /**
         * 英文版的简介
         * @example `This is a test template`
         */
        TemplateSummaryEn: string;
        /**
         * 模板名称
         * @example `测试模板`
         */
        TemplateName: string;
        /**
         * 模板版本，为从 0 递增的数字
         * @example `0`
         */
        TemplateVersion: number;
        /**
         * 模板语言，目前支持中文zh和英文en两种
         * @example `zh`
         */
        TemplateLocale: string;
        /**
         * 模板发布者
         * @example `逻辑编排`
         */
        TemplateCreator: string;
        /**
         * 模板的描述
         * @example `这是一个测试用的模板`
         */
        TemplateDescription: string;
        /**
         * 模板标签
         * @example `finance`
         */
        TemplateTag: string;
        /**
         * 模板简要介绍
         * @example `测试模板的简介`
         */
        TemplateSummary: string;
        /**
         * 模板 ID
         * @example `tp-uf6tbvhheciyxl`
         */
        TemplateId: string;
    }[];
}
