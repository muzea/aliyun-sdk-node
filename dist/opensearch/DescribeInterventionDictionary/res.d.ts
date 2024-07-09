export interface DescribeInterventionDictionaryResponse {
    /**
     * 请求ID
     * @example `D7CCF454-472A-030E-F254-604520B028AA`
     */
    requestId: string;
    /**
     * 干预词典详情
     */
    result: {
        /**
         * 创建时间
         * @example `1536233287`
         */
        created: string;
        /**
         * 自定义分词
         * @example `-`
         */
        analyzer: string;
        /**
         * 更新时间
         * @example `1536233287`
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
         * @example `category_prediction`
         */
        type: string;
        /**
         * 名称
         * @example `test`
         */
        name: string;
    };
}
