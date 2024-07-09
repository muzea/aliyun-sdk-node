export interface ListMaterialDocumentsRequest {
    /**
     * 业务空间唯一标识：AgentKey
     * @example `33a2658aaabf4c24b45d50e575125311_p_beebot_public`
     */
    "AgentKey": string;
    /**
     * 支持对 title、content、content的综合查询
     * @example `小猫`
     */
    "Query"?: string;
    /**
     * 素材主键ID
     * @example `69`
     */
    "Id"?: number;
    /**
     * 根据素材标题全文检索
     * @example `新闻标题`
     */
    "Title"?: string;
    /**
     * 文档类型 (html: 网页, plainText: 纯文本, image: 图片, pdf: pdf, word: word, excel: excel, csv: csv, jsonLine: jsonLine)
     * @example `jsonLine`
     */
    "DocType"?: string;
    /**
     * 文档类型列表 (html: 网页, plainText: 纯文本, image: 图片, pdf: pdf, word: word, excel: excel, csv: csv, jsonLine: jsonLine)
     * @example `excel`
     */
    "DocTypeList"?: string[];
    /**
     * 文档内容全文检索
     * @example `新闻内容`
     */
    "Content"?: string;
    /**
     * 共享属性：0：个人私有，1：业务空间范围内共享
     * @example `1`
     */
    "ShareAttr"?: number;
    /**
     * 文档关键词
     */
    "Keywords"?: string[];
    /**
     * 创建时间-开始范围，格式：yyyy-MM-dd HH:mm:ss
     * @example `2023-02-19 07:28:11`
     */
    "CreateTimeStart"?: string;
    /**
     * 创建时间-结束范围，格式：yyyy-MM-dd HH:mm:ss
     * @example `2023-03-18 02:00:00`
     */
    "CreateTimeEnd"?: string;
    /**
     * 更新时间-开始范围，格式：yyyy-MM-dd HH:mm:ss
     * @example `2023-03-18 02:00:00
    `
     */
    "UpdateTimeStart"?: string;
    /**
     * 更新时间-结束范围，格式：yyyy-MM-dd HH:mm:ss
     * @example `2023-03-18 03:00:00
    `
     */
    "UpdateTimeEnd"?: string;
    /**
     * 是否生成文件公共URL
     * @example `true`
     */
    "GeneratePublicUrl"?: boolean;
    /**
     * 当前页码
     * @example `1`
     */
    "Current"?: number;
    /**
     * 每页条数：默认10
     * @example `10`
     */
    "Size"?: number;
}
