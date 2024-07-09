export interface SubmitDocumentAnalyzeJobRequest {
    /**
     * fileUrl/fileUrlObject二选一：
     * - fileUrl：以文档URL方式使用，单个文档（支持1000页以内、100MB以内的 doc, docx，pdf, csv，xlsx，xls 文档）
     * - fileUrlObject：以本地文件上传方式调用接口时使用，单个文档（支持1000页以内、100 MB以内的 doc, docx，pdf, csv，xlsx，xls 文档）
     * @example `fileUrl：https://example.com/example.pdf
    fileUrlObject：本地文件生成的FileInputStream`
     */
    "fileUrl"?: string;
    /**
     * 文件名需带文件类型后缀
     * @example `example.pdf`
     */
    "fileName": string;
    /**
     * 唯一的解析模板ID，用于指定文档要抽取的key-value，需登录模板管理页面配置模板后获取对应的模板ID。
     * @example `572d24k0c95a`
     */
    "templateId": string;
    /**
     * 唯一的知识库文件夹ID，当需要对文档进行分类管理、控制在线问答查询的文档范围时使用。为空时表示将文档上传到租户的根目录。
     * @example `默认为空`
     */
    "folderId"?: string;
}
