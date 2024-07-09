export interface DescribeSupportedRegionsResponse {
    /**
     * 请求ID。
     * @example `B21DC47E-8928-199A-9F32-36D45E4693B4`
     */
    RequestId: string;
    /**
     * 是否成功，取值如下：
     * - true：成功
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回的地域数量
     * @example `10`
     */
    TotalCount: number;
    /**
     * 总页数
     * @example `2`
     */
    TotalPage: number;
    /**
     * 当前页数。
     * @example `1`
     */
    PageIndex: number;
    /**
     * 每页包含的地域数
     * @example `10`
     */
    PageSize: number;
    /**
     * 地域信息列表。
     */
    Regions: {
        /**
         * 地域ID。
         * @example `cn-beijing`
         */
        Region: string;
        /**
         * 地域名称
         * @example `华北2（北京）`
         */
        RegionName: string;
    }[];
}
