export interface ListDiagnoseInfoForSingleCardResponse {
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
     * 分批次查询时每次显示的条目数。
     * @example `20`
     */
    MaxResults: number;
    /**
     * 诊断结果列表。
     */
    DiagnoseInfo: {
        /**
         * 网络诊断的云连接器实例ID。
         * @example `iotcc-smy9a5ockzp08n****`
         */
        IoTCloudConnectorId: string;
        /**
         * 网络诊断的源端卡的IP地址。
         * @example `169.254.XX.XX`
         */
        CardIp: string;
        /**
         * 网络诊断的源端卡的ID。
         * @example `89860477*******27546`
         */
        IccId: string;
        /**
         * 网络诊断的源类型。取值：
         * - **卡IP**：表示通过物联网卡的卡IP进行网络诊断。
         * - **卡ID**：表示通过物联网卡的卡ID进行网络诊断。
         * @example `卡IP`
         */
        SourceType: string;
        /**
         * 网络诊断的源端卡IP或者卡ID。
         * @example `169.254.XX.XX`
         */
        Source: string;
        /**
         * 网路诊断的目的类型。取值：
         * - **IP**：表示诊断的目的类型是IP类型。
         * - **域名**：表示诊断的目的类型是域名类型。
         * @example `IP`
         */
        DestinationType: string;
        /**
         * 网络诊断的目的IP或者域名。
         * @example `114.114.XX.XX`
         */
        Destination: string;
        /**
         * 网络诊断的开始时间戳。单位：秒。
         * @example `1643077466`
         */
        BeginTime: number;
        /**
         * 网络诊断的结束时间戳。单位：秒。
         * @example `1643077666`
         */
        EndTime: number;
        /**
         * 诊断任务的状态。取值：
         * - **completed**：已完成。
         * - **diagnosing**：诊断中。
         * @example `completed`
         */
        Status: string;
        /**
         * 诊断任务入库的时间戳。单位：毫秒。
         * @example `1649669904`
         */
        DiagnoseTime: number;
        /**
         * 网络诊断任务ID。
         * @example `diagnoseTask-bp2qhwdp2n9x6zkvq****`
         */
        TaskId: string;
    }[];
    /**
     * 总列表条目数。
     * @example `10`
     */
    TotalCount: number;
}
