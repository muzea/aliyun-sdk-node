export interface DescribeResourceInfoResponse {
    /**
     * 响应状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 调用失败时，返回的出错信息。
     * @example `The system is busy. Please try again later.`
     */
    Message: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `D5C69894-9709-4653-B3D8-25234034C2FC`
     */
    RequestId: string;
    /**
     * 是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 响应内容。
     */
    Data: {
        /**
         * 业务链状态。
         * - **NORMAL**：正常。
         * - **EXPIRED**：已过期。
         * @example `NORMAL`
         */
        Status: string;
        /**
         * 开通时间。毫秒级时间戳。
         * @example `1586125838680`
         */
        EffectiveTime: number;
        /**
         * 授权类型。
         * - **企业版**：企业版套餐。
         * - **标准版**：标准版套餐。
         * @example `标准版`
         */
        AuthorizeType: string;
        /**
         * 到期时间。毫秒级时间戳。
         * @example `1666125838680`
         */
        ExpiredTime: number;
        /**
         * 地域。
         * @example `cn-shanghai`
         */
        Region: string;
    };
}
