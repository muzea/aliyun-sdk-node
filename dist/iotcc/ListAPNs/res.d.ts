export interface ListAPNsResponse {
    /**
     * 请求ID。
     * @example `CEF72CEB-54B6-4AE8-B225-F876FF7BA984`
     */
    RequestId: string;
    /**
     * 总列表条目数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    NextToken: string;
    /**
     * 分批次查询时每次显示的条目数。
     * @example `10`
     */
    MaxResults: number;
    /**
     * APN列表。
     */
    APNs: {
        /**
         * APN对应的运营商。取值：
         * - **telecom**：中国电信。
         * - **mobile**：中国移动。
         * - **unicom**：中国联通。
         * @example `mobile`
         */
        ISP: string;
        /**
         * 运营商APN ID。
         * @example `CMWAP`
         */
        APN: string;
        /**
         * APN名称。
         * @example `test`
         */
        Name: string;
        /**
         * APN的描述信息。
         * @example `test`
         */
        Description: string;
        /**
         * APN所属可用区列表。
         * 根据可用区列表，可以过滤出可使用的交换机列表。
         */
        ZoneList: string[];
        /**
         * 当前APN属性，取值：
         * - **trafficMirror**：流量镜像。
         * - **wildcardDomain**：泛域名。
         */
        FeatureList: string[];
    }[];
}
