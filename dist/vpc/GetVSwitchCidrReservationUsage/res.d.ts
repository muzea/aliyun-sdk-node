export interface GetVSwitchCidrReservationUsageResponse {
    /**
     * 请求ID。
     * @example `54B48E3D-DF70-471B-AA93-08E683A1B45`
     */
    RequestId: string;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    NextToken: string;
    /**
     * 列表条目数。
     * @example `10`
     */
    TotalCount: number;
    /**
     * 分批次查询时每次显示的条目数。
     * @example `10`
     */
    MaxResults: number;
    /**
     * 已分配使用的交换机预留网段列表。
     */
    CidrReservationUsages: {
        /**
         * 交换机预留网段的实例ID。
         * @example `vcr-bp1m12saqteraw3rp****`
         */
        VSwitchCidrReservationId: string;
        /**
         * 预留网段所属的交换机ID。
         * @example `vsw-25navfgbue4g****`
         */
        VSwitchId: string;
        /**
         * 从预留网段分配使用的弹性网卡的实例ID。
         * @example `eni-bp14v2sdd3v8htln****`
         */
        ResourceId: string;
        /**
         * 预留网段分配使用的实例类型。取值：**NetworkInterface**，弹性网卡类型。
         * @example `NetworkInterface`
         */
        ResourceType: string;
        /**
         * 按段分配的预留网段实例ID。
         * @example `vcr-bp1m12saqteraw3rp****`
         */
        IpPrefixId: string;
        /**
         * 从当前预留网段中已分配给弹性网卡使用的前缀网段（prefix）。
         * @example `192.168.1.64/28`
         */
        IpPrefixCidr: string;
    }[];
}
