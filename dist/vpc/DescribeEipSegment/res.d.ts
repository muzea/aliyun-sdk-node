export interface DescribeEipSegmentResponse {
    /**
     * 分页查询时每页的条目数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `F7A6301A-64BA-41EC-8284-8F4838C15D1F`
     */
    RequestId: string;
    /**
     * 列表的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 列表条目数。
     * @example `10`
     */
    TotalCount: number;
    EipSegments: {
        /**
         * 连续EIP组详情。
         */
        EipSegment: {
            /**
             * 连续EIP组的创建时间。按照ISO8601标准表示，并需要使用UTC+0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
             * @example `2020-03-06T12:30:07Z`
             */
            CreationTime: string;
            /**
             * 连续EIP组的状态。
             * - **Allocating**：分配中。
             * - **Allocated**：已分配。
             * - **Releasing**：释放中。
             * @example `Allocated`
             */
            Status: string;
            /**
             * 连续EIP组的描述。
             * @example `MyEipSegment`
             */
            Descritpion: string;
            /**
             * 连续EIP组的实例ID。
             * @example `eipsg-2zett8ba055tbsxme****`
             */
            InstanceId: string;
            /**
             * 连续EIP组中包含的IP个数。
             * @example `16`
             */
            IpCount: string;
            /**
             * 连续EIP组名称。
             * @example `MyEipSegment`
             */
            Name: string;
            /**
             * 连续EIP组的网段与掩码。
             * @example `161.xx.xx.32/28`
             */
            Segment: string;
            /**
             * 连续EIP组所属的地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 连续EIP组的可用区。
             * @example `cn-hangzhou-a`
             */
            Zone: string;
        }[];
    };
}
