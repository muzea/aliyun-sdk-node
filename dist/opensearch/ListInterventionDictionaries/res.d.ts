export interface ListInterventionDictionariesResponse {
    /**
     * 总条数
     * @example `2`
     */
    totalCount: number;
    /**
     * 请求ID
     * @example `0A6EB64B-B4C8-CF02-810F-E660812972FF`
     */
    requestId: string;
    /**
     * 干预词典详情
     * 参考：[InterventionDictionary](~~173608~~)
     */
    result: {
        /**
         * 创建时间
         * @example `1539158325`
         */
        created: number;
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
         * 自定义分词
         * @example `""`
         */
        analyzer: string;
        /**
         * 名称
         * @example `tongyici`
         */
        name: string;
        /**
         * 更新时间
         * @example `1539158313`
         */
        updated: number;
        /**
         * 词典ID
         * @example `1`
         */
        id: number;
    }[];
}
