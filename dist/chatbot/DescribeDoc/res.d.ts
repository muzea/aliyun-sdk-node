export interface DescribeDocResponse {
    /**
     * Id of the request
     * @example `7F132693-212A-40A9-8A81-11E7694E478B`
     */
    RequestId: string;
    /**
     * 知识ID
     * @example `30001979424`
     */
    KnowledgeId: number;
    /**
     * 文档名称
     * @example `文档名称`
     */
    DocName: string;
    /**
     * 文档标题
     * @example `测试标题`
     */
    Title: string;
    /**
     * 业务代码
     * @example `bizcode123`
     */
    BizCode: string;
    /**
     * 文档随路数据
     * @example `{"code":"xxx"}`
     */
    Meta: string;
    /**
     * 文档解析/切分配置 配置项：切分器 KEY：Splitter 值选项：paragraphSplitter-识别层级【默认】 值选项：treeSplitter-规则层级
     * 配置项：文档切块大小 KEY：ChunkSize VALUE：默认500；范围[200,800]
     * 配置项：规则层级 KEY：TreePatterns VALUE：默认[]
     * 配置项：文档标题来源 KEY：TitleSource 值选项：ocrTitle - OCR识别标题【默认】 值选项：docName - 文档名即标题
     * @example `{"Splitter":"treeSplitter","ChunkSize":500,"TreePatterns":["^# .*","^## .*","^### .*","^#### .*"],"TitleSource":"docName"}`
     */
    Config: string;
    /**
     * 文档保存OSS地址
     * @example `https://doc2bot-bucket-cloud.oss-cn-shanghai.aliyuncs.com/doc2bot/input/文档问答说明书_V1.pdf`
     */
    Url: string;
    /**
     * 修改时间
     * @example `2020-11-25T08:56:55Z`
     */
    ModifyTime: string;
    /**
     * 修改人
     * @example `李四`
     */
    ModifyUserName: string;
    /**
     * 创建时间
     * @example `2022-04-12T06:30:17Z`
     */
    CreateTime: string;
    /**
     * 创建人名称
     * @example `张三`
     */
    CreateUserName: string;
    /**
     * 创建人ID
     * @example `1111111111`
     */
    CreateUserId: number;
    /**
     * 修改人ID
     * @example `2222222222`
     */
    ModifyUserId: number;
    /**
     * 类目ID
     * @example `30000049006`
     */
    CategoryId: number;
    /**
     * 任务处理状态
     * -1 排队中
     * 0 成功
     * 1 解析中
     * 2 处理中
     * 3 处理失败
     * @example `0`
     */
    ProcessStatus: number;
    /**
     * 任务处理信息
     * @example `任务处理成功`
     */
    ProcessMessage: string;
    /**
     * 任务是否可重试
     * true：可重试
     * false：不可重试
     * @example `true`
     */
    ProcessCanRetry: boolean;
    /**
     * 编辑状态：
     * 1   未发布
     * 2   已发布
     * 3   已更新未发布
     * @example `1`
     */
    Status: number;
    /**
     * 生效状态
     * 根据StartDate, EndDate计算出来
     * 20  生效中
     * 21  已失效
     * 22  待生效
     * @example `20`
     */
    EffectStatus: number;
    /**
     * 生效时间（UTC 时间）
     * @example `1979-12-31T16:00:00Z`
     */
    StartDate: string;
    /**
     * 失效时间（UTC 时间）
     * @example `2023-04-27T06:08:54Z`
     */
    EndDate: string;
    /**
     * 文档详情
     */
    DocInfo: {
        /**
         * 文档段落信息
         */
        DocParas: {
            /**
             * 段落序号
             * @example `1`
             */
            ParaNo: number;
            /**
             * 段落层级
             * @example `1`
             */
            ParaLevel: number;
            /**
             * 段落内容类型
             * text-文本
             * figure-图片
             * table-表格
             * @example `text`
             */
            ParaType: string;
            /**
             * 段落内容【纯文本/图片OCR内容/表格的Markdown表示】
             * @example `内容`
             */
            ParaText: string;
        }[];
    };
    /**
     * 标签详情列表
     */
    DocTags: {
        /**
         * 标签ID
         * @example `1201`
         */
        TagId: number;
        /**
         * 标签名称
         * @example `小说`
         */
        TagName: string;
        /**
         * 标签分组ID
         * @example `3610`
         */
        GroupId: number;
        /**
         * 标签分组名称
         * @example `文章`
         */
        GroupName: string;
        /**
         * 是否默认为全部标签
         * @example `false`
         */
        DefaultTag: boolean;
    }[];
}
