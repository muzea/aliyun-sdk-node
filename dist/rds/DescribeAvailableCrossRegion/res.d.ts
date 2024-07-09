export interface DescribeAvailableCrossRegionResponse {
    /**
     * 请求ID。
     * @example `39265F46-EC77-4036-8AC4-F035F32F6BE2`
     */
    RequestId: string;
    Regions: {
        /**
         * 所查询地域当前可以进行跨地域备份的目的地域列表。
         */
        Region: string[];
    };
}
