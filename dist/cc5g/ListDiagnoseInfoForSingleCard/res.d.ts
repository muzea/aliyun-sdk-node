export interface ListDiagnoseInfoForSingleCardResponse {
    /**
     * 请求id。
     * @example `E1E237B1-EED7-55D5-AE5F-671E642DB3B5`
     */
    RequestId: string;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****
    `
     */
    NextToken: string;
    /**
     * 分批次查询时每次显示的条目数。取值范围：1~100。默认值：20。
     * @example `20`
     */
    MaxResults: number;
    /**
     * 诊断任务列表。
     */
    DiagnoseInfo: {
        /**
         * 5G高速上云实例id。
         * @example `cc5g-xxxx`
         */
        WirelessCloudConnectorId: string;
        /**
         * 网络诊断的源端卡的IP地址。
         * @example `10.176.78.61`
         */
        CardIp: string;
        /**
         * 网络诊断的源端卡的ID。
         * @example `89860477102170127555`
         */
        IccId: string;
        /**
         * 网络诊断的源类型。
         * @example `Iccid`
         */
        SourceType: string;
        /**
         * 网络诊断的源端卡IP或者卡ID。
         * @example `89860477102170127555`
         */
        Source: string;
        /**
         * 网路诊断的目的类型。取值：
         * - **IP**：表示诊断的目的类型是IP类型。
         * - **Domain**：表示诊断的目的类型是域名类型。
         * @example `Domain`
         */
        DestinationType: string;
        /**
         * 网络诊断的目的IP或者域名。
         * @example `www.xxx.com`
         */
        Destination: string;
        /**
         * 网络诊断的开始时间戳。单位：秒。
         * @example `1662307200000`
         */
        BeginTime: number;
        /**
         * 网络诊断的结束时间戳。单位：秒。
         * @example `1662307201200`
         */
        EndTime: number;
        /**
         * 网络诊断任务的状态。取值：
         * - **success**：表示诊断成功。
         * - **failed**：表示诊断失败。
         * - **diagnosing**：表示诊断中。
         * @example `failed`
         */
        Status: string;
        /**
         * 诊断任务入库的时间戳。单位：毫秒。
         * @example `1662307202400`
         */
        DiagnoseTime: number;
        /**
         * 网络诊断任务ID。
         * @example `diagnoseTask-bp2x7tzkdl655liw3mhbg`
         */
        DiagnoseTaskId: string;
    }[];
    /**
     * 总列表条目数。
     * @example `50`
     */
    TotalCount: number;
}
