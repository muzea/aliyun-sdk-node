export interface GetModelResponse {
    /**
     * 请求ID。
     * @example `5A14FA81-DD4E-******-6343FE44B941`
     */
    RequestId: string;
    /**
     * 模型ID。
     * @example `model-rbvg5wzljz****ks92`
     */
    ModelId: string;
    /**
     * 模型名称。
     * @example `情感分析`
     */
    ModelName: string;
    /**
     * 模型描述。
     * @example `通用情感分析。`
     */
    ModelDescription: string;
    /**
     * 创建模型UTC时间，格式ISO8601。
     * @example `2021-01-30T12:51:33.028Z`
     */
    GmtCreateTime: string;
    /**
     * 最后更新模型UTC时间，格式ISO8601。
     * @example `2021-01-30T12:51:33.028Z`
     */
    GmtModifiedTime: string;
    /**
     * 用户ID。
     * @example `1234567890******`
     */
    UserId: string;
    /**
     * 阿里云账号ID。
     * @example `1234567890******`
     */
    OwnerId: string;
    /**
     * 模型源。描述源模型所属社区或组织，例如：ModelScope，HuggingFace等。
     * @example `ModelScope`
     */
    Origin: string;
    /**
     * 提供者。
     * @example `pai`
     */
    Provider: string;
    /**
     * 领域。描述模型解决问题所属领域。例如：nlp（自然语言处理）、cv（计算机视觉）等。
     * @example `cv`
     */
    Domain: string;
    /**
     * 任务。描述模型解决的具体问题，例如：text-classification（文本分类）等。
     * @example `text-classification`
     */
    Task: string;
    /**
     * 模型文档。
     * @example `https://***.md`
     */
    ModelDoc: string;
    /**
     * 模型的标签列表。
     */
    Labels: any[];
    /**
     * 工作空间ID。
     * @example `234**`
     */
    WorkspaceId: string;
    /**
     * 工作空间可见性，可能值为：
     * - PRIVATE：在此工作空间中，仅对您和管理员可见。
     * - PUBLIC：在此工作空间中，对所有人可见。
     * @example `PUBLIC`
     */
    Accessibility: string;
    /**
     * 模型的最新版本。
     */
    LatestVersion: any;
    /**
     * 模型类型。
     * @example `Checkpoint`
     */
    ModelType: string;
    /**
     * 模型的其它信息。
     * @example `{
        "RatingCount": 2866,
        "Rating": 4.94,
        "FavoriteCount": 34992,
        "CommentCount": 754,
        "CoverUris": ["https://e***u.oss-cn-hangzhou.aliyuncs.com/drea***w.png"],
        "TippedAmountCount": 32,
        "DownloadCount": 606056
    }`
     */
    ExtraInfo: any;
    /**
     * 序号。
     * @example `1`
     */
    OrderNumber: number;
}
