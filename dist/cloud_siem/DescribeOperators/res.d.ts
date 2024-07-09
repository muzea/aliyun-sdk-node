export interface DescribeOperatorsResponse {
    /**
     * 请求返回值。
     * @example `123456`
     */
    Data: {
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
         * @example `arger than or equal to`
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
         * 操作符支持场景。多个场景以逗号分隔，如聚合（AGGREGATE）等，默认为空。
         * @example `[AGGREGATE]`
         */
        SupportTag: string[];
        /**
         * 操作符所在的操作符列表位置。
         * @example `3`
         */
        Index: number;
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
