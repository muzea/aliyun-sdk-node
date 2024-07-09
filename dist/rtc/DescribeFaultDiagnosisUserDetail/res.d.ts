export interface DescribeFaultDiagnosisUserDetailResponse {
    /**
     * 通信基本信息，QueryCallUserInfo=false时返回。
     */
    CallInfo: {
        /**
         * App ID。
         * @example `testappid`
         */
        AppId: string;
        /**
         * 频道ID。
         * @example `311`
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
         * 创建通信时间，使用UNIX时间戳表示，单位：秒。
         * @example `1620957905`
         */
        CreatedTs: number;
        /**
         * 释放通信时间，使用UNIX时间戳表示，单位：秒。
         * @example `1620958150`
         */
        DestroyedTs: number;
        /**
         * 通信持续时长，单位：秒。
         * @example `100`
         */
        Duration: number;
    };
    /**
     * 诊断用户详细信，QueryCallUserInfo=false时返回。
     */
    UserDetail: {
        /**
         * 用户ID。
         * @example `testuserid`
         */
        UserId: string;
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
             * 加入通话时间，使用UNIX时间戳表示，单位：秒。
             * @example `1620957919`
             */
            JoinTs: number;
            /**
             * 离开通话时间，使用UNIX时间戳表示，单位：秒。
             * @example `1620958150`
             */
            LeaveTs: number;
        }[];
        /**
         * 创建通话时间，使用UNIX时间戳表示，单位：秒。
         * @example `1620957919
        `
         */
        CreatedTs: number;
        /**
         * 释放通话时间，使用UNIX时间戳表示，单位：秒。
         * @example `1620958150`
         */
        DestroyedTs: number;
        /**
         * 在线时长，单位：秒。
         * @example `231`
         */
        OnlineDuration: number;
        /**
         * 通话时长，首次进入到最后离开，单位：秒。
         * @example `231`
         */
        Duration: number;
        /**
         * SDK版本，如1.0.0、1.1.1等。
         * @example `1.0.0`
         */
        SdkVersion: string;
        /**
         * 平台类型：若用户客户端为WEB则是浏览器类型，若客户端为NATIVE则是操作系统类型。
         * @example `iOS`
         */
        Os: string;
        /**
         * 网络类型，如WiFi，4G等。
         * @example `4G`
         */
        Network: string;
    };
    /**
     * 异常指标。
     */
    FaultMetricData: {
        /**
         * 指标坐标点列表。
         */
        Nodes: {
            /**
             * 指标趋势图中x轴横坐标，单位时间为1分钟。
             * @example `1620957900`
             */
            X: string;
            /**
             * 指标趋势图中y轴纵坐标。
             * @example `0.4540`
             */
            Y: string;
        }[];
    };
    /**
     * 影响因素列表，空表示影响因素未知。
     */
    FactorList: {
        /**
         * 影响因素ID，详情请参见下文中的影响因素ID取值。
         * @example `1`
         */
        FactorId: string;
        /**
         * 异常来源 LOCAL：本端 REMOTE：远端。
         * @example `LOCAL`
         */
        FaultSource: string;
        /**
         * 关联的指标，坐标数据，当FaultType为AUDIO_STUCK、VIDEO_STUCK、VIDEO_VAGUE、HIGH_DELAY时返回。
         */
        RelatedMetricDatas: {
            /**
             * 来源角色。取值：
             * - **SENDER**：发布端。
             * - **RECEIVER**：订阅端。
             * @example `SENDER`
             */
            Role: string;
            /**
             * 数据来自对应发布端的用户ID。
             * @example `testuserid2`
             */
            UserId: string;
            /**
             * 指标类型，参照端到端指标接口的指标类型。
             * @example `AUDIO_STUCK`
             */
            Type: string;
            /**
             * 指标趋势图坐标点列表。
             */
            Nodes: {
                /**
                 * 指标趋势图中x轴横坐标。
                 * @example `1615892596`
                 */
                X: string;
                /**
                 * 指标趋势图中y轴纵坐标。
                 * @example `20`
                 */
                Y: string;
                /**
                 * 扩展数据。
                 */
                Ext: any;
            }[];
        }[];
        /**
         * 关联的事件，按时间分组，当FaultType为AUDIO_STUCK、VIDEO_STUCK、VIDEO_VAGUE、HIGH_DELAY时返回坐标数据。
         */
        RelatedEventDatas: {
            /**
             * 用户ID
             * @example `0a497933****`
             */
            UserId: string;
            /**
             * 来源角色。取值：
             * - **SENDER**：发布端。
             * - **RECEIVER**：订阅端。
             * @example `SENDER`
             */
            Role: string;
            /**
             * 事件数据列表。
             */
            EventDataItems: {
                /**
                 * 第一个事件发生的时间，使用UNIX时间戳表示，单位：秒。
                 * @example `1614936817`
                 */
                Ts: number;
                /**
                 * 事件列表。
                 */
                EventList: {
                    /**
                     * 事件名称。
                     * @example `开始发布`
                     */
                    EventName: string;
                    /**
                     * 事件类型。取值：
                     * - **USER**：用户事件。
                     * - **SYSTEM**：系统事件。
                     * @example `USER`
                     */
                    EventType: string;
                    /**
                     * 事件发生的时间，使用UNIX时间戳表示，单位：秒。
                     * @example `1614936817`
                     */
                    Ts: number;
                }[];
            }[];
        }[];
    }[];
    /**
     * 网络运营商列表
     */
    NetworkOperators: string[];
    /**
     * 请求ID。
     * @example `231470C1-ACFB-4C9F-844F-4CFE1E3804C5`
     */
    RequestId: string;
}
