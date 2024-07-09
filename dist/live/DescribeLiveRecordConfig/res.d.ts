export interface DescribeLiveRecordConfigResponse {
    /**
     * 分页的页码。
     * @example `5`
     */
    PageNum: number;
    /**
     * 请求ID。
     * @example `5056369B-D337-499E-B8B7-B761BD37B08A`
     */
    RequestId: string;
    /**
     * 排序。
     * @example `desc`
     */
    Order: string;
    /**
     * 总页数。
     * @example `20`
     */
    TotalPage: number;
    /**
     * 每页大小。
     * @example `10`
     */
    PageSize: number;
    /**
     * 符合条件的总个数。
     * @example `12`
     */
    TotalNum: number;
    LiveAppRecordList: {
        /**
         * 录制配置列表。
         */
        LiveAppRecord: {
            /**
             * 计划录制结束时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2018-11-08T03:49:18Z`
             */
            EndTime: string;
            /**
             * 计划录制开始时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2018-11-08T02:49:18Z`
             */
            StartTime: string;
            /**
             * 播流所属应用名称。
             * @example `liveApp****`
             */
            AppName: string;
            /**
             * 直播流名称。
             * @example `liveStream****`
             */
            StreamName: string;
            /**
             * 断流拼接时长。
             * 直播断流时长超过设定的拼接时长后，将会生成新文件，断流拼接时长支持15~21600秒。
             * @example `180`
             */
            DelayTime: number;
            /**
             * 创建时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2016-05-20T09:33:38Z`
             */
            CreateTime: string;
            /**
             * 按需录制。取值：
             * - **0**：关闭。
             * - **1**：通过HTTP回调方式。
             * - **2**：通过推流参数方式。
             * - **7**：默认不录制，可以通过[RealTimeRecordCommand](~~85907~~)接口手动控制录制开启或停止。
             * >当OnDemand取值为**1**时，需要先通过[AddLiveRecordNotifyConfig](~~51831~~)接口配置OnDemandUrl，否则默认不录制。
             * @example `0`
             */
            OnDemond: number;
            /**
             * OSS存储Bucket名称。
             * @example `liveBucket****`
             */
            OssBucket: string;
            /**
             * 主播流域名。
             * @example `example.com`
             */
            DomainName: string;
            /**
             * OSS存储的Endpoint名称。
             * @example `cn-oss-****.aliyuncs.com`
             */
            OssEndpoint: string;
            RecordFormatList: {
                /**
                 * 格式列表。
                 */
                RecordFormat: {
                    /**
                     * 转码流录制单个切片时长。单位：秒。
                     * @example `30`
                     */
                    SliceDuration: number;
                    /**
                     * 周期录制时间。单位：秒。
                     * @example `3600`
                     */
                    CycleDuration: number;
                    /**
                     * 切片名称。
                     * @example `record/{liveApp****}/{liveStream****}/{UnixTimestamp}`
                     */
                    SliceOssObjectPrefix: string;
                    /**
                     * 录制文件名称。
                     * @example `record/{liveApp****}/{liveStream****}`
                     */
                    OssObjectPrefix: string;
                    /**
                     * 格式。
                     * @example `M3U8`
                     */
                    Format: string;
                }[];
            };
            TranscodeRecordFormatList: {
                /**
                 * 转码流录制格式列表。
                 */
                RecordFormat: {
                    /**
                     * 转码流录制单个切片时长。单位：秒。
                     * @example `30`
                     */
                    SliceDuration: number;
                    /**
                     * 周期录制时间。单位：秒。
                     * @example `3600`
                     */
                    CycleDuration: number;
                    /**
                     * 转码流录制切片名称。
                     * @example `record/{liveApp****}/{liveStream****}/{UnixTimestamp}`
                     */
                    SliceOssObjectPrefix: string;
                    /**
                     * 转码流录制文件名称。
                     * @example `record/{liveApp****}/{liveStream****}`
                     */
                    OssObjectPrefix: string;
                    /**
                     * 转码流录制格式。
                     * @example `M3U8`
                     */
                    Format: string;
                }[];
            };
            TranscodeTemplates: {
                /**
                 * 转码模板。
                 */
                Templates: string[];
            };
        }[];
    };
}
