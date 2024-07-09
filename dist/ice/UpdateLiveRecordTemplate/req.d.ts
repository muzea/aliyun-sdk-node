export interface UpdateLiveRecordTemplateRequest {
    /**
     * 录制格式列表
     */
    "RecordFormat": {
        /**
         * 格式。
         * >如果选择m3u8格式，必须同时设置请求参数SliceOssObjectPrefix和SliceDuration。
         * @example `m3u8`
         */
        Format: string;
        /**
         * 单个切片时长。单位：秒。
         * >当Format（格式）设为m3u8时，本参数才有效。
         * 不填则默认为30秒。取值范围：5s~30s。
         * @example `30`
         */
        SliceDuration: number;
        /**
         * OSS存储的录制文件名。
         * - 文件名小于256字节，支持变量匹配，包含{JobId}、{Sequence}、{StartTime}、{EndTime}、{EscapedStartTime}、{EscapedEndTime}。
         * - 参数值必须要有{StartTime}或{EscapedStartTime}和{EndTime}或{EscapedEndTime}。
         * @example `record/{JobId}/{Sequence}_{EscapedStartTime}_{EscapedEndTime}`
         */
        OssObjectPrefix: string;
        /**
         * TS切片名称。
         * >当Format（格式）设为m3u8时，本参数才需要配置。
         * 默认30秒一片，小于256字节，支持变量匹配，包含{JobId}、{UnixTimestamp}、{Sequence}。
         * 参数值必须包含{UnixTimestamp}和{Sequence}变量。
         * @example `record/{JobId}/{UnixTimestamp}_{Sequence}
        `
         */
        SliceOssObjectPrefix: string;
        /**
         * 周期录制时长。单位：秒。不填则默认为6小时。
         * > - 如果在一个录制周期内，直播流发生了断流，但是在3分钟内，该直播流又正常推流，那么仍会在同一个录制文件中继续录制。
         * - 一条直播流必须断流超过3分钟，才会生成最后一个录制文件。如果您需要修改默认的3分钟断流时间，可以提交工单进行修改。
         * @example `3600`
         */
        CycleDuration: number;
    }[];
    /**
     * 模板ID。
     * @example `69e1f9fe-1e97-11ed-ba64-0c42a1b73d66`
     */
    "TemplateId": string;
    /**
     * 模板名称。
     * @example `test template`
     */
    "Name": string;
}
