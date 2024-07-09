export interface DescribeRegionsResponse {
    /**
     * 响应码。
     * @example `200`
     */
    Code: string;
    /**
     * 报错信息。
     * @example `Gateway exception, please launch local dg first`
     */
    ErrorMsg: string;
    /**
     * 请求ID，用于定位日志，排查问题。
     * @example `B0557F7A-62C3-50DC-9E09-77CAE658F776`
     */
    RequestId: string;
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功。
     * - **false**：请求失败。
     * @example `true`
     */
    Success: boolean;
    Regions: {
        /**
         * 地域列表。
         */
        Region: {
            /**
             * 地域对应的接入地址。
             * @example `dg.cn-hangzhou.aliyuncs.com`
             */
            RegionEndpoint: string;
            /**
             * 地域名称。
             * @example `杭州`
             */
            LocalName: string;
            /**
             * 地域ID
             * @example `cn-hangzhou`
             */
            RegionId: string;
        }[];
    };
}
