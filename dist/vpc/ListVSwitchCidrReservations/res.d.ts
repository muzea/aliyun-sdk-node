export interface ListVSwitchCidrReservationsResponse {
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
     * 交换机预留网段的列表。
     */
    VSwitchCidrReservations: {
        /**
         * 交换机预留网段所属的VPC。
         * @example `vpc-bp1wdz2pdhgurz1od****`
         */
        VpcId: string;
        /**
         * 交换机预留网段所属的交换机ID。
         * @example `vsw-25navfgbue4g****`
         */
        VSwitchId: string;
        /**
         * 交换机预留网段的实例ID。
         * @example `vcr-bp1m12saqteraw3rp****`
         */
        VSwitchCidrReservationId: string;
        /**
         * 交换机预留网段。
         * @example `192.168.1.64/28`
         */
        VSwitchCidrReservationCidr: string;
        /**
         * 交换机预留网段的名称。
         * @example `ReservationName`
         */
        VSwitchCidrReservationName: string;
        /**
         * 交换机预留网段的描述信息。
         * @example `ReservationDescription`
         */
        VSwitchCidrReservationDescription: string;
        /**
         * 交换机预留网段的IP版本。取值：
         * - **IPv4** （默认值）：IPv4版本。
         * - **IPv6**：IPv6版本。
         * @example `IPv4`
         */
        IpVersion: string;
        /**
         * 预留网段的创建时间。
         * @example `2023-03-14T10:02:37Z`
         */
        CreationTime: string;
        /**
         * 交换机预留网段的类型。取值： **prefix**（默认值），表示按段分配地址。
         * @example `prefix`
         */
        Type: string;
        /**
         * 交换机预留网段中可用的前缀网段（prefix）数量。
         * @example `10`
         */
        AvailableCidrCount: number;
        /**
         * 交换机预留网段中已使用的前缀网段（prefix）数量。
         * @example `6`
         */
        AssignedCidrCount: number;
        /**
         * 预留网段的状态。取值：
         * - **Assigning**：分配中。
         * - **Assigned**：已分配。
         * - **Releasing**：释放中。
         * - **Released**：已释放。
         * @example `Assigned`
         */
        Status: string;
        /**
         * 标签列表。
         */
        Tags: {
            /**
             * 标签键。
             * @example `FinanceDept`
             */
            Key: string;
            /**
             * 标签值。
             * @example `FinanceJoshua`
             */
            Value: string;
        }[];
    }[];
}
