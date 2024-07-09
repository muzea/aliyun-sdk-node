export interface BindBatchAxgRequest {
    /**
     * 号码池Key。
     * 在号码隐私保护控制台，[号码池管理](https://dyplsnext.console.aliyun.com/number-pool)页面获取**号码池Key**。
     * @example `FC2235****`
     */
    "PoolKey"?: string;
    /**
     * AXG绑定列表。
     */
    "AxgBindList": {
        /**
         * AXG中的A号码。 A号码可设置为手机号码或固定电话，固定电话需要加区号，区号和号码中间不需要加连字符。
         * @example `139****0000`
         */
        PhoneNoA: string;
        /**
         * AXG中的G组ID，即GID。
         * 可以通过以下方式查看GID：
         * - 登录号码隐私保护控制台，在[号码池管理](https://dyplsnext.console.aliyun.com/number-pool)页面筛选出**AXG隐私号**，单击**G号码组管理**即可查看所有G号码组的GID。
         * - 如果G号码组是通过接口[CreateAxgGroup](~~110250~~)创建的，则接口的返回参数**GroupID**就是此处的请求参数**GroupID**。
         * > G号码组中必须有一个及以上的电话号码。
         * @example `200001234****`
         */
        GroupId: string;
        /**
         * AXG中的B号码。
         * B号码可设置为手机号码或固定电话，固定电话需要加区号，区号和号码中间不需要加连字符。
         * > - A号码拨打X号码时，默认会转接到B号码，如B号码未设置，则无法接通。
         * > - A号码拨打X号码时，**A号码回拨模式**为**默认模式**时，才会转接到B号码，若不是**默认模式**，则无法接通。
         * > - 如需修改**A号码回拨模式**，在[号码池管理](https://dyplsnext.console.aliyun.com/number-pool?resType=1)>筛选**AXN隐私号**>**号池管理**>**A号码回拨模式**>**调整配置**修改。
         * > - 如需更新B号码，请调用[UpdateSubscription](https://help.aliyun.com/zh/pnp/developer-reference/api-dyplsapi-2017-05-25-updatesubscription?spm=a2c4g.11186623.0.i16)接口更新。
         * @example `138****0000`
         */
        PhoneNoB: string;
        /**
         * AXG中的X号码。
         * X号码是您在控制台已[购买的隐私号](https://dyplsnext.console.aliyun.com/numberbuy?spm=a2c4g.11186623.0.0.7e6449bbtiHP8m)，可在控制台[号码管理](https://dyplsnext.console.aliyun.com/number/list)筛选**AXG隐私号**获取X号码。
         * > 如果未指定X号码，将根据参数**ExpectCity**从指定号码池中随机指定一个号码作为X号码。
         * @example `139****1111`
         */
        PhoneNoX: string;
        /**
         * 指定城市进行X号码的选号。
         * > - 如果当前号池中没有该城市的可用号码，或未指定此参数，将从当前号码池中随机分配一个其他城市的号码作为X号码。
         * > - 如果**X号码分配模式**配置为**严格匹配模式**，当符合条件的号码不存在时，系统会提示分配错误。
         * @example `北京`
         */
        ExpectCity: string;
        /**
         * 是否需要针对该绑定关系产生的所有通话进行通话录音。取值：
         * - **true**：录音。
         * - **false**：不录音（默认值）。
         * @example `false`
         */
        IsRecordingEnabled: boolean;
        /**
         * 外部业务扩展字段，通话记录回执消息中会回传此参数。
         * @example `1***********0fd`
         */
        OutId: string;
        /**
         * 绑定关系的过期时间，时间单位精确到秒。
         * > - 必须晚于当前时间1分钟以上。
         * > - 此参数为必填参数，请您调用时填写。
         * @example `2022-07-11 01:05:15`
         */
        Expiration: string;
        /**
         * 外部业务ID。
         * @example `20***************677`
         */
        OutOrderId: string;
        /**
         * 重置绑定关系中的号码显示逻辑。固定取值：**1**（主被叫显示中间号码X）。
         * > 由于运营商监管限制，呼叫时显示真实号码的设置不生效。
         * @example `1`
         */
        CallDisplayType: number;
        /**
         * 设置AXG隐私号在号码绑定后，拨打X号码的企业彩铃。
         * 此参数请填写**铃音字段**和**彩铃编码**。
         * **铃音字段**取值：
         * - AXG中，A号码打X的铃音设置（有回拨号码）：AXGRing_AB
         * - AXG中，A号码打X的铃音设置（无回拨号码）：AXGRing_A
         * - AXG中，G组号码打X的铃音设置：AXGRing_G
         * **彩铃编码**：
         * 在号码隐私保护控制台[企业彩铃管理](https://dyplsnext.console.aliyun.com/number-pool/ringtone?resType=1)页面获取企业彩铃编码。
         * **填写示例**：
         * 如设置A号码打X的铃音（无回拨号码），填写："AXGRing_A": "1000****1"。
         * > 企业彩铃优先使用绑定级别设置的彩铃，如果未设置或设置未生效，则会使用号码池级别的彩铃音。
         * @example `{"AXGRing_AB":"1000****2","AXGRing_A":"1000****1"}`
         */
        RingConfig: string;
        /**
         * ASR状态。取值：
         * - **false**：关闭（默认值）
         * - **true**：开启
         * @example `true`
         */
        ASRStatus: boolean;
        /**
         * ASR模型ID。取值：
         * - 通用-电话-中文普通话模型 ID：7ee372834d2f4cc7ac0d0ab2d0ae1aac
         * - 通用-电话-中文粤语模型 ID：9b4afe3d224e4fa3bf963697113e2f77
         * - 通用-电话-地方口音模型 ID：3655a6cb94764145a1f9a38a3c3b3b4b
         * @example `7ee372834d2f4cc7ac0d0ab2d0ae1aac`
         */
        ASRModelId: string;
        /**
         * 单通呼叫限制的状态。取值：
         * - **CONTROL\_AX\_DISABLE**：A号码无法呼叫X号码。
         * - **CONTROL\_BX\_DISABLE**：B号码无法呼叫X号码。
         * @example `CONTROL_AX_DISABLE`
         */
        CallRestrict: string;
    }[];
}
