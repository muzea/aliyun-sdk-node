export interface ListVSwitchCidrReservationsRequest {
    /**
     * 标签信息。
     */
    "Tags"?: {
        /**
         * 资源的标签键。最多支持输入20个标签键。如需传入该值，则不能输入空字符串。
         * 一个标签键最多支持128个字符，不能以aliyun和acs:开头，不能包含http://或者https://。
         * @example `FinanceDept`
         */
        Key: string;
        /**
         * 资源的标签值。最多支持输入20个标签值。如需传入该值，可以输入空字符串。
         * 最多支持128个字符，不能以aliyun和acs:开头，不能包含http://或者https://。
         * @example `FinanceJoshua`
         */
        Value: string;
    }[];
    /**
     * 要查询的交换机预留网段所属的交换机ID。
     * @example `vsw-25navfgbue4g****`
     */
    "VSwitchId"?: string;
    /**
     * 交换机预留网段的实例ID。最多支持输入10个预留网段。
     */
    "VSwitchCidrReservationIds"?: string[];
    /**
     * 交换机预留网段的类型。取值：**prefix**，表示按段分配地址。
     * > 用户及云服务自动为弹性网卡ENI（Elastic Network Interface）分配网段时，必须从预留地址段分配。如果预留地址段的地址已经分配完，则系统会报错。
     * @example `prefix`
     */
    "VSwitchCidrReservationType"?: string;
    /**
     * 交换机预留网段的IP版本。取值：
     * - **IPv4** （默认值）：IPv4版本。
     * - **IPv6**：IPv6版本。
     * @example `IPv4`
     */
    "IpVersion"?: string;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的NextToken值。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    "NextToken"?: string;
    /**
     * 分批次查询时每次显示的条目数。取值范围：**1**~**100**，默认值为**10**。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 交换机所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
