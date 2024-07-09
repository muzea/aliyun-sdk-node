export interface UpdateModelFeatureFGFeatureRequest {
    /**
     * 实例ID，可从接口ListInstances获取。
     * @example `fs-cn-********`
     */
    "InstanceId": string;
    /**
     * 模型特征ID，可从接口ListModelFeatures获取。
     * @example `3`
     */
    "ModelFeatureId": string;
    /**
     * 请求Body。
     */
    "body"?: {
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
             * key特征。
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
                 * 生成子特征的名称。
                 * @example `item_id`
                 */
                FeatureName: string;
                /**
                 * FG序列特征子特征类型。
                 * - IdFeature-主键
                 * - RawFeature-基础特征
                 * @example `RawFeature`
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
    };
}
