export interface DescribeLivePrivateLineAvailGAResponse {
    LivePrivateLineAvailGAs: {
        /**
         * 全球加速实例配置详情。
         */
        LivePrivateLineAvailGA: {
            /**
             * 加速通道。
             * @example `ap-southeast-1`
             */
            AccelerationArea: string;
            /**
             * 加速类型，取值：
             * - play：播流加速。
             * - publish：推流加速。
             * @example `play`
             */
            AccelerationType: string;
            /**
             * 应用名称。
             * @example `live`
             */
            AppName: string;
            /**
             * 是否绑定到直播链路，取值：
             * - yes：已绑定。
             * - no：未绑定。
             * @example `yes`
             */
            BindingStatus: string;
            /**
             * 主播流域名。
             * @example `demo.aliyundoc.com`
             */
            DomainName: string;
            /**
             * 加速IP地址。
             * @example `127.0.0.1`
             */
            IP: string;
            /**
             * 全球加速实例ID。
             * @example `ga-bp1iovsdpf01ym9su****`
             */
            InstanceId: string;
            /**
             * 实例状态，取值：
             * - active：可用。
             * - inactive：不可用。
             * @example `active`
             */
            Status: string;
            /**
             * 直播流名称。
             * @example `testStream`
             */
            StreamName: string;
            /**
             * UID。
             * @example `1833220971116****`
             */
            Uid: string;
            /**
             * 直播中心。
             * @example `cn-shanghai`
             */
            VideoCenter: string;
        }[];
    };
    /**
     * 请求ID。
     * @example `C4865B85-664B-19D3-BB16-C62FB83C8226`
     */
    RequestId: string;
}
