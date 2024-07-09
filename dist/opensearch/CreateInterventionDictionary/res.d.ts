export interface CreateInterventionDictionaryResponse {
    /**
     * 请求ID
     * @example `80326EFE-485F-46E7-B291-5A1DD08D2198`
     */
    requestId: string;
    /**
     * 干预词典详情
     */
    result: {
        /**
         * 创建时间
         * @example `1591086323`
         */
        created: string;
        /**
         * 自定义分词
         * @example `dianshang`
         */
        analyzer: string;
        /**
         * 更新时间
         * @example `1591086323`
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
         * - suggest_allowlist 下拉提示白名单
         * - suggest_denylist 下拉提示黑名单
         * - hot_allowlist  热搜白名单
         * - hot_denylist  热搜黑名单
         * - hint_allowlist  底纹白名单
         * - hint_denylist  底纹黑名单
         * @example `ner`
         */
        type: string;
        /**
         * 名称
         * @example `testb`
         */
        name: string;
    };
}
