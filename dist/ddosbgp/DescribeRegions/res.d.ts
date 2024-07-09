export interface DescribeRegionsResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 本次请求的ID。
     * @example `F7CA8B4E-FB15-4336-A351-8DC29D66EA82`
     */
    RequestId: string;
    /**
     * 是否调用成功。取值：
     * - **true**：表示调用成功。
     * - **false**：表示调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * DDoS原生防护支持防护的云资产的地域信息，包含地域ID和名称等。
     */
    Regions: {
        /**
         * 地域的英文名称。
         * @example `China (Hangzhou)`
         */
        RegionEnName: string;
        /**
         * 地域的中文名称。
         * @example `华东1（杭州）`
         */
        RegionName: string;
        /**
         * 地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
    }[];
}
