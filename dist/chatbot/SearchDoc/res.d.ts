export interface SearchDocResponse {
    /**
     * Id of the request
     * @example `E3E5C779-A630-45AC-B0F2-A4506A4212F1`
     */
    RequestId: string;
    /**
     * 当前⻚码
     * @example `1`
     */
    PageNumber: number;
    /**
     * 每页数量
     * @example `10`
     */
    PageSize: number;
    /**
     * 总条数
     * @example `141`
     */
    TotalCount: number;
    /**
     * 文档列表
     */
    DocHits: {
        /**
         * 知识ID
         * @example `30002692007`
         */
        KnowledgeId: number;
        /**
         * 文档名称
         * @example `文档名称`
         */
        DocName: string;
        /**
         * 业务代码
         * @example `cn_dytns`
         */
        BizCode: string;
        /**
         * 文档随路数据
         * @example `{"code":"xxx"}`
         */
        Meta: string;
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
         * @example `{"Splitter":"treeSplitter","ChunkSize":500,"TreePatterns":["^# .*","^## .*","^### .*","^#### .*"],"TitleSource":"docName"}`
         */
        Config: string;
        /**
         * 文档保存OSS地址
         * @example `https://doc2bot-bucket-cloud.oss-cn-shanghai.aliyuncs.com/doc2bot/input/文档问答说明书_V1.pdf`
         */
        Url: string;
        /**
         * 修改时间（UTC时间）
         * @example `2023-06-25T02:27:42Z`
         */
        ModifyTime: string;
        /**
         * 修改人名称
         * @example `李四`
         */
        ModifyUserName: string;
        /**
         * 创建时间（UTC时间）
         * @example `2023-06-22T03:53:41Z`
         */
        CreateTime: string;
        /**
         * 创建人名称
         * @example `张三`
         */
        CreateUserName: string;
        /**
         * 创建人ID
         * @example `111111111`
         */
        CreateUserId: number;
        /**
         * 修改人ID
         * @example `222222222`
         */
        ModifyUserId: number;
        /**
         * 类目ID
         * @example `30000135654`
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
         * 编辑状态： 1 未发布 2 已发布 3 已更新未发布
         * @example `1`
         */
        Status: number;
        /**
         * 知识生效状态，根据StartDate，EndDate计算出来：20-生效中，21-已失效，22-待生效
         * @example `20`
         */
        EffectStatus: number;
        /**
         * 生效时间（UTC 时间）
         * @example `2023-02-28T11:40:18Z`
         */
        StartDate: string;
        /**
         * 失效时间（UTC时间）
         * @example `2099-12-31T16:00:00Z`
         */
        EndDate: string;
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
             * 标签组ID
             * @example `3610`
             */
            GroupId: number;
            /**
             * 标签组名称
             * @example `文章`
             */
            GroupName: string;
            /**
             * 是否默认全部标签
             * @example `false`
             */
            DefaultTag: boolean;
        }[];
    }[];
}
