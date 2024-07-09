export interface SaveMaterialDocumentRequest {
    /**
     * 业务空间唯一标识：AgentKey
     * @example `c160c841c8e54295bf2f441432785944_p_efm`
     */
    "AgentKey": string;
    /**
     * 文档类型 (html: 网页, plainText: 纯文本, image: 图片, pdf: pdf, word: word, excel: excel, csv: csv, jsonLine: jsonLine)
     * @example `excel`
     */
    "DocType": string;
    /**
     * 文档标题
     * @example `新闻标题`
     */
    "Title"?: string;
    /**
     * 作者
     * @example `作者名称`
     */
    "Author"?: string;
    /**
     * 发布时间,格式：yyyy-MM-dd HH:mm:ss
     * @example `2023-04-11 06:14:07`
     */
    "PubTime"?: string;
    /**
     * 文档标签用于分类等
     */
    "DocKeywords"?: string[];
    /**
     * 素材的URL
     * @example `http://xxxxx/xxx`
     */
    "Url"?: string;
    /**
     * 外部客户上传的URL，仅用作记录保存
     * @example `http://xxxxx/xxx
    `
     */
    "ExternalUrl"?: string;
    /**
     * 文档来源 (UserUpload: 用户上传, IntellijSearch: 智搜, HotViewPoint: 热点视角)
     * @example `IntellijSearch`
     */
    "SrcFrom"?: string;
    /**
     * 解析后的文本内容，对于图片来说为空
     * @example `文本内容`
     */
    "TextContent"?: string;
    /**
     * 带格式的内容
     * @example `网页内容`
     */
    "HtmlContent"?: string;
    /**
     * 共享属性：0：个人私有，1：业务空间范围内共享
     * @example `1`
     */
    "ShareAttr"?: number;
    /**
     * 是否同时将素材保存为私有库与共享库
     * @example `false`
     */
    "BothSavePrivateAndShare"?: boolean;
    /**
     * 摘要
     * @example `摘要`
     */
    "Summary"?: string;
}
