export interface DescribeLiveUpVideoAudioInfoResponse {
    /**
     * 请求ID。
     * @example `BC858082-736F-4A25-867B-E5B67C85ACF7`
     */
    RequestId: string;
    UpItems: {
        /**
         * 返回信息中聚合推流数总计。
         */
        PublishItem: {
            AacHeaders: {
                /**
                 * 秒级音频AAC头，单位：次数。
                 */
                AacHeaders: {
                    /**
                     * 查询时间，用UNIX毫秒时间戳表示。
                     * @example `1538134750408`
                     */
                    Time: number;
                    /**
                     * 对应质量数据在查询时间的秒级指标值。
                     * @example `20`
                     */
                    Value: number;
                }[];
            };
            /**
             * 推流App名称。
             * @example `AppName`
             */
            AppName: string;
            AudioBitRate: {
                /**
                 * 秒级音频码率，单位：bit/s。
                 */
                AudioBitRate: {
                    /**
                     * 查询时间，用UNIX毫秒时间戳表示。
                     * @example `1538134750408`
                     */
                    Time: number;
                    /**
                     * 对应质量数据在查询时间的秒级指标值。
                     * @example `24552`
                     */
                    Value: number;
                }[];
            };
            AudioFrames: {
                /**
                 * 秒级音频帧率，单位：帧。
                 */
                AudioFrames: {
                    /**
                     * 查询时间，用UNIX毫秒时间戳表示。
                     * @example `1538134750408`
                     */
                    Time: number;
                    /**
                     * 对应质量数据在查询时间的秒级指标值。
                     * @example `23`
                     */
                    Value: number;
                }[];
            };
            AudioInterval: {
                /**
                 * 秒级最大音频帧间隔，单位：毫秒。
                 */
                AudioInterval: {
                    /**
                     * 查询时间，用UNIX毫秒时间戳表示。
                     * @example `1538134750408`
                     */
                    Time: number;
                    /**
                     * 对应质量数据在查询时间的秒级指标值。
                     * @example `254`
                     */
                    Value: number;
                }[];
            };
            AudioStamps: {
                /**
                 * 秒级音频时间戳，单位：毫秒。
                 */
                AudioStamps: {
                    /**
                     * 查询时间，用UNIX毫秒时间戳表示。
                     * @example `1538134750408`
                     */
                    Time: number;
                    /**
                     * 对应质量数据在查询时间的秒级指标值。
                     * @example `725053422`
                     */
                    Value: number;
                }[];
            };
            AvcHeaders: {
                /**
                 * 秒级音频AVC头，单位：次数。
                 */
                AvcHeaders: {
                    /**
                     * 查询时间，用UNIX毫秒时间戳表示。
                     * @example `1538134750408`
                     */
                    Time: number;
                    /**
                     * 对应质量数据在查询时间的秒级指标值。
                     * @example `11`
                     */
                    Value: number;
                }[];
            };
            /**
             * 音视频编码信息。
             * @example `H264/AAC`
             */
            CodecInfo: string;
            /**
             * 推流域名。
             * @example `example.com`
             */
            DomainName: string;
            ErrorFlags: {
                /**
                 * 推流断开错误码。
                 */
                ErrorFlags: {
                    /**
                     * 查询时间，用UNIX毫秒时间戳表示。
                     * @example `1538134750408`
                     */
                    Time: number;
                    /**
                     * 对应质量数据在查询时间的秒级指标值。
                     * @example `0`
                     */
                    Value: number;
                }[];
            };
            /**
             * 推流时长，单位为秒；"-"表示正在推流，暂无推流时长。
             * @example `-`
             */
            PublishInterval: string;
            /**
             * 推流端IP。
             * @example `cn397`
             */
            PublishIp: string;
            /**
             * 推流状态，分为 “1”: “正在推流” 或 “0”: “过去推流” 两种
             * @example `1`
             */
            PublishStatus: string;
            /**
             * 推流开始时间，UTC格式。
             * @example `2015-12-10T15:00:00Z`
             */
            PublishTime: string;
            /**
             * 推流结束时间，UTC格式。
             * @example `2015-12-10T15:10:00Z`
             */
            StopTime: string;
            /**
             * 流的名称。
             * @example `StreamName`
             */
            StreamName: string;
            /**
             * 每次推流的唯一ID。
             * @example `2.-395_37261_9848098_1538080899396`
             */
            UniqueId: string;
            VideoAndAudioStamp: {
                /**
                 * 秒级音视频时间戳差值，单位：毫秒。
                 */
                V_AStamp: {
                    /**
                     * 查询时间，用UNIX毫秒时间戳表示。
                     * @example `1538134750408`
                     */
                    Time: number;
                    /**
                     * 对应质量数据在查询时间的秒级指标值。
                     * @example `359`
                     */
                    Value: number;
                }[];
            };
            VideoBitRate: {
                /**
                 * 秒级视频码率，单位：bit/s。
                 */
                VideoBitRate: {
                    /**
                     * 查询时间，用UNIX毫秒时间戳表示。
                     * @example `1538134750408`
                     */
                    Time: number;
                    /**
                     * 对应质量数据在查询时间的秒级指标值。
                     * @example `3970160`
                     */
                    Value: number;
                }[];
            };
            VideoFrames: {
                /**
                 * 秒级视频帧率，单位：帧。
                 */
                VideoFrames: {
                    /**
                     * 查询时间，用UNIX毫秒时间戳表示。
                     * @example `1538134750408`
                     */
                    Time: number;
                    /**
                     * 对应质量数据在查询时间的秒级指标值。
                     * @example `29`
                     */
                    Value: number;
                }[];
            };
            VideoInterval: {
                /**
                 * 秒级最大视频帧间隔，单位：毫秒。
                 */
                VideoInterval: {
                    /**
                     * 查询时间，用UNIX毫秒时间戳表示。
                     * @example `1538134750408`
                     */
                    Time: number;
                    /**
                     * 对应质量数据在查询时间的秒级指标值。
                     * @example `278`
                     */
                    Value: number;
                }[];
            };
            VideoStamps: {
                /**
                 * 秒级视频时间戳，单位：毫秒。
                 */
                VideoStamps: {
                    /**
                     * 查询时间，用UNIX毫秒时间戳表示。
                     * @example `1538134750408`
                     */
                    Time: number;
                    /**
                     * 对应质量数据在查询时间的秒级指标值。
                     * @example `725053781`
                     */
                    Value: number;
                }[];
            };
        }[];
    };
}
