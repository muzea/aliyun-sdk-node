export interface CreateInterventionDictionaryRequest {
    /**
     * 是否校验入参数据合法性，默认false。
     * 取值：
     * - **true**：只校验参数合法性。
     * - **false**：校验参数合法性，创建归因配置。
     * @example `false`
     */
    "dryRun"?: boolean;
    /**
     * 请求体
     */
    "body"?: {
        /**
         * 干预词典名称
         * @example `ner_dict_ec`
         */
        name: string;
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
         * 词典类型，支持：
         * - MODEL：模型定制分析器。
         * - SYSTEM：系统分析器。
         * - USER：自定义分析器。
         * @example `SYSTEM`
         */
        analyzerType: string;
    };
}
