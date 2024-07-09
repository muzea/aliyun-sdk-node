export interface DescribeLiveStreamsPublishListResponse {
    /**
     * 总页数。
     * @example `2`
     */
    TotalPage: number;
    /**
     * 分页的页码。
     * @example `2`
     */
    PageNum: number;
    /**
     * 每页大小。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example ` 40A4F36D-A7CC-473A-88E7-154F92242566`
     */
    RequestId: string;
    /**
     * 符合条件的总个数。
     * @example `11`
     */
    TotalNum: number;
    PublishInfo: {
        /**
         * 推流记录信息。
         */
        LiveStreamPublishInfo: {
            /**
             * CDN上行节点IP。
             * @example `10.175.XX.XX`
             */
            EdgeNodeAddr: string;
            /**
             * 推流完整URL地址。
             * @example `rtmp://demo.aliyundoc.com/liveApp****​/liveStream****`
             */
            PublishUrl: string;
            /**
             * 播流名称。
             * @example `liveStream****`
             */
            StreamName: string;
            /**
             * 推流域名或主播流域名。
             * @example `example.com`
             */
            DomainName: string;
            /**
             * 停止推流时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2015-12-02T03:11:19Z`
             */
            StopTime: string;
            /**
             * 若有转码，返回转码模板ID。
             * @example `ld`
             */
            TranscodeId: string;
            /**
             * 推流域名。
             * @example `demo.aliyundoc.com`
             */
            PublishDomain: string;
            /**
             * 播流所属应用名称。
             * @example `liveApp****`
             */
            AppName: string;
            /**
             * 开始推流时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2015-12-02T03:05:53Z`
             */
            PublishTime: string;
            /**
             * 推流类型。取值：
             * - **edge**：边缘推流。
             * - **center**：中心推流。
             * @example `edge`
             */
            PublishType: string;
            /**
             * 是否是转码流。
             * @example `yes`
             */
            Transcoded: string;
            /**
             * 主播IP。
             * @example `10.175.XX.XX`
             */
            ClientAddr: string;
            /**
             * 播流的URL。
             * @example `http://example.com/liveApp****​/liveStream****.flv`
             */
            StreamUrl: string;
        }[];
    };
}
