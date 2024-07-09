export interface GetFileDetectApiInvokeInfoResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `9f368b6e-d60a-43c5-bd6f-c7087f2d****`
     */
    RequestId: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 授权总次数。
         * @example `10000`
         */
        AuthCount: number;
        /**
         * 剩余授权次数。
         * @example `900`
         */
        RemainAuthCount: number;
        /**
         * 调用频率限制。
         * @example `20`
         */
        FlowRate: number;
        /**
         * 频率限制的时间单位。取值：
         * - **SECONDS**：秒
         * - **MINUTES**：分钟
         * @example `SECONDS`
         */
        TimeUnit: string;
        /**
         * 授权数的失效日期时间戳。
         * @example `1815753600000`
         */
        Expire: number;
        /**
         * 授权版本。取值包括：
         * - **1**：试用版
         * - **2**：企业版
         * @example `2`
         */
        SaleVersion: number;
    };
}
