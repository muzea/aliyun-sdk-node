export interface DescribeRegionsResponse {
    /**
     * 返回码
     * @example `200`
     */
    Code: number;
    /**
     * 错误信息，仅出错时返回错误信息。
     * @example `disable failed jobs=[99341]`
     */
    Message: string;
    /**
     * 请求ID
     * @example `4F68ABED-AC31-4412-9297-D9A8F0401108`
     */
    RequestId: string;
    /**
     * 调用接口是否成功。取值如下：
     * - **true**：成功
     * - **false**：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 可用地域的集合
     */
    Regions: {
        /**
         * 地域对应的接入地址（Endpoint）
         * @example `schedulerx.cn-hangzhou.aliyuncs.com`
         */
        RegionEndpoint: string;
        /**
         * 地域的展示名，根据当前语言环境转换
         * @example `杭州`
         */
        LocalName: string;
        /**
         * 地域ID
         * @example `cn-hangzhou`
         */
        RegionId: string;
    }[];
}
