export interface DescribeLiveAudioAuditConfigResponse {
    /**
     * 请求ID。
     * @example `7BF95F2A-3B24-4CDE-9346-7F6FA86697A1`
     */
    RequestId: string;
    LiveAudioAuditConfigList: {
        /**
         * 直播语音审核配置列表。
         */
        LiveAudioAuditConfig: {
            /**
             * 播流所属的应用名称。
             * @example `liveApp****`
             */
            AppName: string;
            /**
             * 主播流域名。
             * @example `example.com`
             */
            DomainName: string;
            /**
             * 流名称。
             * @example `liveStream****`
             */
            StreamName: string;
            /**
             * 业务类型。可用于选择模型，默认值为域名。
             * @example `example.edu`
             */
            BizType: string;
            Scenes: {
                scene: string[];
            };
        }[];
    };
}
