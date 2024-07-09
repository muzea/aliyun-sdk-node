export interface DescribeResolverAvailableZonesResponse {
    /**
     * 唯一请求识别码
     * @example `23268E49-0C3E-4A2C-AB70-B4C7D092470B`
     */
    RequestId: string;
    /**
     * 可用区资源状况列表
     */
    AvailableZones: {
        /**
         * 可用区内资源状态：
         * - NORMAL: 正常
         * - SOLD_OUT: 已售罄
         * @example `NORMAL`
         */
        Status: string;
        /**
         * 可用区ID
         * @example `cn-zhangjiakou-a`
         */
        AzId: string;
    }[];
}
