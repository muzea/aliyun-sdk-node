export interface DescribeEipMonitorDataResponse {
    /**
     * 请求ID。
     * @example `C8B26B44-0189-443E-9816-D951F59623A9`
     */
    RequestId: string;
    EipMonitorDatas: {
        /**
         * EIP监控数据的详细信息。
         */
        EipMonitorData: {
            /**
             * 流出的流量。单位：Byte。
             * @example `343`
             */
            EipTX: number;
            /**
             * 包数量。
             * @example `3434`
             */
            EipPackets: number;
            /**
             * 平均带宽值，该值等于**EipFlow**​/**Period**。单位：Byte/s。
             * 其中**Period**默认值为**60**，单位为秒。
             * @example `10`
             */
            EipBandwidth: number;
            /**
             * 查询监控信息的时间戳。ISO8601格式，如`2020-01-21T09:50:23Z`。
             * @example `2020-01-21T09:50:23Z`
             */
            TimeStamp: string;
            /**
             * 流入和流出的流量总和。单位：Byte。
             * @example `465`
             */
            EipFlow: number;
            /**
             * 流入的流量。单位：Byte。
             * @example `122`
             */
            EipRX: number;
        }[];
    };
}
