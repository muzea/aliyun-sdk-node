export interface UpdateDocRequest {
    /**
     * 业务空间key,不设置则访问默认业务空间，key值在主账号业务管理页面获取
     * @example `ac627989eb4f8a98ed05fd098bbae5_p_beebot_public`
     */
    "AgentKey"?: string;
    /**
     * 文档ID
     * @example `30001905617`
     */
    "KnowledgeId": number;
    /**
     * 文档类目ID
     * @example `231001028593`
     */
    "CategoryId"?: number;
    /**
     * 文档名称
     * @example `文档问答模块功能说明文档`
     */
    "DocName"?: string;
    /**
     * 文档标题
     * @example `文档问答功能说明`
     */
    "Title"?: string;
    /**
     * 文档内容
     * @example `文档内容`
     */
    "Content"?: string;
    /**
     * 文档解析/切分配置
     * 配置项：切分器
     * KEY：Splitter
     * 值选项：paragraphSplitter-识别层级【默认】
     * 值选项：treeSplitter-规则层级
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
     * 开始生效时间
     * @example `2022-05-25T16:28:36Z`
     */
    "StartDate"?: string;
    /**
     * 结束生效时间
     * @example `2023-03-11T23:59:59Z`
     */
    "EndDate"?: string;
    /**
     * 标签ID列表，为空时解除绑定
     */
    "TagIds"?: number[];
}
