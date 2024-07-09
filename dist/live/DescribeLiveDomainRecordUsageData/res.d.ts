export interface DescribeLiveDomainRecordUsageDataResponse {
    /**
     * 结束时间。
     * @example `2021-05-10T21:00:00Z`
     */
    EndTime: string;
    /**
     * 起始时间。
     * @example `2021-05-10T20:00:00Z`
     */
    StartTime: string;
    /**
     * 请求ID。
     * @example `4B460F8B-993C-4F48-B98A-910811DEBFEB`
     */
    RequestId: string;
    RecordUsageData: {
        /**
         * 每个时间间隔的录制用量数据。
         */
        DataModule: {
            /**
             * 录制文件类型。
             * 请求参数SplitBy取值包含`record_fmt`时有效。
             * @example `MP4`
             */
            Type: string;
            /**
             * 主播流域名。
             * 请求参数SplitBy取值包含`domain`时返回。
             * @example `example.com`
             */
            Domain: string;
            /**
             * 地区。
             * @example `cn-shanghai`
             */
            Region: string;
            /**
             * 起始时刻。
             * @example `2021-05-10T20:00:00Z`
             */
            TimeStamp: string;
            /**
             * 录制时长用量，单位：秒。
             * @example `3560`
             */
            Duration: number;
            /**
             * 峰值路数。
             * @example `1`
             */
            Count: number;
        }[];
    };
}
