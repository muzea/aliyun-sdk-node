export interface DescribeCallResponse {
    /**
     * 通信基本信息。
     */
    CallInfo: {
        /**
         * App ID。
         * @example `testappid`
         */
        AppId: string;
        /**
         * 频道ID。
         * @example `123456`
         */
        ChannelId: string;
        /**
         * 通信状态。取值：
         * - **IN**：进行中。
         * - **OUT**：已结束。
         * @example `IN`
         */
        CallStatus: string;
        /**
         * 创建频道时间，使用UNIX时间戳表示，单位：秒。
         * @example `1615860711`
         */
        CreatedTs: number;
        /**
         * 释放频道时间，使用UNIX时间戳表示，单位：秒。
         * @example `1615860811`
         */
        DestroyedTs: number;
        /**
         * 频道持续时长，单位：秒。
         * @example `100`
         */
        Duration: number;
    };
    /**
     * 用户详情列表。
     */
    UserDetailList: {
        /**
         * 用户ID。
         * @example `testuserid`
         */
        UserId: string;
        /**
         * 用户角色。
         */
        Roles: string[];
        /**
         * 地理位置信息，例如：北京市-北京市。
         * @example `浙江省-杭州市`
         */
        Location: string;
        /**
         * 在线时段信息。
         */
        OnlinePeriods: {
            /**
             * 加入频道时间，使用UNIX时间戳表示，单位：秒。
             * @example `1614936817`
             */
            JoinTs: number;
            /**
             * 离开频道时间，使用UNIX时间戳表示，单位：秒。
             * @example `1614936817`
             */
            LeaveTs: number;
        }[];
        /**
         * 第一次加入频道的时间，使用UNIX时间戳表示，单位：秒。
         * @example `1614936817`
         */
        CreatedTs: number;
        /**
         * 最后一次离开频道的时间，使用UNIX时间戳表示，单位：秒。通信未结束时值为空。
         * @example `1614936817`
         */
        DestroyedTs: number;
        /**
         * 在线时长，单位：秒。
         * @example `0`
         */
        OnlineDuration: number;
        /**
         * 通信时长，首次进入到最后离开，单位：秒。
         * @example `0`
         */
        Duration: number;
        /**
         * SDK版本，如1.0.0、1.1.1等
         * @example `1.0.0`
         */
        SdkVersion: string;
        /**
         * SDK版本列表，如1.0.0、1.1.1等
         */
        SdkVersionList: string[];
        /**
         * 平台类型：若用户客户端为WEB则是浏览器类型，若客户端为NATIVE则是操作系统类型。
         * @example `iOS`
         */
        Os: string;
        /**
         * 平台类型：若用户客户端为WEB则是浏览器类型，若客户端为NATIVE则是操作系统类型。
         */
        OsList: string[];
        /**
         * 网络类型，如WiFi，4G等。
         * @example `4G`
         */
        Network: string;
        /**
         * 网络类型，如WiFi，4G等。
         */
        NetworkList: string[];
        /**
         * 通话体验。取值：
         * - **GOOD**：良好。
         * - **BAD**：欠佳。
         * @example `GOOD`
         */
        CallExp: string;
        /**
         * 时长统计数据。
         */
        DurMetricStatData: {
            /**
             * 发布音频时长，单位：秒。
             * @example `0`
             */
            PubAudio: number;
            /**
             * 订阅音频时长，单位：秒。
             * @example `0`
             */
            SubAudio: number;
            /**
             * 发布360P视频时长，单位：秒。
             * @example `0`
             */
            PubVideo360: number;
            /**
             * 订阅360P视频时长，单位：秒。
             * @example `0`
             */
            SubVideo360: number;
            /**
             * 发布720P视频时长，单位：秒。
             * @example `0`
             */
            PubVideo720: number;
            /**
             * 订阅720P视频时长，单位：秒。
             * @example `0`
             */
            SubVideo720: number;
            /**
             * 发布1080P视频时长，单位：秒。
             * @example `0`
             */
            PubVideo1080: number;
            /**
             * 订阅1080P视频时长，单位：秒。
             * @example `0`
             */
            SubVideo1080: number;
            /**
             * 发布屏幕共享时长，单位：秒。
             * @example `0`
             */
            PubVideoScreenShare: number;
            /**
             * 订阅屏幕共享时长，单位：秒。
             * @example `0`
             */
            SubVideoScreenShare: number;
        };
    }[];
    /**
     * 请求ID。
     * @example `231470C1-ACFB-4C9F-844F-4CFE1E3804C5`
     */
    RequestId: string;
}
