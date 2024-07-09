export interface DescribeLiveProducerUsageDataResponse {
    BillProducerData: {
        /**
         * 用户导播台用量数据。
         */
        BillProducerDataItem: {
            /**
             * 用量域名。SplitBy指定为domain时，分组输出。
             * @example `example.com`
             */
            DomainName: string;
            /**
             * 用量实例。SplitBy指定为instance时，分组输出。
             * @example `a17d0184-462d-4630-b2a6-8c26dde2****`
             */
            Instance: string;
            /**
             * 高清分辨率时长，单位为分钟。
             * @example `6000`
             */
            OutputHdDuration: number;
            /**
             * 流畅分辨率时长，单位为分钟。
             * @example `1001`
             */
            OutputLdDuration: number;
            /**
             * 标准分辨率时长，单位为分钟。
             * @example `500`
             */
            OutputSdDuration: number;
            /**
             * 用量地区。SplitBy指定为region时，分组输出。
             * @example `cn-shanghai`
             */
            Region: string;
            /**
             * 时间片起始时刻。
             * @example `2018-09-30T00:00:00Z`
             */
            TimeStamp: string;
            /**
             * 转码高清分辨率时长，单位为分钟。
             * @example `6777`
             */
            TranHdDuration: number;
            /**
             * 转码流畅分辨率时长，单位为分钟。
             * @example `111`
             */
            TranLdDuration: number;
            /**
             * 转码标准分辨率时长，单位为分钟。
             * @example `666`
             */
            TranSdDuration: number;
            /**
             * 导播类型。SplitBy指定为type时，分组输出。
             * @example `slidelive`
             */
            Type: string;
        }[];
    };
    /**
     * 结束时间。
     * @example `2018-09-30T16:00:00Z`
     */
    EndTime: string;
    /**
     * 请求ID。
     * @example `C370DAF1-C838-4288-A1A0-9A87633D248E`
     */
    RequestId: string;
    /**
     * 开始时间。
     * @example `2018-10-31T15:59:59Z`
     */
    StartTime: string;
}
