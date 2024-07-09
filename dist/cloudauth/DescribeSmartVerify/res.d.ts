export interface DescribeSmartVerifyResponse {
    /**
     * 返回码，**200**表示接口响应成功。
     * @example `200`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `130A2C10-B9EE-4D84-88E3-5384FF039795`
     */
    RequestId: string;
    /**
     * 请求结果
     */
    ResultObject: {
        /**
         * 认证结果码。详见**[ResultObject.SubCode补充说明](~~186597~~)**。
         * @example `200`
         */
        SubCode: string;
        /**
         * 综合决策分数，取值：0~100。
         * 阈值为80分，大于或等于80分表示认证通过，低于80分表示认证不通过。
         * @example `80.2`
         */
        PassedScore: number;
        /**
         * 认证主体附件信息中的业务安全类信息。详见**[ResultObject.MaterialInfo.riskInfo补充说明](~~186597~~)**。
         * @example `{"riskInfo": { "score": 35,"tags": "rm0114"} }`
         */
        MaterialInfo: string;
        /**
         * 认证是否通过，取值：
         *   - **T**：通过。
         *   - **F**：不通过。
         * > 如果接口异常或接口是未认证状态，则不返回该参数。
         * @example `T`
         */
        Passed: string;
    };
}
