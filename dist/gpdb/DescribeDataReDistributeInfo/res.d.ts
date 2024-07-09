export interface DescribeDataReDistributeInfoResponse {
    /**
     * 数据重分布任务信息。
     */
    DataReDistributeInfo: {
        /**
         * 执行类型。固定为**immediate**，表示立即执行。
         * @example `immediate`
         */
        Type: string;
        /**
         * 暂不支持该参数。
         * @example `null`
         */
        StartTime: string;
        /**
         * 数据重分布进度，单位为%。
         * @example `33`
         */
        Progress: number;
        /**
         * 数据重分布预计剩余时间。
         * @example `00:01:28`
         */
        RemainTime: string;
        /**
         * 运行信息，如果出错会显示出错的详细信息。
         * @example `redistributing`
         */
        Message: string;
        /**
         * 数据重分布的状态。
         * @example `RUNNING`
         */
        Status: string;
    };
    /**
     * 请求ID。
     * @example `04836A02-ADC9-1AA7-AC36-DE5E048BF505`
     */
    RequestId: string;
}
