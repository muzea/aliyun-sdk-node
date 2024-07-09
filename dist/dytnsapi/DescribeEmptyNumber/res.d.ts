export interface DescribeEmptyNumberResponse {
    /**
     * 公共参数，每个请求返回的ID都是唯一的，可用于排查和定位问题。
     * @example `CC3BB6D2-2FDF-4321-9DCE-B38165CE4C47`
     */
    RequestId: string;
    /**
     * 状态码的描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 返回结果。
     */
    Data: {
        /**
         * 检测手机号返回状态。取值：
         * - **EMPTY**：空号。
         * - **NORMAL**：正常。
         * - **SUSPECT_EMPTY**：疑似空号。
         * - **UNKNOWN**：未知。
         * @example `EMPTY`
         */
        Status: string;
        /**
         * 传入的手机号。
         * @example `189****1234`
         */
        Number: string;
    };
    /**
     * 返回状态码。取值：
     * - **OK**：成功。
     * - **InvalidPhoneNumber.Check**：手机号非法。
     * @example `OK`
     */
    Code: string;
}
