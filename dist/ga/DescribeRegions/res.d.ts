export interface DescribeRegionsResponse {
    /**
     * 请求ID。
     * @example `611CB80C-B6A9-43DB-9E38-0B0AC3D9B58F`
     */
    RequestId: string;
    /**
     * 可用地域的集合。
     */
    Regions: {
        /**
         * 地域名称。
         * @example `杭州`
         */
        LocalName: string;
        /**
         * 全球加速实例所属的地域ID。仅返回**cn-hangzhou**。
         * @example `cn-hangzhou`
         */
        RegionId: string;
    }[];
}
