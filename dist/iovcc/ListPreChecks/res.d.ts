export interface ListPreChecksResponse {
    /**
     * 本次请求编号
     * @example `BB80AC68-1E8A-4A46-B348-7D875AE9132A`
     */
    RequestId: string;
    /**
     * 预检返回结果
     */
    PreChecks: {
        /**
         * 检查项
         * @example `IovccEnabled`
         */
        Key: string;
        /**
         * 检查项主页
         * @example `https://www.aliyun.com/product/iovcc`
         */
        Link: string;
        /**
         * 检查项收费模式
         * @example `FreeTrial`
         */
        Price: string;
        /**
         * 检查结果
         * @example `Enabled`
         */
        State: string;
    }[];
}
