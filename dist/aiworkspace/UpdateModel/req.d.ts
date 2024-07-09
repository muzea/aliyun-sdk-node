export interface UpdateModelRequest {
    /**
     * 模型ID。如何获取模型ID，请参见[ListModels](~~461944~~)。
     * @example `model-rbvg5wz******ks92`
     */
    "ModelId": string;
    /**
     * 请求体。
     */
    "body"?: {
        /**
         * 模型名称，长度为1~127个字符。
         * @example `新闻分类`
         */
        ModelName: string;
        /**
         * 模型描述。
         * @example `新闻分类。`
         */
        ModelDescription: string;
        /**
         * 工作空间可见度，取值如下。
         * - PRIVATE：在此工作空间中，仅对您和管理员可见。
         * - PUBLIC：在此工作空间中，对所有人可见。
         * @example `PUBLIC`
         */
        Accessibility: string;
        /**
         * 模型源。描述源模型所属社区或组织，如ModelScope，HuggingFace等。
         * @example `ModelScope`
         */
        Origin: string;
        /**
         * 领域。描述模型解决问题所属领域。例如：nlp（自然语言处理）、cv（计算机视觉）等。
         * @example `nlp`
         */
        Domain: string;
        /**
         * 任务。描述模型解决的具体问题。例如：text-classification（文本分类）等。
         * @example `text-classification`
         */
        Task: string;
        /**
         * 模型文档。
         * @example `https://*.md`
         */
        ModelDoc: string;
        /**
         * 模型序号。可用于自定义排序。
         * @example `0`
         */
        OrderNumber: number;
        /**
         * 模型类型。如Checkpoint，LoRA等。
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
    };
}
