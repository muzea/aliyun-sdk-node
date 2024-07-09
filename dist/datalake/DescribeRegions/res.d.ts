export interface DescribeRegionsResponse {
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求id
     * @example `B7F4B621-E41E-4C84-B97F-42B5380A32BB`
     */
    RequestId: string;
    /**
     * 区域列表
     */
    Regions: {
        /**
         * 类型
         * @example `region`
         */
        Type: string;
        /**
         * 显示名称
         * @example `华东1（杭州）`
         */
        ShowName: string;
        /**
         * 名称
         * @example `cn-hangzhou`
         */
        Name: string;
        /**
         * 描述
         * @example `华东1`
         */
        Description: string;
    }[];
}
