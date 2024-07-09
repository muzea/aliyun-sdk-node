export interface SearchFaqResponse {
    /**
     * 知识搜索结果
     */
    FaqHits: {
        /**
         * 知识ID
         * @example `30002145804`
         */
        KnowledgeId: number;
        /**
         * 修改时间（UTC 时间）
         * @example `2022-04-02T03:09:30Z`
         */
        ModifyTime: string;
        /**
         * 修改人
         * @example `test01`
         */
        ModifyUserName: string;
        /**
         * 创建时间（UTC 时间）
         * @example `2022-04-02T03:09:30Z`
         */
        CreateTime: string;
        /**
         * 创建人
         * @example `test01`
         */
        CreateUserName: string;
        /**
         * 创建人ID
         * @example `18453`
         */
        CreateUserId: number;
        /**
         * 修改人ID
         * @example `18453`
         */
        ModifyUserId: number;
        /**
         * 类目ID
         * @example `30000055639`
         */
        CategoryId: number;
        /**
         * 知识状态：-1-已删除未发布，1-未发布，2-已发布，3-已更新未发布
         * @example `3`
         */
        Status: number;
        /**
         * 知识生效状态，根据StartDate，EndDate计算出来：20-生效中，21-已失效，22-待生效
         * @example `20`
         */
        EffectStatus: number;
        /**
         * 标题
         * @example `测试标题`
         */
        Title: string;
        /**
         * 命中的相似问题列表
         */
        HitSimilarTitles: string[];
        /**
         * 命中的答案列表
         */
        HitSolutions: string[];
    }[];
    /**
     * 页码
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
     * @example `1075`
     */
    TotalCount: number;
    /**
     * 请求ID
     * @example `E45491D5-7E0A-42C6-9B21-91D1066B1475`
     */
    RequestId: string;
}
