export interface DescribeLiveStreamTranscodeMetricDataResponse {
    /**
     * 域名名称。
     * @example `example.com`
     */
    DomainName: string;
    /**
     * 结束时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2023-06-11T02:46:40Z`
     */
    EndTime: string;
    /**
     * 分页查询token，每次查询最多返回5000行数据，当要查询的数据超过5000行时，响应数据会提供下次查询数据的起始索引。
     * 请求时传入该token，将从上一次查询结束的下一行继续查询未获取的数据。
     * @example `UjsM9x3aVcJi9a0-ArwJUTTC67C***37C0=`
     */
    NextPageToken: string;
    /**
     * 返回数据行数。
     * @example `5000`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `16A96B9A-F203-4EC5-8E43-CB92E68F4CD8`
     */
    RequestId: string;
    /**
     * 起始时间。格式为：yyyy-MM-ddTHH:mm:ssZ（UTC时间）。
     * @example `2023-06-11T03:46:40Z
    `
     */
    StartTime: string;
    StreamDetailData: {
        /**
         * 返回数据组。
         */
        StreamData: {
            /**
             * 应用名称。
             * @example `app`
             */
            AppName: string;
            /**
             * 时长。单位：秒。
             * @example `300`
             */
            Duration: number;
            /**
             * 帧率。
             * @example `high`
             */
            Fps: string;
            /**
             * 地区。
             * @example `cn-shanghai`
             */
            Region: string;
            /**
             * 分辨率。取值：
             * - 2K：2K。
             * - 4K：4K。
             * - LD：流畅。
             * - SD：标清。
             * - HD：高清。
             * - def：音频。
             * @example `4K`
             */
            Resolution: string;
            /**
             * 流名称。
             * @example `stream`
             */
            StreamName: string;
            /**
             * 时间片起始时刻。
             * @example `2023-06-11T02:45:00Z`
             */
            TimeStamp: string;
            /**
             * 转码类型。取值：
             * - H264STD：H.264普通转码。
             * - H264NBHD：H.264窄带高清转码。
             * - H265STD：H.265普通转码。
             * - AUDIO：音频转码。
             * @example `H264STD`
             */
            TranscodeType: string;
        }[];
    };
}
