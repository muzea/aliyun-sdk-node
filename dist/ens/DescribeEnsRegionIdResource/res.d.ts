export interface DescribeEnsRegionIdResourceResponse {
    EnsRegionIdResources: {
        /**
         * 返回数据列表，详见返回示例（JSON格式）EnsRegionIdResources对象数组。
         */
        EnsRegionIdResource: {
            /**
             * 区域，取值：West。
             * @example `West`
             */
            Area: string;
            /**
             * 区域的Code
             * @example `300100`
             */
            AreaCode: string;
            /**
             * 业务处理日期。
             * @example `2019-10-30`
             */
            BizDate: string;
            /**
             * 节点。
             * @example `cn-hangzhou-telecom`
             */
            EnsRegionId: string;
            /**
             * 节点名称
             * @example `南京移动`
             */
            EnsRegionIdName: string;
            /**
             * 实例数量。
             * @example `10`
             */
            InstanceCount: number;
            /**
             * 实例的公网带宽，单位：Bits/s。
             * @example `100`
             */
            InternetBandwidth: number;
            /**
             * 运营商，取值如下所示：
             * - cmcc：移动。
             * - unicom：联通。
             * - telecom：电信。
             * - multiCarrier：多线。
             * @example `cmcc`
             */
            Isp: string;
            /**
             * VCpu数量。
             * @example `10`
             */
            VCpu: number;
        }[];
    };
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 输入时设置的每页行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `476600B1-C9E2-4245-A26F-DC7EA8071425`
     */
    RequestId: string;
    /**
     * 查询到的数据总数。
     * @example `58`
     */
    TotalCount: number;
}
