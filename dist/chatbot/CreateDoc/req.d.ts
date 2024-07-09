export interface CreateDocRequest {
    /**
     * 业务空间key，不传时访问默认业务空间，key值在主账号业务管理页面获取
     * @example `ac627989eb4f8a98ed05fd098bbae5_p_beebot_public`
     */
    "AgentKey"?: string;
    /**
     * 文档类目ID
     * @example `30000049006`
     */
    "CategoryId": number;
    /**
     * 文档标题
     * @example `测试标题`
     */
    "Title": string;
    /**
     * 文档内容，与Url二选一
     * @example `测试内容`
     */
    "Content"?: string;
    /**
     * 文档解析/切分配置
     * 配置项：切分器
     * KEY：Splitter
     * 值选项：ParagraphSplitter-识别层级
     * 值选项：TreeSplitter-规则层级
     * 配置项：文档切块大小
     * KEY：ChunkSize
     * VALUE：默认500；范围[200,800]
     * 配置项：规则层级
     * KEY：TreePatterns
     * VALUE：默认[]
     * 配置项：文档标题来源
     * KEY：TitleSource
     * 值选项：ocrTitle - OCR识别标题【默认】
     * 值选项：docName - 文档名即标题
     * @example `{"Splitter":"treeSplitter","ChunkSize":500,"TreePatterns":["^# .*","^## .*","^### .*","^#### .*"],"TitleSource":""}`
     */
    "Config"?: string;
    /**
     * 文档随路数据
     * @example `{"code":"xxx"}`
     */
    "Meta"?: string;
    /**
     * 生效开始时间UTC
     * @example `2022-05-25T16:28:36Z
    `
     */
    "StartDate"?: string;
    /**
     * 生效结束时间UTC
     * @example `2032-05-25T16:28:36Z
    `
     */
    "EndDate"?: string;
    /**
     * 文档链接URL路径，与Content二选一，支持txt、pdf、markdown、doc、docx格式（单个文件：最多100页，txt小于200K，pdf小于100M，markdown小于200K，doc小于100M，docx小于100M）
     * @example `https://example.com/example.pdf`
     */
    "Url"?: string;
    /**
     * 标签ID列表
     */
    "TagIds"?: number[];
}
