export interface DescribePubUserListBySubUserResponse {
    /**
     * 订阅端用户详细信息。
     */
    SubUserDetail: {
        /**
         * 用户ID。
         * @example `testuserid`
         */
        UserId: string;
        /**
         * 用户ID别称。
         * @example `yi****`
         */
        UserIdAlias: string;
        /**
         * 用户角色。
         */
        Roles: string[];
        /**
         * 地理位置信息，例如：浙江省-杭州市。
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
         * 最后一次离开频道的时间，使用UNIX时间戳表示，单位：秒。
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
         * SDK版本。
         * @example `1.0.0`
         */
        SdkVersion: string;
        /**
         * SDK版本列表，如1.0.0、1.1.1等。
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
         * 端类型，取值：WEB：Web端。NATIVE：本地端。
         * @example `NATIVE`
         */
        ClientType: string;
    };
    /**
     * 发布端用户详情信息。
     */
    PubUserDetailList: {
        /**
         * 用户ID。
         * @example `testuserid2`
         */
        UserId: string;
        /**
         * 用户ID别称。
         * @example `yi****`
         */
        UserIdAlias: string;
        /**
         * 用户角色，取值：SENDER：发起者。RECEIVER：接收者。
         */
        Roles: string[];
        /**
         * 地理位置信息，例如：浙江省-杭州市。
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
         * 最后一次离开频道的时间，使用UNIX时间戳表示，单位：秒。
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
         * SDK版本。
         * @example `1.0.0`
         */
        SdkVersion: string;
        /**
         * SDK版本列表，如1.0.0、1.1.1等。
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
         * 端类型，取值：WEB：Web端。NATIVE：本地端。
         * @example `NATIVE`
         */
        ClientType: string;
        /**
         * 用户通信流的Call ID。
         */
        CallIdList: string[];
    }[];
    /**
     * 通信状态。取值：
     * - **IN**：进行中。
     * - **OUT**：已结束。
     * @example `IN`
     */
    CallStatus: string;
    /**
     * 请求ID。
     * @example `231470C1-ACFB-4C9F-844F-4CFE1E3804C5`
     */
    RequestId: string;
}
