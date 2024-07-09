export interface ListLiveRecordTemplatesResponse {
    /**
     * 录制模板列表。
     */
    RecordTemplateList: {
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
         * 录制格式列表。
         */
        RecordFormatList: {
            /**
             * 格式。
             * @example `m3u8`
             */
            Format: string;
            /**
             * 单个切片时长。单位：秒。
             * @example `30`
             */
            SliceDuration: number;
            /**
             * OSS存储的录制文件名。
             * @example `record/{JobId}/{Sequence}_{EscapedStartTime}_{EscapedEndTime}`
             */
            OssObjectPrefix: string;
            /**
             * TS切片名称。
             * @example `record/{JobId}/{UnixTimestamp}_{Sequence}`
             */
            SliceOssObjectPrefix: string;
            /**
             * 周期录制时间。单位：秒。
             * @example `21600`
             */
            CycleDuration: number;
        }[];
        /**
         * 创建时间。
         * @example `2022-07-20T02:48:58Z`
         */
        CreateTime: string;
    }[];
    /**
     * 请求ID。
     * @example `BEA98A0C-7870-15FE-B96F-8880BB600A2C`
     */
    RequestId: string;
    /**
     * 总记录数。
     * @example `5`
     */
    TotalCount: number;
    /**
     * 分页的页码。
     * @example `1`
     */
    PageNo: number;
    /**
     * 分页大小。
     * @example `10`
     */
    PageSize: number;
    /**
     * 排序参数，默认按创建时间倒序。
     * @example `desc`
     */
    SortBy: string;
}
