export interface DescribeIPv6TranslatorsResponse {
    /**
     * 每页包含的条目数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `54B48E3D-DF70-471B-AA93-08E683A1B45`
     */
    RequestId: string;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 列表条目数。
     * @example `1`
     */
    TotalCount: number;
    Ipv6Translators: {
        /**
         * 查询到的IPv6转换服务实例列表。
         */
        Ipv6Translator: {
            /**
             *  IPv6转换服务实例的状态。
             * @example `active`
             */
            Status: string;
            /**
             *  IPv6转换服务实例的规格。
             * @example `small`
             */
            Spec: string;
            /**
             * IPv6转换服务实例的创建时间的时间戳。
             * @example `1537151540000`
             */
            CreateTime: number;
            /**
             * IPv6转换服务实例的付费类型。
             * - **Prepay**：包年包月。
             * - **Postpay**：按量计费。
             * @example `Prepay`
             */
            PayType: string;
            /**
             *  IPv6转换服务实例的ID。
             * @example `ipv6trans-bp1858ys*****`
             */
            Ipv6TranslatorId: string;
            /**
             * 分配的IPv6转换服务实例的IPv4地址。
             * @example `47.99.XX.XX`
             */
            AllocateIpv4Addr: string;
            /**
             * IPv6转换服务实例可用的带宽。
             * @example `1`
             */
            AvailableBandwidth: string;
            /**
             * IPv6转换服务实例的地域。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * IPv6转换服务实例的到期时间的时间戳。
             * @example `1539792000000`
             */
            EndTime: number;
            /**
             * IPv6转换服务实例的描述。
             * @example `descriptionforinstance`
             */
            Description: string;
            /**
             * IPv6转换服务实例的带宽。单位：Mbps。
             * @example `1`
             */
            Bandwidth: number;
            /**
             * IPv6转换服务实例的业务状态。
             * - **Normal**：正常。
             * - **FinancialLocked**：被锁定。
             * @example `Normal`
             */
            BusinessStatus: string;
            /**
             * 分配的IPv6转换服务实例的IPv6地址。
             * @example `2400:3200:1600::XXXX`
             */
            AllocateIpv6Addr: string;
            /**
             *  IPv6转换服务实例的名称。
             * @example `test`
             */
            Name: string;
            Ipv6TranslatorEntryIds: {
                /**
                 * IPv6转换服务实例的转换映射条目ID列表。
                 */
                Ipv6TranslatorEntryId: string[];
            };
        }[];
    };
}
