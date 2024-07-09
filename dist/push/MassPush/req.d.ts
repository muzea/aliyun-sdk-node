export interface MassPushRequest {
    /**
     * AppKey信息。
     * @example `23267207`
     */
    "AppKey": number;
    /**
     * 独立推送任务组成的数组。
     */
    "PushTask": {
        /**
         * 推送类型。取值：
         * - MESSAGE：表示消息。
         * - NOTICE：表示通知。
         * @example `MESSAGE`
         */
        PushType: string;
        /**
         * 设备类型，取值范围为：
         * - HARMONY：鸿蒙设备
         * - iOS：iOS设备
         * - ANDROID：Android设备
         * - ALL：当AppKey为旧版本双端应用时，代表同时推送Android和iOS设备；当AppKey为新版本单端应用时，效果和指定该应用类型对应的设备类型一样。
         * @example `HARMONY`
         */
        DeviceType: string;
        /**
         * 推送目标。可取值：
         * - DEVICE：根据设备推送。
         * - ACCOUNT：根据账号推送。
         * - ALIAS：根据别名推送。
         * @example `DEVICE`
         */
        Target: string;
        /**
         * 根据Target来设定，多个值使用逗号分隔，超过限制需要分多次推送。
         * - Target=DEVICE，值如`deviceid1,deviceid2`（最多支持1000个）。
         * - Target=ACCOUNT，值如`account1,account2`（最多支持1000个）。
         * - Target=ALIAS，值如`alias1,alias2`（最多支持1000个）。
         * @example `deviceid1,deviceid2`
         */
        TargetValue: string;
        /**
         * 离线消息/通知是否保存。StoreOffline默认设置为false。
         * 若保存，在推送时候用户不在线，在过期时间（ExpireTime）内用户上线时会被再次发送。ExpireTime默认为72小时。iOS通知走APNs链路，不受StoreOffline影响。
         * @example `true`
         */
        StoreOffline: boolean;
        /**
         * 指定发送通道，取值如下：
         * - accs：阿里云自有通道
         * - huawei：华为通道
         * - honor：荣耀通道
         * - xiaomi：小米通道
         * - oppo：OPPO通道
         * - vivo：vivo通道
         * - meizu：魅族通道
         * - gcm：谷歌GCM通道（旧版HTTP）
         * - fcm: 谷歌Firebase通道（HTTP v1 API）
         * - apns：APNs通道
         * - harmony: 鸿蒙通道
         * >- 如果未配置此参数，则代表所有通道均可使用。
         * >- 如果配置了此参数，则严格使用参数中的通道。
         * >- 如果配置的通道和发送策略冲突（如iOS通知仅走APNs通道，但本参数中不包含apns），则不实施发送。
         * >- 若配置gcm，则可以走谷歌GCM和FCM通道，若配置fcm，则只能走谷歌FCM通道。
         * @example `accs,huawei,xiaomi`
         */
        SendChannels: string;
        /**
         * 用于定时发送。不设置缺省是立即发送。
         * 时间格式按照ISO8601标准表示，并需要使用UTC时间，格式为YYYY-MM-DDThh:mm:ssZ。
         * @example `2019-02-20T00:00:00Z`
         */
        PushTime: string;
        /**
         * 离线消息/通知的过期时间，和StoreOffline配合使用，过期则不会再被发送，最长保存72小时。默认为72小时。
         * 时间格式按照ISO8601标准表示，并需要使用UTC时间，格式为YYYY-MM-DDThh:mm:ssZ，过期时间不能小于当前时间或者定时发送时间加上3秒（`ExpireTime > PushTime+3秒`），3秒是为了冗余网络和系统延迟造成的误差。建议单推不小于1分钟，全推、批量推送不少于10分钟。
         * @example `2019-02-20T00:00:00Z`
         */
        ExpireTime: string;
        /**
         * 推送任务自定义标识，当JobKey不为空时，回执日志中会附带该字段。查看回执日志参见[回执日志](~~434651~~)。
         * @example `123`
         */
        JobKey: string;
        /**
         * 推送时通知/消息的标题，长度限制：200字节。
         * 在Android推送和Harmony推送时必填；在iOS推送通知时非必填，如果填写，则：
         * * iOS 10+通知显示标题。
         * * iOS 8.2 <= iOS系统 < iOS 10：替换通知应用名称。
         * @example `title`
         */
        Title: string;
        /**
         * Android和Harmony推送时通知的内容/消息的内容；iOS消息/通知内容，推送的内容大小是有限制的，参见[产品限制](~~92832~~)。
         * @example `hello`
         */
        Body: string;
        /**
         * 是否自动对过长标题、内容进行截断。
         * 注：仅支持明确限制标题、内容的厂商通道，对APNs、华为、荣耀通道等不限制标题、内容，只限制总请求体大小的不适用。
         * @example `false`
         */
        Trim: boolean;
        /**
         * iOS的通知是通过APNs中心来发送的，需要填写对应的环境信息。
         * - DEV：表示开发环境。
         * - PRODUCT：表示生产环境。
         * @example `DEV`
         */
        iOSApnsEnv: string;
        /**
         * 消息推送时设备不在线（即与移动推送的服务端的长连接通道不通），则这条推送会做为通知，通过苹果的APNs通道送达一次。
         * > 离线消息转通知仅适用于生产环境。
         * @example `true`
         */
        iOSRemind: boolean;
        /**
         * iOS通知副标题内容（iOS 10+）。
         * @example `subtitle`
         */
        iOSSubtitle: string;
        /**
         * iOS消息转通知时使用的iOS通知内容，仅当iOSApnsEnv=PRODUCT && iOSRemind为true时有效。
         * @example `ios通知body`
         */
        iOSRemindBody: string;
        /**
         * iOS通知声音。指定存放在app bundle或沙盒Library/Sounds目录下的音频文件名，请参见：iOS推送如何设定通知声音。
         * 若指定为空串（””），通知为静音；若不设置，默认填充default为系统提示音。
         * @example `””`
         */
        iOSMusic: string;
        /**
         * iOS应用图标右上角角标。
         * > 若iOSBadgeAutoIncrement设置为True，则此项必须为空。
         * @example `0`
         */
        iOSBadge: number;
        /**
         * 是否开启角标自增功能，默认为false。
         * >当该项为true时，iOSBadge必须为空。
         * 角标自增功能由推送服务端维护每个设备的角标计数，需要用户使用V1.9.5以上版本的SDK，并且需要用户主动同步角标数字到服务端。
         * @example `true`
         */
        iOSBadgeAutoIncrement: boolean;
        /**
         * 是否开启iOS静默通知。
         * @example `true`
         */
        iOSSilentNotification: boolean;
        /**
         * iOS通知处理扩展标记（iOS 10+）。如果设为true，则APNs推送的通知在弹出前，可先到达Extension进行处理。静默通知时，必须设为true。
         * @example `true`
         */
        iOSMutableContent: boolean;
        /**
         * 指定iOS通知Category（iOS 10+）。
         * @example `ios`
         */
        iOSNotificationCategory: string;
        /**
         * 设备收到有相同CollapseId的消息，会合并成一条。设备不在线，连续发相同CollapseId的消息，通知栏只会显示一条，iOS 10+支持设置此参数。
         * @example `ZD2011`
         */
        iOSNotificationCollapseId: string;
        /**
         * 通过该属性对iOS的远程通知进行分组，标记折叠的组别识别名。仅支持iOS 12.0+版本。
         * @example `abc`
         */
        iOSNotificationThreadId: string;
        /**
         * 中断级别，取值：
         * - passive：系统在不点灯、不播放声音的情况下将通知添加到通知列表中。
         * - active：系统立即显示通知，点亮屏幕，并可以播放声音。
         * - time-sensitive：系统立即呈现通知，点亮屏幕，并可以播放声音，但不会突破系统通知控制。
         * - critical：系统立即显示通知，屏幕亮起，并绕过静音开关播放声音。
         * @example `active`
         */
        iOSInterruptionLevel: string;
        /**
         * 摘要突出显示分数。取值范围：\[0,1\]的浮点数。
         * @example `0.01`
         */
        iOSRelevanceScore: number;
        /**
         * iOS通知的扩展属性。
         * iOS10+可以在此指定富媒体推送通知的资源Url：`{"attachment": "https://xxxx.xxx/notification_pic.png"} `。该参数要以JSON map的格式传入，否则会解析出错。
         * @example `{"attachment": "https://xxxx.xxx/notification_pic.png"} `
         */
        iOSExtParameters: string;
        /**
         * 通知的提醒方式。可取值：
         * - **VIBRATE**：振动（默认值）
         * - **SOUND**：声音
         * - **BOTH**：声音和振动
         * - **NONE**：静音
         * @example `VIBRATE`
         */
        AndroidNotifyType: string;
        /**
         * 推送类型为消息时设备不在线，则这条推送会使用辅助弹窗功能。默认值为false，仅当PushType=MESSAGE时生效。
         * 如果消息转通知推送成功，收到通知是展示的数据为服务端设置的AndroidPopupTitle和AndroidPopupBody参数值，点击通知在辅助弹窗的onSysNoticeOpened方法中获取到的数据是服务端设置的Title和Body参数值。
         * @example `true`
         */
        AndroidRemind: boolean;
        /**
         * 点击通知后动作。可取值：
         * - APPLICATION：打开应用（默认值）
         * - ACTIVITY：打开应用AndroidActivity
         * - URL：打开URL
         * - NONE：无跳转
         * @example `APPLICATION`
         */
        AndroidOpenType: string;
        /**
         * 设定通知打开的activity。
         * 仅当PushTask.N.AndroidOpenType=”Activity”时传入，如：`com.alibaba.cloudpushdemo.bizactivity`。
         * @example `com.alibaba.cloudpushdemo.bizactivity`
         */
        AndroidActivity: string;
        /**
         * Android收到推送后打开对应的url。仅当PushTask.N.AndroidOpenType=”URL”时传入。
         * @example `https://xxxx.xxx`
         */
        AndroidOpenUrl: string;
        /**
         * 辅助弹窗模式下标题内容。AndroidPopupActivity参数不为空时，该参数必填。
         * 长度限制：30字符。
         * 如使用厂商通道，则需同时符合厂商通道的限制，具体内容参见：[Android端辅助通道推送限制](~~165253~~)。
         * @example `hello`
         */
        AndroidPopupTitle: string;
        /**
         * 辅助弹窗模式下Body内容。AndroidPopupActivity参数不为空时，该参数必填。
         * 长度限制：128字符。
         * 如使用厂商通道，则需同时符合厂商通道的限制，具体内容参见：[Android端辅助通道推送限制](~~165253~~)。
         * @example `hello`
         */
        AndroidPopupBody: string;
        /**
         * 指定点击通知后跳转的Activity。
         * @example `com.alibaba.cloudpushdemo.bizactivity`
         */
        AndroidPopupActivity: string;
        /**
         * 通知样式，取值为：
         * - **0**：标准模式（默认）
         * - **1**：长文本模式（支持华为、荣耀、小米、OPPO、魅族、自有通道）
         * - **2**：大图模式（仅支持小米）
         * - **3**：列表模式（支持华为、荣耀、小米、OPPO、自有通道）
         * > 若使用非标准模式，此参数必须提供。
         * @example `1`
         */
        AndroidRenderStyle: string;
        /**
         * 长文本模式下的标题，长度限制：200个字节（1个汉字算作3字节）。
         * - 当前仅支持荣耀通道和华为通道EMUI11及以上版本。
         * - 若长文本模式下未提供此参数，则从Title、AndroidPopupTitle里取第一个非空值。
         * @example `示例长标题`
         */
        AndroidBigTitle: string;
        /**
         * 长文本模式下的body，长度限制：1000字节（1个汉字算作3字节），发送时受具体厂商通道的限制。
         * 当前支持：
         * - 　华为：EMUI10及以上
         * - 　荣耀：Magic UI 4.0及以上
         * - 　小米：MIUI10及以上
         * - 　OPPO：ColorOS5.0以上
         * - 　魅族：Flyme
         * - 　自有通道：安卓SDK3.6.0及以上
         * 若长文本模式下未提供此参数，则从Body、AndroidPopupBody里取第一个非空值。
         * @example `示例长文本`
         */
        AndroidBigBody: string;
        /**
         * 大图模式下的图片URL，当前支持：自有通道：安卓SDK3.6.0及以上。
         * @example `https://imag.example.com/image.png`
         */
        AndroidBigPictureUrl: string;
        /**
         * 大图模式下的大图URL。大图模式下图片上传至小米推送后会返回一个图片URL，本参数内填写这个URL。
         * @example `https://f6.market.xiaomi.com/download/MiPass/aaa/bbb.png`
         */
        AndroidXiaomiBigPictureUrl: string;
        /**
         * 大图标URL。当前支持：
         * - 华为EMUI（仅长文本模式、Inbox模式下适用）
         * - 荣耀Magic UI（仅长文本模式下适用）
         * - 自有通道：安卓SDK3.5.0及以上
         * @example `https://imag.example.com/image.png`
         */
        AndroidImageUrl: string;
        /**
         * 大图标URL。当前支持：小米MIUI12及以上（仅长文本模式下适用）。
         * >上传到小米服务器上，返回的图标URL。具体请参考：[链接](https://dev.mi.com/console/doc/detail?pId=1278#_3_3)。
         * @example `https://imag.example.com/image.png`
         */
        AndroidXiaomiImageUrl: string;
        /**
         * Inbox模式下的正文，内容为合法的JSON Array，且元素不超过5个。当前支持：
         * - 华为：EMUI9及以上
         * - 荣耀：Magic UI 4.0及以上
         * - 小米：MIUI10及以上
         * - OPPO：ColorOS 5.0以上
         * - 自有通道：安卓SDK3.6.0及以上
         * @example `["第一行","第二行"]`
         */
        AndroidInboxBody: string;
        /**
         * Android自定义通知栏样式，取值：1-100。
         * @example `2`
         */
        AndroidNotificationBarType: number;
        /**
         * Android通知在通知栏展示时排列位置的优先级。可取值： -2，-1，0，1，2。
         * @example `0`
         */
        AndroidNotificationBarPriority: number;
        /**
         * 标识每条消息在通知显示时的唯一标识，不同的通知栏消息可以相同的NotifyId，实现新的通知栏消息覆盖老的，当前支持除FCM通道外的其他厂商通道。
         * @example `100001`
         */
        AndroidNotificationNotifyId: number;
        /**
         * Android app的channelId，需要与app中的channelId能对应上。
         * - 设置NotificationChannel参数，具体用途请参见[常见问题：Android 8.0以上设备通知接收不到](~~67398~~)。
         * - 因OPPO通知私信通道的channel_id与app的channelId，故OPPO通道推送时，channel_id取此值。
         * - 华为、FCM、阿里云自有通道推送中，channel_id取此值。
         * @example `1`
         */
        AndroidNotificationChannel: string;
        /**
         * 设置Huawei通知消息分类importance参数，决定用户设备消息通知行为，取值如下：
         * - LOW：资讯营销类消息
         * - NORMAL：服务与通讯类消息
         * >- 当前华为通道建议使用AndroidMessageHuaweiCategory进行通知分类，可不再使用AndroidNotificationHuaweiChannel。
         * >- 需要在Huawei平台申请，[申请链接](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/message-classification-0000001149358835#section893184112272)。
         * @example `LOW`
         */
        AndroidNotificationHuaweiChannel: string;
        /**
         * 设置荣耀通知消息分类importance参数，决定用户设备消息通知行为，取值如下：
         * - LOW：资讯营销类消息
         * - NORMAL：服务与通讯类消息
         * 需要在荣耀平台申请，[申请链接](https://developer.hihonor.com/cn/doc/guides/100364)。
         * @example `LOW`
         */
        AndroidNotificationHonorChannel: string;
        /**
         * 设置vivo通知消息分类，取值为：
         * - 0：运营类消息（默认）
         * - 1：系统类消息
         * >- 当前vivo通道建议使用AndroidMessageVivoCategory进行通知分类，可不再使用AndroidNotificationVivoChannel。
         * >- 需要在vivo平台申请，详见：[申请链接](https://dev.vivo.com.cn/documentCenter/doc/359)。
         * @example `0`
         */
        AndroidNotificationVivoChannel: string;
        /**
         * 设置小米通知类型的channelId，需要在小米平台申请，详见：[申请链接](https://dev.mi.com/console/doc/detail?pId=2422#_4)。
         * >- 小米通道单个应用最多可申请8个channel，请提前做好规划。
         * @example `michannel`
         */
        AndroidNotificationXiaomiChannel: string;
        /**
         * 消息分组，同一组消息在通知栏里只显示最新一条和当前该组接受到的消息总数目，不会展示所有消息也无法展开。当前支持：
         * - 华为
         * - 荣耀
         * - 自有通道
         * @example `group-1`
         */
        AndroidNotificationGroup: string;
        /**
         * 设定通知的扩展属性。当推送类型PushType设置为MESSAGE消息类型时，该属性不生效。
         * 该参数要以JSON map的格式传入，否则会解析出错。
         * @example `{"key1":"value1","api_name":"PushNoticeToAndroidRequest"}`
         */
        AndroidExtParameters: string;
        /**
         * 华为通道透传消息投递优先级，取值如下：
         * - HIGH
         * - NORMAL
         * 需要申请权限，具体请参见：[申请链接](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/faq-0000001050042183#section037425218509)。
         * @example `HIGH`
         */
        AndroidMessageHuaweiUrgency: string;
        /**
         * 作用一：完成[自分类权益申请](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/message-classification-0000001149358835?#section3410731125514)后，用于标识消息类型，确定[消息提醒方式](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/message-classification-0000001149358835#ZH-CN_TOPIC_0000001149358835__p3850133955718)，对特定类型消息加快发送，取值请参考华为推送官方文档的[消息分类标准](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/message-classification-0000001149358835#section1076611477914)，填写文档表格中的“云端通知category取值”或“本地通知category取值”。
         * 作用二：[申请特殊权限](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/faq-0000001050042183#section037425218509)后，用于标识高优先级透传场景，取值如下：
         * - VOIP：音视频通话
         * - PLAY_VOICE：语音播报
         * > 对于“云端通知category取值”为“不涉及”的一概走阿里云自有通道，对于“本地通知category取值”为“不涉及”的一概走华为通道。
         * @example `SUBSCRIPTION`
         */
        AndroidMessageHuaweiCategory: string;
        /**
         * vivo将消息分为：系统消息、运营消息两个类别进行管理。
         * 系统消息：
         * - IM：即时消息
         * - ACCOUNT：账号与资产
         * - TODO：日程待办
         * - DEVICE_REMINDER：设备信息
         * - ORDER：订单与物流
         * - SUBSCRIPTION：订阅提醒
         * 运营消息：
         * - NEWS：新闻
         * - CONTENT：内容推荐
         * - MARKETING：运营活动
         * - SOCIAL：社交动态
         * > 详细请参考[分类说明](https://dev.vivo.com.cn/documentCenter/doc/359#_Toc64906673)
         * @example `TODO`
         */
        AndroidMessageVivoCategory: string;
        /**
         * 设置厂商通道通知类型：
         * - **0**：正式通知（默认）。
         * - **1**：测试通知。
         * >- 本参数配置后等价于同时配置AndroidHuaweiTargetUserType、AndroidHonorTargetType、AndroidVivoPushMode三个参数，具体厂商通道的对应参数能覆盖本参数。
         * >- 当前支持：华为通道、荣耀通道、vivo通道。
         * @example `1`
         */
        AndroidTargetUserType: number;
        /**
         * 设置华为通道通知类型：
         * - **0**：正式通知（默认）。
         * - **1**：测试通知。
         * > 每个应用每日可发送该测试通知500条且不受每日单设备推送数量上限要求。
         * @example `1`
         */
        AndroidHuaweiTargetUserType: number;
        /**
         * 设置荣耀通道通知类型：
         * - **0**：正式通知（默认）。
         * - **1**：测试通知。
         * > 每个应用每日可发送该测试通知1000条且不受每日单设备推送数量上限要求。
         * @example `1`
         */
        AndroidHonorTargetUserType: number;
        /**
         * 设置vivo通道通知类型：
         * - **0**：正式推送（默认）。
         * - **1**：测试推送。
         * > 测试推送请事先在vivo控制台配置测试设备。测试设备RegId可在设备启动日志中搜索“onReceiveRegId regId”获得。
         * @example `1`
         */
        AndroidVivoPushMode: number;
        /**
         * 华为通道回执ID，该回执ID可以在华为通道推送运营平台的回执参数配置中查看。
         * > 如果在华为通道推送运营平台配置的默认回执配置是阿里云回执，则无需提供，如果不是，建议优先在阿里云EMAS移动推送控制台中配置华为通道默认回执ID。
         * @example `RCP4C123456`
         */
        AndroidHuaweiReceiptId: string;
        /**
         * vivo通道回执ID，该回执ID可以在vivo开放平台推送服务的应用信息中查看。
         * > 如果在vivo开放平台配置的默认回执配置是阿里云回执，则无需提供，如果不是，建议优先在阿里云EMAS移动推送控制台中配置vivo通道默认回执ID。
         * @example `123`
         */
        AndroidVivoReceiptId: string;
        /**
         * Android通知声音（保留参数，当前暂不起作用）。
         * @example `无`
         */
        AndroidMusic: string;
        /**
         * 该参数已废弃。
         * @example `0`
         */
        SendSpeed: number;
        /**
         * 该参数已废弃，所有第三方辅助弹窗都由新参数**AndroidPopupTitle**统一支持。
         * @example `无`
         */
        AndroidXiaoMiNotifyTitle: string;
        /**
         * 该参数已废弃，所有第三方辅助弹窗都由新参数**AndroidPopupBody**统一支持。
         * @example `无`
         */
        AndroidXiaoMiNotifyBody: string;
        /**
         * 该参数已废弃，所有第三方辅助弹窗都由新参数**AndroidPopupActivity**统一支持。
         * @example `无`
         */
        AndroidXiaoMiActivity: string;
        /**
         * 推送类型为消息时设备不在线，则这条推送会使用辅助弹窗功能。默认值为false，仅当PushType=MESSAGE时生效。
         * 如果消息转通知推送成功，收到通知是展示的数据为服务端设置的HarmonyRemindTitle和HarmonyRemindBody参数值。
         * @example `false`
         */
        HarmonyRemind: boolean;
        /**
         * Harmony消息转通知时使用的Harmony通知内容，仅当HarmonyRemind为true时有效。
         * @example `您有一条新消息，请查收`
         */
        HarmonyRemindBody: string;
        /**
         * Harmony消息转通知时使用的Harmony通知标题，仅当HarmonyRemind为true时有效。
         * @example `新消息`
         */
        HarmonyRemindTitle: string;
        /**
         * 通知消息类别。完成申请通知消息自分类权益后，用于标识消息类型，不同的通知消息类型影响消息展示和提醒方式。取值如下：
         * - IM：即时聊天
         * - VOIP：音视频通话
         * - SUBSCRIPTION：订阅
         * - TRAVEL：出行
         * - HEALTH：健康
         * - WORK：工作事项提醒
         * - ACCOUNT：账号动态
         * - EXPRESS：订单&物流
         * - FINANCE：财务
         * - DEVICE_REMINDER：设备提醒
         * - MAIL：邮件
         * - CUSTOMER_SERVICE：客服消息
         * - MARKETING：新闻、内容推荐、社交动态、产品促销、财经动态、生活资讯、调研、功能推荐、运营活动（仅对内容进行标识，不会加快消息发送），统称为资讯营销类消息
         * 详情参见鸿蒙官网 [Notification.category](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section17371529101117)
         * @example `IM`
         */
        HarmonyCategory: string;
        /**
         * 使用指定类型的通知渠道。仅在阿里云自有通道在线时有效。
         * - SOCIAL_COMMUNICATION: 社交通信。
         * - SERVICE_INFORMATION: 服务提醒。
         * - CONTENT_INFORMATION: 内容资讯。
         * - CUSTOMER_SERVICE: 客服消息。该类型用于用户与商家之间的客服消息，需由用户主动发起。
         * - OTHER_TYPES: 其他。
         * 详情参见鸿蒙官网 [SlotType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/js-apis-notificationmanager-V5#slottype)
         * @example `SOCIAL_COMMUNICATION`
         */
        HarmonyNotificationSlotType: string;
        /**
         * 每条消息在通知显示时的唯一标识。不携带时，推送服务自动为每条消息生成一个唯一标识；不同的通知消息可以拥有相同的notifyId，实现新消息覆盖旧消息功能。
         * 详情参见鸿蒙官网 [Notification.notifyId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section17371529101117)
         * @example `0`
         */
        HarmonyNotifyId: number;
        /**
         * 点击通知后动作。可取值：
         * - APP_HOME_PAGE：打开应用首页
         * - APP_CUSTOM_PAGE：打开应用自定义页面
         * @example `APP_HOME_PAGE`
         */
        HarmonyActionType: string;
        /**
         * 应用内置页面ability对应的action。
         * ><notice>当HarmonyActionType为APP_CUSTOM_PAGE时，字段HarmonyUri和HarmonyAction至少填写一个。></notice>
         * 详情参见鸿蒙官网 [ClickAction.action](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section152462191216)
         * @example `com.example.action`
         */
        HarmonyAction: string;
        /**
         * 应用内置页面ability对应的uri。
         * ><notice>当HarmonyActionType为APP_CUSTOM_PAGE时，字段HarmonyUri和HarmonyAction至少填写一个。当存在多个Ability时，分别填写不同Ability的action和uri，优先使用action查找对应的应用内置页面。></notice>
         * 详情参见鸿蒙官网 [ClickAction.uri](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section152462191216)
         * @example `https://www.example.com:8080/push/example`
         */
        HarmonyUri: string;
        /**
         * 通知消息样式：
         * - NORMAL: 普通通知（默认值）
         * - MULTI_LINE: 多行文本样式
         * @example `NORMAL`
         */
        HarmonyRenderStyle: string;
        /**
         * 通知右侧大图标URL，URL使用的协议必须是HTTPS协议。
         * > 支持图片格式为png、jpg、jpeg、heif、gif、bmp，图片长*宽<25000像素。
         * 详情参见鸿蒙官网 [Notification.image](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section17371529101117)
         * @example `https://example.com/xxx.png`
         */
        HarmonyImageUrl: string;
        /**
         * 多行文本样式的内容，当HarmonyRenderStyle为MULTI_LINE时，本字段必填，最多支持3条内容。
         * @example `["1.content1","2.content2","3.content3"]
        `
         */
        HarmonyInboxContent: string;
        /**
         * 设定通知的扩展属性。当推送类型PushType设置为MESSAGE消息类型时，该属性不生效。
         * 该参数要以JSON map的格式传入，否则会解析出错。
         * @example `{"key1":"value1","api_name":"PushNoticeToAndroidRequest"}
        `
         */
        HarmonyExtParameters: string;
        /**
         * 测试消息标识：
         * - false：正常消息（默认值）
         * - true：测试消息
         * 详情参见鸿蒙官网 [pushOptions.testMessage](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section418321011212)
         * @example `true`
         */
        HarmonyTestMessage: boolean;
        /**
         * 鸿蒙通道回执ID，该回执ID可以在鸿蒙通道推送运营平台的回执参数配置中查看。
         * > 如果在鸿蒙通道推送运营平台配置的默认回执配置是阿里云回执，则无需提供，如果不是，建议优先在阿里云EMAS移动推送控制台中配置鸿蒙通道默认回执ID。
         * 详情参见鸿蒙官网 [pushOptions.receiptId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section418321011212)
         * @example `RCPB***DFD5
        `
         */
        HarmonyReceiptId: string;
    }[];
}
