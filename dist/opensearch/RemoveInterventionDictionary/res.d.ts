export interface RemoveInterventionDictionaryResponse {
    /**
     * 请求ID
     * @example `06BBD41A-5F72-34E4-2DAF-E43B0526051D`
     */
    requestId: string;
    /**
     * 干预词典详情
     */
    result: {
        /**
         * 创建时间
         * @example `1539158313`
         */
        created: string;
        /**
         * 自定义分词
         * @example `""`
         */
        analyzer: string;
        /**
         * 更新时间
         * @example `1539158313`
         */
        updated: string;
        /**
         * 类型
         * - stopword 停用词
         * - synonym 同义词
         * - correction 拼写纠错
         * - category_prediction 类目预测
         * - ner 实体识别
         * - term_weighting 词权重
         * @example `synonym`
         */
        type: string;
        /**
         * 名称
         * @example `tongyici`
         */
        name: string;
    };
}
