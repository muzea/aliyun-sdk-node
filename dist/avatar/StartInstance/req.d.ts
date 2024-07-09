export interface StartInstanceRequest {
    /**
     * 租户ID，从虚拟数字人开放平台的对应业务配置的开发者信息中获取的TenantId
     * @example `9185`
     */
    "TenantId"?: number;
    /**
     * 代表一个业务配置
     */
    "App"?: {
        /**
         * AppId，从虚拟数字人开放平台的对应业务配置的开发者信息中获取的AppId
         * @example `ALIPUB5748B17121450`
         */
        AppId: string;
    };
    /**
     * 启动该数字人的用户信息（客户自身的用户信息，或者设备号等，如果没有可以直接传递随机数）
     */
    "User"?: {
        /**
         * 客户自身的用户ID，或者设备号等，如果没有可以直接传递一个随机数
         * @example `23423`
         */
        UserId: string;
        /**
         * 与UserId对应的用户名，可空
         * @example `测试用户`
         */
        UserName: string;
    };
    /**
     * 频道信息，将数字人流媒体推送到指定渠道。目前支持标准RTMP协议。
     * ><warning>
     * - 针对使用**咨询播报**（对应官方文档的播报数字人）和**客服助理**（对应官方文档的互动数字人）两个场景，**请勿传此参数**，平台会自动使用阿里云RTC渠道进行推流，同时官方文档中心提供了[拉流端SDK](https://help.aliyun.com/document_detail/479357.html?spm=a2c4g.479356.0.0.170a6d79vSe56q)方便集成。
     * - 仅针对使用**虚拟主播**（对应官方文档的推流数字人）场景需要传递对应的推流参数信息。
     * ></warning>
     */
    "Channel"?: {
        /**
         * 频道类型：
         * - RTMP: RTMP推流
         * @example `RTMP`
         */
        Type: string;
        /**
         * 频道请求协议体，map类型，
         * - RTMP:
         * ```
         * {"url": ""}
         * - url: 直播平台RTMP推流地址。
         * ```
         * ><warning>针对部分直播平台将推流地址分为url和token，可直接将两部分拼接到一起放入url字段传入即可。推流地址的获取请从对应直播平台获取，部分直播平台不开放三方推流，无法获取RTMP推流地址。></warning>
         * @example `RTMP协议体：
        {
             "url" : "rtmp的地址"
        }`
         */
        ReqConfig: any;
    };
    /**
     * 数字人命令执行请求
     */
    "CommandRequest"?: {
        /**
         * 是否需要透明。如果需要透明，设置AlphaSwitch=true，同时拉流端需要接入流媒体拉流端SDK：[数字人流媒体服务AndroidSDK](https://help.aliyun.com/document_detail/479357.html?spm=a2c4g.479358.0.0.65c055280G4RF9)和[数字人流媒体服务WebSDK](https://help.aliyun.com/document_detail/479358.html?spm=a2c4g.479357.0.0.509d66c9WmAwUh)，参考文档实现对应的透明效果（可在文档中搜索“透明”关键字）。
         * @example `true：透明通道
        false：非透明通道`
         */
        AlphaSwitch: boolean;
        /**
         * 有效可访问的url背景图片地址，背景图片的宽高比必须要与生成的视频宽高比一致
         * - 目前支持jpg，jpeg，png的图片格式
         * @example `可访问的公网url地址`
         */
        BackGroundImageUrl: string;
        /**
         * 数字人机位
         * - 0: 全身近景机位，默认机位
         * - 1: 头部近景机位
         * - 2: 全身远景机位
         * - 3: 半身近景机位
         * - 4: 半身远景机位
         * - 5: 左边近景机位
         * - 6: 右边近景机位
         * 具体每个机位的效果预览可以参考：[3D数字人视频合成使用指南](https://help.aliyun.com/document_detail/447834.html#9c8a96707515k)
         * @example `0`
         */
        Locate: number;
    };
    /**
     * 业务请求id，最大支持64位字符<notice>可以使用该字段做业务启动数字人的幂等，服务端确保同一个bizId多次调用只会开启一路实例</notice>
     * @example `xxxxxxx`
     */
    "BizId"?: string;
    /**
     * 播报内容相关的设置参数
     */
    "TextRequest"?: {
        /**
         * TTS播报声音语调，取值范围：-500～500，不传则使用资产中配置的默认值。
         * @example `0`
         */
        PitchRate: number;
        /**
         * TTS播报声音语速，取值范围：-500～500，不传则使用资产中配置的默认值。
         * [-500, 0, 500] 对应的语速倍速区间为 [0.5, 1.0, 2.0]。
         * -500表示基准语速的0.5倍速；
         * 0表示基准语速的1倍速。1倍速是指模型默认输出的合成语速，语速会依据每一个发音人略有不同，大概每秒钟4个字左右；
         * 500表示基准语速的2倍速；
         * 计算方法如下：
         * 0.8倍速（1-1/0.8)/0.002 = -125
         * 1.2倍速（1-1/1.2)/0.001 = 166
         * @example `0`
         */
        SpeechRate: number;
        /**
         * TTS播报发音人code，从虚拟数字人开放平台-2D资产管理页面获取，不传则使用资产中配置的发音人。
         * @example `guijie`
         */
        Voice: string;
        /**
         * TTS播报声音音量，取值范围：0～100，不传则使用资产中配置的默认值。
         * @example `0`
         */
        Volume: number;
    };
}
