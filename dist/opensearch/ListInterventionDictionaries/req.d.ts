export interface ListInterventionDictionariesRequest {
    /**
     * 每页返回数目，默认 pageSize=10
     * @example `10`
     */
    "pageSize"?: number;
    /**
     * 页码，默认 pageNumber=1
     * @example `1`
     */
    "pageNumber"?: number;
    /**
     * 干预词典类型集合
     * 格式：urlencode([“synonym”, “stopword”])
     * - stopword 停用词
     * - synonym 同义词
     * - correction 拼写纠错
     * - category_prediction 类目预测
     * - ner 实体识别
     * - term_weighting 词权重
     * @example `["synonym"]`
     */
    "types"?: string;
}
