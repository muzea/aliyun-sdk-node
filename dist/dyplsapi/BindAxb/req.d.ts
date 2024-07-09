export interface BindAxbRequest {
    /**
     * 号码池Key。
     * 在号码隐私保护控制台，[号码池管理](https://dyplsnext.console.aliyun.com/number-pool)页面获取**号码池Key**。
     * @example `FC10000016848****`
     */
    "PoolKey"?: string;
    /**
     * AXB中间号的A号码。
     * A号码可设置为**手机号码**或**固定电话**，固定电话请加区号，区号和固定电话之间不需要连字符。
     * > 如果您的业务需要修改已绑定的号码，可以调用[UpdateSubscription](~~110253~~)接口进行修改，控制台可以绑定或解绑号码，暂时不支持修改已绑定的号码。
     * @example `139****0000`
     */
    "PhoneNoA": string;
    /**
     * AXB中间号的B号码。
     * B号码可设置为**手机号码**或**固定电话**，固定电话请加区号，区号和固定电话中间不需要连字符。
     * > 如果您的业务需要修改已绑定的号码，可以调用[UpdateSubscription](~~110253~~)接口进行修改，控制台可以绑定或解绑号码，暂时不支持修改已绑定的号码。
     * @example `136****0000`
     */
    "PhoneNoB"?: string;
    /**
     * AXB中间号的X号码。
     * X号码是您在控制台已[购买的隐私号](https://dyplsnext.console.aliyun.com/numberbuy)。
     * > - 如果您未填写X号码，系统会根据**ExpectCity**参数值从指定号码池中随机选择一个号码作为X号码。
     * > - 如果当前号码池中没有该城市的X号码，或未填写**ExpectCity**参数值，系统会从指定号码池中随机分配一个其他城市的号码作为X号码。
     * > - 如果X号码分配模式配置为**严格匹配模式**，默认分配A号码所属城市号码，如果该城市无号码，返回绑定号码失败。号码分配模式操作请参见[配置号码池](https://help.aliyun.com/zh/pnp/user-guide/manage-phone-number-pools?spm=a2c4g.11186623.0.0.689e7d22cbD4Um#section-st9-xl1-l3c)。
     * @example `171****1893`
     */
    "PhoneNoX"?: string;
    /**
     * 号码绑定的过期时间。
     * > 必须晚于当前绑定时间1分钟以上，时间精确到秒。
     * @example `2021-09-05 12:00:00`
     */
    "Expiration": string;
    /**
     * 指定城市进行X号码的选号。
     * > - 如果当前号码池中没有该城市的X号码，或未填写**ExpectCity**参数值，系统会从指定号码池中随机分配一个其他城市的号码作为X号码。
     * > - 如果X号码分配模式配置为**严格匹配模式**，即默认分配A号码所属城市号码，如果该城市无号码，返回绑定号码失败。号码分配模式操作请参见[配置号码池](https://help.aliyun.com/zh/pnp/user-guide/manage-phone-number-pools?spm=a2c4g.11186623.0.0.689e7d22cbD4Um#section-st9-xl1-l3c)。
     * @example `北京`
     */
    "ExpectCity"?: string;
    /**
     * 是否开启通话录音功能。取值：
     * - **true**：录音。
     * - **false**：不录音（默认值）。
     * >开启通话录音功能后，可在呼叫记录中播放和下载语音文件。录音文件按通话分钟计费0.010元/分钟。
     * @example `false`
     */
    "IsRecordingEnabled"?: boolean;
    /**
     * 外部业务扩展字段，通话记录回执消息中会回传此参数。
     * @example `abcdef`
     */
    "OutId"?: string;
    /**
     * 外部业务ID。
     * @example `34553330****`
     */
    "OutOrderId"?: string;
    /**
     * 单次呼叫限制的状态。取值：
     * - **CONTROL_AX_DISABLE**：A号码无法呼叫X号码。
     * - **CONTROL_BX_DISABLE**：B号码无法呼叫X号码。
     * @example `CONTROL_AX_DISABLE`
     */
    "CallRestrict"?: string;
    /**
     * 重置绑定关系中的号码显示逻辑。固定取值**1**，即主叫和被叫显示中间号码X。
     * > 由于运营商监管限制，呼叫时显示真实号码的设置不生效。
     * @example `1`
     */
    "CallDisplayType"?: number;
    /**
     * 设置AXB中间号在号码绑定后，拨打X号码的企业彩铃。
     * 此参数请填写**铃音字段**和**彩铃编码**。
     * 填写示例： 如设置B号码拨打X接通前的铃音，填写："AXBRing_B": "1000****1"
     * 铃音字段如下：
     * - A号码拨打X接通前的铃音设置：AXBRing_A
     * - B号码拨打X接通前的铃音设置：AXBRing_B
     * - A号码拨打X接通后的铃音设置：AXBRing_A_PICKUP
     * - B号码拨打X接通后的铃音设置：AXBRing_B_PICKUP
     * 彩铃编码：在号码隐私保护控制台[企业彩铃管理](https://dyplsnext.console.aliyun.com/number-pool/ringtone?resType=1)页面获取企业彩铃编码。
     * > 企业彩铃优先使用绑定级别设置的彩铃，如果未设置或设置未生效，则会使用号码池级别的彩铃音。
     * @example `{
          "AXBRing_B": "1000****1",
          "AXBRing_A": "1000****1"
    }`
     */
    "RingConfig"?: string;
    /**
     * 是否开启ASR服务功能。取值：
     * - **false**：关闭（默认值）。
     * - **true**：开启。
     * >  开通功能后，可以将通话中的语音转为文本，获取录音文件同时可获取文本内容。可在呼叫记录中下载语音文本。 文本结果按通话分钟计费，ASR费用0.060元/分钟。
     * @example `false`
     */
    "ASRStatus"?: boolean;
    /**
     * ASR模型ID。取值：
     * - 通用-电话-中文普通话模型ID：7ee372834d2f4cc7ac0d0ab2d0ae1aac
     * - 通用-电话-中文粤语模型ID：9b4afe3d224e4fa3bf963697113e2f77
     * - 通用-电话-地方口音模型ID：3655a6cb94764145a1f9a38a3c3b3b4b
     * @example `7ee372834d2f4cc7ac0d0ab2d0ae1aac`
     */
    "ASRModelId"?: string;
    /**
     * 顺振时长。单位：秒。取值范围为5~20。
     * @example `10秒`
     */
    "CallTimeout"?: number;
    /**
     * 设置AXB中间号，号码绑定中的dtmf按键配置，可配置内容如下：
     * - endCallIvrPhoneNo：放音对象A或B
     * - waitingDtmfTime：放完第一段音后的最大等待时长，最大时长为30秒
     * - maxLoop  dtmf：按键不匹配，循环播放第一个放音文件的最大次数，最大循环次数为5次
     * - step1File：第一个放音文件名称
     * - step2File：第二个放音文件名称
     * - validKey：合法按键值定义，如：1,2只允许配置两个有效键值，用","分隔
     * - waitingEndCall：运营商挂机等待时长，最大等待时长为10秒
     * @example `{
        "endCallIvrPhoneNo":"A",
        "waitingDtmfTime":10,
        "maxLoop":3,
        "step1File":"62ab72f8-4750-4234-859e-e8d678c0cad3-flow_tts_test_1.wav",
        "step2File":"62ab72f8-4750-4234-859e-e8d678c0cad3-flow_tts_test_2.wav",
        "validKey":"1,2",
        "waitingEndCall":2
    }`
     */
    "DtmfConfig"?: string;
}
