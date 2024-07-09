export interface GetTemplateResponse {
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
     * 模板里用到的连接器列表，以英文逗号分隔
     * @example `config,oss`
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
     * 模板标题
     * @example `测试模板`
     */
    TemplateName: string;
    /**
     * 模板版本，为从 0 递增的数字
     * @example `0`
     */
    TemplateVersion: number;
    /**
     * 模板发布者
     * @example `逻辑编排`
     */
    TemplateCreator: string;
    /**
     * 模板语言，目前支持中文 zh 和英文 en 两种
     * @example `zh`
     */
    TemplateLocale: string;
    /**
     * 模板所在地域
     * @example `cn-shanghai`
     */
    RegionId: string;
    /**
     * 模板的描述
     * @example `该模板仅用于测试用途`
     */
    TemplateDescription: string;
    /**
     * 模板标签
     * @example `test,owner`
     */
    TemplateTag: string;
    /**
     * 模板定义
     * @example `{"actions": {},"schemaVersion":"2018-12-12","version": "1.0.0"}`
     */
    Definition: string;
    /**
     * 当前请求唯一标识符
     * @example `BCF7212F-9478-569A-B57C-8C1B5A560C2F`
     */
    RequestId: string;
    /**
     * 模板简要介绍
     * @example `这是一个测试模板`
     */
    TemplateSummary: string;
    /**
     * 模板 ID
     * @example `tp-uf6tbvhheciyxl`
     */
    TemplateId: string;
}
