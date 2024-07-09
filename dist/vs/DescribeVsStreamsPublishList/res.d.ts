export interface DescribeVsStreamsPublishListResponse {
    /**
     * 总页数。
     * @example `1`
     */
    TotalPage: number;
    /**
     * 分页的页码。
     * @example `1`
     */
    PageNum: number;
    /**
     * 每页大小。
     * @example `3000`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `119F7639-4646-51A4-B6C1-300D391C0104`
     */
    RequestId: string;
    /**
     * 符合条件的总个数。
     * @example `200`
     */
    TotalNum: number;
    PublishInfo: {
        /**
         * 推流记录信息。
         */
        LiveStreamPublishInfo: {
            /**
             * CDN上行节点IP。
             * @example `192.168.0.1`
             */
            EdgeNodeAddr: string;
            /**
             * 推流完整URL地址。
             * @example `https://example.aliyundoc.com/xxxApp/3402000****320000001.m3u8`
             */
            PublishUrl: string;
            /**
             * 直播流名称。
             * @example `xxxStream`
             */
            StreamName: string;
            /**
             * 流所属加速域名。
             * @example `example.aliyundoc.com`
             */
            DomainName: string;
            /**
             * 停止推流时刻。 格式为UTC时间。
             * @example `2016-06-29T19:00:00Z`
             */
            StopTime: string;
            /**
             * 转码模板ID。
             * > 若转码过，会返回转码模板ID。
             * @example `3888920****8138204-cn-qingdao`
             */
            TranscodeId: string;
            /**
             * 推流域名。
             * @example `example.aliyundoc.com`
             */
            PublishDomain: string;
            /**
             * 流所属应用名称。
             * @example `xxxApp`
             */
            AppName: string;
            /**
             * 开始推流时刻。格式为UTC时间。
             * @example `2016-06-29T19:00:00Z`
             */
            PublishTime: string;
            /**
             * 推流类型。取值范围：
             * - edge（边缘推流）
             * - center（中心推流）
             * @example `center`
             */
            PublishType: string;
            /**
             * 是否为转码流。取值范围：
             * - yes（是）
             * - no（否）
             * @example `yes`
             */
            Transcoded: string;
            /**
             * 主播IP。
             * @example `192.168.0.1`
             */
            ClientAddr: string;
            /**
             * 直播流的URL。
             * @example `https://example.aliyundoc.com/xxxApp/3402000****320000001.m3u8`
             */
            StreamUrl: string;
        }[];
    };
}
