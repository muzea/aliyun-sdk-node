export interface DescribeDdosCreditResponse {
    /**
     * 本次请求是否调用成功。取值：
     * - **true**：表示调用成功。
     * - **false**：表示调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 本次请求的ID。
     * @example `E1F7BD73-8E9D-58D9-8658-CFC97112C641`
     */
    RequestId: string;
    /**
     * 当前阿里云账号在指定地域的安全信誉分详情。
     */
    DdosCredit: {
        /**
         * 安全信誉分值。满分为**1000**。
         * @example `550`
         */
        Score: number;
        /**
         * 安全信誉分等级。取值：
         * - **A**：表示极好。
         * - **B**：表示优秀。
         * - **C**：表示良好。
         * - **D**：表示中等。
         * - **E**：表示较差。
         * - **F**：表示极差。
         * @example `D`
         */
        ScoreLevel: string;
        /**
         * 阿里云账号在指定地域的黑洞自动解除时间。单位：分钟。
         * @example `150`
         */
        BlackholeTime: number;
    };
}
