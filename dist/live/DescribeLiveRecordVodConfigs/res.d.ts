export interface DescribeLiveRecordVodConfigsResponse {
    /**
     * 分页页码。
     * @example `1`
     */
    PageNum: number;
    /**
     * 请求ID。
     * @example `5056369B-D337-499E-B8B7-B761BD37B08A`
     */
    RequestId: string;
    /**
     * 分页大小。
     * @example `1`
     */
    PageSize: number;
    /**
     * 总数。
     * @example `100`
     */
    Total: string;
    LiveRecordVodConfigs: {
        /**
         * 配置信息列表。
         */
        LiveRecordVodConfig: {
            /**
             * 存储地址。
             * @example `****-tjptr2vatm.oss-cn-shanghai.aliyuncs.com`
             */
            StorageLocation: string;
            /**
             * 直播流所属应用名称。
             * @example `liveApp****`
             */
            AppName: string;
            /**
             * 是否开启自动合并。取值：
             * - **ON**：开启
             * - **OFF**：关闭
             * @example `ON`
             */
            AutoCompose: string;
            /**
             * 按需录制，取值：
             * - **0**（默认值）：关闭。
             * - **1**：通过HTTP回调方式。
             * @example `0`
             */
            OnDemand: number;
            /**
             * 播流名称。
             * @example `liveStream****`
             */
            StreamName: string;
            /**
             * 创建时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2015-12-01T17:37:00Z`
             */
            CreateTime: string;
            /**
             * 点播转码组模板ID。
             * @example `e2d796d3bb5fd8049d32bff62f94****`
             */
            VodTranscodeGroupId: string;
            /**
             * 周期录制时长。单位：秒。默认值为**3600**，取值范围：**300~21600**。
             * @example `360`
             */
            CycleDuration: number;
            /**
             * 主播流域名。
             * @example `example.com`
             */
            DomainName: string;
            /**
             * 自动合并点播转码模板组ID。
             * > 如果DescribeLiveRecordVodConfigs接口的AutoCompose设置为ON，则返回本参数。
             * @example `dadfcaadde****`
             */
            ComposeVodTranscodeGroupId: string;
        }[];
    };
}
