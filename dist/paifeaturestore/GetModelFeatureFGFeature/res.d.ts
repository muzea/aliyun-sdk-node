export interface GetModelFeatureFGFeatureResponse {
    /**
     * 请求ID。
     * @example `E23EFF09-58AA-5420-934F-8453AE01548D`
     */
    RequestId: string;
    /**
     * 基础特征信息。
     */
    RawFeatures: {
        /**
         * 原始特征名称。
         * @example `item_id`
         */
        InputFeatureName: string;
        /**
         * 原始特征域。
         * - User-用户侧
         * - Item-物品侧
         * - Context-上下文
         * @example `User`
         */
        FeatureDomain: string;
        /**
         * 生成特征的名称。
         * @example `item_id`
         */
        FeatureName: string;
        /**
         * FG基础特征类型。
         * - IdFeature-主键
         * - RawFeature-基础特征
         * @example `IdFeature`
         */
        FeatureType: string;
        /**
         * 特征值类型。
         * - INTEGER
         * - DOUBLE
         * - STRING
         * @example `STRING`
         */
        ValueType: string;
        /**
         * 默认值。
         * @example `-1024`
         */
        DefaultValue: string;
    }[];
    /**
     * 查询特征信息。
     */
    LookupFeatures: {
        /**
         * map特征名称。
         * @example `item_id`
         */
        MapFeatureName: string;
        /**
         * map特征域。
         * - User-用户侧
         * - Item-物品侧
         * - Context-上下文
         * @example `User`
         */
        MapFeatureDomain: string;
        /**
         * 生成特征的名称。
         * @example `item_id`
         */
        FeatureName: string;
        /**
         * 特征值类型。
         * - INTEGER
         * - DOUBLE
         * - STRING
         * @example `STRING`
         */
        ValueType: string;
        /**
         * 默认值。
         * @example `-1024`
         */
        DefaultValue: string;
        /**
         * key特征名称。
         * @example `1`
         */
        KeyFeatureName: string;
        /**
         * key特征域。
         * - User-用户侧
         * - Item-物品侧
         * - Context-上下文
         * @example `Item`
         */
        KeyFeatureDomain: string;
    }[];
    /**
     * 序列特征信息。
     */
    SequenceFeatures: {
        /**
         * 序列特征名称。
         * @example `item_id`
         */
        FeatureName: string;
        /**
         * 序列特征最大长度。
         * @example `50`
         */
        SequenceLength: number;
        /**
         * 序列特征分隔符。
         * @example `;`
         */
        SequenceDelim: string;
        /**
         * 特征属性分隔符。
         * @example `#`
         */
        AttributeDelim: string;
        /**
         * 序列特征子特征列表。
         */
        SubFeatures: {
            /**
             * 原始特征名称
             * @example `item_id`
             */
            InputFeatureName: string;
            /**
             * 原始特征域。
             * - User-用户侧
             * - Item-物品侧
             * - Context-上下文
             * @example `User`
             */
            FeatureDomain: string;
            /**
             * 生成特征的名称。
             * @example `item_id`
             */
            FeatureName: string;
            /**
             * FG特征类型。
             * - IdFeature-主键
             * - RawFeature-基础特征
             * @example `IdFeature`
             */
            FeatureType: string;
            /**
             * 特征值类型。
             * - INTEGER
             * - DOUBLE
             * - STRING
             * @example `STRING`
             */
            ValueType: string;
            /**
             * 默认值。
             * @example `-1024`
             */
            DefaultValue: string;
        }[];
    }[];
    /**
     * 保留字段。
     */
    Reserves: string[];
}
