export interface ListBasicAcceleratorsResponse {
    /**
     * 基础型全球加速实例总数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 分页查询时每页的行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `54B48E3D-DF70-471B-AA93-08E683A1B45`
     */
    RequestId: string;
    /**
     * 基础型全球加速实例列表。
     */
    Accelerators: {
        /**
         * 无效参数。
         * @example `None`
         */
        Type: string;
        /**
         * 基础型全球加速实例的状态。
         * - **init**：初始化。
         * - **active**：可用。
         * - **configuring**：配置中。
         * - **binding**：绑定中。
         * - **unbinding**：解绑中。
         * - **deleting**：删除中。
         * - **finacialLocked**：欠费锁定。
         * @example `active`
         */
        State: string;
        /**
         * 基础型全球加速实例创建时间戳。
         * Unix时间戳格式，单位为秒，表示从1970-01-01 00:00:00 UTC计算起的秒数。
         * @example `1637734547`
         */
        CreateTime: number;
        /**
         * 基础型全球加速实例绑定的基础带宽包的详情。
         */
        BasicBandwidthPackage: {
            /**
             * 基础带宽包的带宽值。单位：Mbps。
             * @example `2`
             */
            Bandwidth: number;
            /**
             * 基础带宽包的带宽类型。
             * - **Basic**：标准加速带宽。
             * - **Enhanced**：增强加速带宽。
             * - **Advanced**：精品加速带宽。
             * @example `Basic`
             */
            BandwidthType: string;
            /**
             * 基础带宽包的实例ID。
             * @example `gbwp-bp1d8xk8bg139j0fw****`
             */
            InstanceId: string;
        };
        /**
         * 基础型全球加速实例所属的地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 基础型全球加速实例计费方式。仅支持返回**PREPAY**（包年包月）。
         * @example `PREPAY`
         */
        InstanceChargeType: string;
        /**
         * 基础型全球加速实例ID。
         * @example `ga-bp17frjjh0udz4qz****`
         */
        AcceleratorId: string;
        /**
         * 基础型全球加速实例的描述信息。
         * @example `BasicAccelerator`
         */
        Description: string;
        /**
         * 基础性全球加速实例到期时间戳。
         * Unix时间戳格式，单位为秒，表示从1970-01-01 00:00:00 UTC计算起的秒数。
         * @example `1640326547`
         */
        ExpiredTime: number;
        /**
         * 基础型全球加速实例名称。
         * @example `BasicAccelerator`
         */
        Name: string;
        /**
         * 全球加速实例绑定的跨地域加速包的详情。
         * 仅国际站支持返回该数组。
         */
        CrossDomainBandwidthPackage: {
            /**
             * 跨地域加速带宽包的带宽值。单位：Mbps。
             * @example `2`
             */
            Bandwidth: number;
            /**
             * 跨地域加速带宽包的实例ID。
             * @example `gbwp-bp1d8xk8bg139j0fw****`
             */
            InstanceId: string;
        };
        /**
         * 基础型全球加速实例的终端节点组ID。
         * @example `epg-bp1dmlohjjz4kqaun****`
         */
        BasicEndpointGroupId: string;
        /**
         * 基础型全球加速实例的加速地域ID。
         * @example `ips-bp11ilwqjdkjeg9r7****`
         */
        BasicIpSetId: string;
        /**
         * 带宽计费方式。
         * - **BandwidthPackage**：按带宽包计费。
         * - **CDT**：按流量计费并由云数据传输（Cloud DataTransfer，简称CDT）统一结算。
         * - **CDT95**：按95计费并由CDT统一结算。该带宽计费方式仅白名单用户可用。
         * @example `BandwidthPackage`
         */
        BandwidthBillingType: string;
        /**
         * 基础型全球加速实例所属资源组ID。
         * @example `rg-aekzrnd67gq****`
         */
        ResourceGroupId: string;
        /**
         * 基础型全球加速实例的标签。
         */
        Tags: {
            /**
             * 基础型全球加速实例的标签键。
             * @example `Keytest`
             */
            Key: string;
            /**
             * 基础型全球加速实例的标签值。
             * @example `Valuetest`
             */
            Value: string;
        }[];
        /**
         * 基础全球加速实例是否开启跨境线路功能。取值：
         * - **true**：开启跨境线路功能，可以加速跨境线路。
         * - **false**：关闭跨境线路功能，不可以加速跨境线路。
         * @example `false`
         */
        CrossBorderStatus: boolean;
    }[];
    /**
     * 列表的页码。
     * @example `1`
     */
    PageNumber: number;
}
