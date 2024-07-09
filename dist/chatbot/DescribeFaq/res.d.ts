export interface DescribeFaqResponse {
    /**
     * 知识ID
     * @example `30001979424`
     */
    KnowledgeId: number;
    /**
     * 标题
     * @example `测试标题`
     */
    Title: string;
    /**
     * 修改时间（UTC 时间）
     * @example `2020-12-02T06:35:50Z`
     */
    ModifyTime: string;
    /**
     * 修改人
     * @example `test01`
     */
    ModifyUserName: string;
    /**
     * 创建时间（UTC 时间）
     * @example `2020-11-30T03:03:37Z`
     */
    CreateTime: string;
    /**
     * 创建人
     * @example `test01`
     */
    CreateUserName: string;
    /**
     * 类目ID
     * @example `30000055617`
     */
    CategoryId: number;
    /**
     * 知识状态： -1-已删除未发布，1-未发布，2-已发布，3-已更新未发布
     * @example `3`
     */
    Status: number;
    /**
     * 知识生效状态，根据StartDate， EndDate计算出来：20-生效中，21-已失效，22-待生效
     * @example `20`
     */
    EffectStatus: number;
    /**
     * 生效时间（UTC 时间）
     * @example `2022-04-27T07:04:39Z`
     */
    StartDate: string;
    /**
     * 失效时间（UTC 时间）
     * @example `2023-04-27T06:08:54Z`
     */
    EndDate: string;
    /**
     * 相似问列表
     */
    SimQuestions: {
        /**
         * 相似问ID
         * @example `10000000581`
         */
        SimQuestionId: number;
        /**
         * 修改时间（UTC 时间）
         * @example `2022-05-29T03:55:07Z`
         */
        ModifyTime: string;
        /**
         * 创建时间（UTC 时间）
         * @example `2022-05-26T10:24:00Z`
         */
        CreateTime: string;
        /**
         * 相似问标题
         * @example `测试相似问标题`
         */
        Title: string;
    }[];
    /**
     * 答案列表
     */
    Solutions: {
        /**
         * 答案ID
         * @example `10000003071`
         */
        SolutionId: number;
        /**
         * 修改时间（UTC 时间）
         * @example `2022-05-29T07:07:13Z`
         */
        ModifyTime: string;
        /**
         * 创建时间（UTC 时间）
         * @example `2022-05-26T10:24:00Z`
         */
        CreateTime: string;
        /**
         * 答案内容
         * @example `测试答案内容`
         */
        Content: string;
        /**
         * 答案类型：0-纯文本，1-富文本
         * @example `0`
         */
        ContentType: number;
        /**
         * 答案纯文本内容
         * @example `测试答案内容`
         */
        PlainText: string;
        /**
         * 视角code列表
         */
        PerspectiveCodes: string[];
    }[];
    /**
     * 关联问列表
     */
    Outlines: {
        /**
         * 关联关系ID
         * @example `797`
         */
        OutlineId: number;
        /**
         * 关联知识ID
         * @example `1000098002`
         */
        ConnQuestionId: number;
        /**
         * 关联知识标题
         * @example `测试关联问标题`
         */
        Title: string;
        /**
         * 修改时间（UTC 时间）
         * @example `2022-05-26T18:12:02Z`
         */
        ModifyTime: string;
        /**
         * 创建时间（UTC 时间）
         * @example `2022-05-26T10:24:00Z`
         */
        CreateTime: string;
    }[];
    /**
     * 请求ID
     * @example `8AD9FA10-7780-5E12-B701-13C928524F32`
     */
    RequestId: string;
}
