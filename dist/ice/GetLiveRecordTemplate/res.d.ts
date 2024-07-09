export interface GetLiveRecordTemplateResponse {
    /**
     * 录制模板。
     */
    RecordTemplate: {
        /**
         * 录制格式列表。
         */
        RecordFormatList: {
            /**
             * 格式。
             * @example `m3u8`
             */
            Format: string;
            /**
             * OSS存储的录制文件名。
             * @example `record/{JobId}/{Sequence}{EscapedStartTime}{EscapedEndTime}`
             */
            OssObjectPrefix: string;
            /**
             * TS切片名称。
             * @example `record/{JobId}/{UnixTimestamp}_{Sequence}`
             */
            SliceOssObjectPrefix: string;
            /**
             * 周期录制时长。单位：秒。不填则默认为6小时。
             * @example `7200`
             */
            CycleDuration: number;
            /**
             * 单个切片时长。单位：秒。
             * @example `30`
             */
            SliceDuration: number;
        }[];
        /**
         * 创建时间。
         * @example `2022-07-20T03:26:36Z`
         */
        CreateTime: string;
        /**
         * 最后修改时间。
         * @example `2022-07-20T03:26:36Z`
         */
        LastModified: string;
        /**
         * 模板ID。
         * @example `69e1f9fe-1e97-11ed-ba64-0c42a1b73d66`
         */
        TemplateId: string;
        /**
         * 模板名称。
         * @example `test template`
         */
        Name: string;
        /**
         * 模板类型。
         * @example `custom`
         */
        Type: string;
    };
    /**
     * 请求ID。
     * @example `C892855F-95DF-50D6-A28C-279ABDB76810`
     */
    RequestId: string;
}
