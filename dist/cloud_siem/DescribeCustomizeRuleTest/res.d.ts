export interface DescribeCustomizeRuleTestResponse {
    /**
     * 请求返回值。
     * @example `123456`
     */
    Data: {
        /**
         * 自定义规则ID。
         * @example `123456789`
         */
        Id: number;
        /**
         * 规则状态。 取值：
         * - 0：初始状态
         * - 10：模拟数据测试
         * - 15：业务数据测试中
         * - 20：业务数据测试结束
         * - 100：规则上线
         * @example `0`
         */
        Status: number;
        /**
         * 模拟测试历史用例数据。
         * @example `[{"key1":"value1","key2":"value2","key3":"value3","key4":"value4","key5":"value5"}]`
         */
        SimulateData: string;
    };
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
