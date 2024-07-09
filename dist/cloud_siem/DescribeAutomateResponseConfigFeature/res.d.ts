export interface DescribeAutomateResponseConfigFeatureResponse {
    /**
     * 请求返回值。
     * @example `123456`
     */
    Data: {
        /**
         * 自动化响应规则条件字段名称。
         * @example `alert_desc`
         */
        Feature: string;
        /**
         * 自动化响应规则条件字段数据类型。
         * @example `varchar`
         */
        DataType: string;
        /**
         * 该字段支持的操作符列表。
         */
        SupportOperators: {
            /**
             * 是否需要右值。取值：
             * - true：需要
             * - false：不需要
             * @example `false`
             */
            HasRightValue: boolean;
            /**
             * 操作符。
             * @example `<=`
             */
            Operator: string;
            /**
             * 操作符显示名称。
             * @example `<=`
             */
            OperatorName: string;
            /**
             * 操作符中文描述。
             * @example `larger than or equal to`
             */
            OperatorDescCn: string;
            /**
             * 操作符英文描述。
             * @example `larger than or equal to`
             */
            OperatorDescEn: string;
            /**
             * 当前操作符可以支持的数据类型，以逗号分隔。
             * @example `varchar`
             */
            SupportDataType: string;
            /**
             * 操作符支持场景。多个场景以逗号分隔，如聚合等。默认为空。
             * @example `[AGGREGATE]`
             */
            SupportTag: string[];
            /**
             * 操作符所处操作符列表位置。
             * @example `3`
             */
            Index: number;
        }[];
        /**
         * 该字段对应的右值枚举值。
         */
        RightValueEnums: {
            /**
             * 右值枚举值。
             * @example `serious`
             */
            Value: string;
            /**
             * 右值枚举值美杜莎Code。
             * @example `aliyun.siem.automate.feature.alert_level.serious`
             */
            ValueMds: string;
        }[];
    }[];
    /**
     * 请求是否成功。取值：
     * - true：成功
     * - false：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 请求返回消息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `9AAA9ED9-78F4-5021-86DC-D51C7511****`
     */
    RequestId: string;
}
