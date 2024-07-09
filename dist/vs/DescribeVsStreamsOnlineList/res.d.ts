export interface DescribeVsStreamsOnlineListResponse {
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
     * 每页显示的条数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `B31FC4AD-3592-573E-8063-878F722B322A`
     */
    RequestId: string;
    /**
     * 符合条件的总个数。
     * @example `10`
     */
    TotalNum: number;
    OnlineInfo: {
        /**
         * 正在推送流的信息。
         */
        LiveStreamOnlineInfo: {
            /**
             * 开始推流时刻，UTC时间。
             * @example `2015-12-02T06:58:04Z`
             */
            PublishTime: string;
            /**
             * 流所属应用名称。
             * @example `xxxApp`
             */
            AppName: string;
            /**
             * 推流类型。取值范围：
             * - edge（边缘推流）
             * - center（中心推流）
             * @example `edge`
             */
            PublishType: string;
            /**
             * 推流完整URL地址。
             * @example `rtmp://example.com/xchen`
             */
            PublishUrl: string;
            /**
             * 是否为转码流。取值范围：
             * - yes（是）
             * - no（否）
             * @example `no`
             */
            Transcoded: string;
            /**
             * 流名称。
             * @example `testxchen_small`
             */
            StreamName: string;
            /**
             * 流所属加速域名。
             * @example `example.com`
             */
            DomainName: string;
            /**
             * 转码模板ID。
             * > - 若转码过，会返回转码模板ID。
             * > - 对于原始流，返回当前AppName下配置的转码模板ID列表，用英文逗号（,）分隔。
             * @example `123`
             */
            TranscodeId: string;
            /**
             * 推流域名。
             * @example `push.example.com`
             */
            PublishDomain: string;
        }[];
    };
}
