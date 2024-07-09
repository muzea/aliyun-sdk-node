export interface UpdateSubscriptionRequest {
    /**
     * 号码池Key。
     * 在号码隐私保护控制台，[号码池管理](https://dyplsnext.console.aliyun.com/number-pool?spm=a2c4g.11186623.0.0.7e6449bbtiHP8m)页面获取**号码池Key**。
     * > 当**ProductType**为空时必填。
     * @example `FC122356****`
     */
    "PoolKey"?: string;
    /**
     * 产品类型。取值：
     * - **AXB_170**。
     * - **AXN_170**。
     * - **AXN_95**。
     * - **AXN\_EXTENSION\_REUSE**。
     * > - 适用于原阿里大于客户，阿里云用户可忽略。
     * > - 当**PoolKey**为空时必填。
     * @example `AXB_170`
     */
    "ProductType"?: string;
    /**
     * 绑定关系ID。
     * 请登录号码隐私保护控制台，在[号码管理](https://dyplsnext.console.aliyun.com/number/list)页筛选号码，点击**详情**查看号码的绑定关系ID，或者在调用[BindAxb](https://help.aliyun.com/zh/pnp/developer-reference/api-dyplsapi-2017-05-25-bindaxb?spm=a2c4g.11186623.0.0.6a807e38uud6C5)等号码绑定API时查看返回参数中的**SubsId**。
     * @example `100000076879****`
     */
    "SubsId": string;
    /**
     * 号码绑定关系中的X号码。
     * X号码是您在控制台已[购买的隐私号](https://dyplsnext.console.aliyun.com/numberbuy?spm=a2c4g.11186623.0.0.7e6449bbtiHP8m)。
     * 请登录号码隐私保护控制台，在[号码管理](https://dyplsnext.console.aliyun.com/number/list)页面获取X号码。在填写X号码时，注意填写与**SubsId**参数关联的X号码。
     * @example `139****1111`
     */
    "PhoneNoX": string;
    /**
     * 设置绑定关系中的A号码。
     * A 号码可设置为手机号码或固定电话，固定电话需要加区号，区号和号码中间不需要加连字符。
     * > 当**OperateType**指定为**updateNoA**时必填。
     * @example `139****0000`
     */
    "PhoneNoA"?: string;
    /**
     * 设置绑定关系中的B号码。
     * B 号码可设置为手机号码或固定电话，固定电话需要加区号，区号和号码中间不需要加连字符。
     * > 当**OperateType**指定为**updateNoB**时必填。
     * @example `138****0000`
     */
    "PhoneNoB"?: string;
    /**
     * 设置绑定关系中的G号码组ID。
     * > 当**OperateType**指定为**updateAxgGroup**时必填。
     * @example `200001234****`
     */
    "GroupId"?: string;
    /**
     * 设置单通呼叫限制。取值：
     * - **CONTROL_AX_DISABLE**：A号码无法呼叫X号码。
     * - **CONTROL_BX_DISABLE**：B号码无法呼叫X号码。
     * - **CONTROL_CLEAR_DISABLE**：清除呼叫限制。
     * > 当**OperateType**指定为**updateCallRestrict**时必填。
     * @example `CONTROL_BX_DISABLE `
     */
    "CallRestrict"?: string;
    /**
     * 重新设置绑定关系的过期时间。
     * > - **OperateType**为**updateExpire**时必填。
     * > - 过期时间必须晚于当前时间1分钟以上。
     * @example `2019-09-05 12:00:00`
     */
    "Expiration"?: string;
    /**
     * 重置绑定关系中的号码显示逻辑。固定取值：**1**（主被叫显示中间号码X）。
     * > 由于运营商监管限制，暂时关闭透传功能。呼叫时，显示真实号码的设置不生效。
     * @example `1`
     */
    "CallDisplayType"?: number;
    /**
     * 重新设置绑定关系中的OutId。
     * @example `abcdef`
     */
    "OutId"?: string;
    /**
     * 重新设置绑定关系中的录音状态。
     * 取值：
     * - **true**：录音。
     * - **false**：不录音。
     * > 该参数没有默认值，不传该参数就不更新对应字段。
     * @example `true`
     */
    "IsRecordingEnabled"?: boolean;
    /**
     * 修改绑定关系的操作。取值：
     * - **updateNoA**：修改A号码。
     * - **updateNoB**：修改B号码。
     * - **updateExpire**：修改绑定关系有效期。
     * - **updateAxgGroup**：修改G号码组。
     * - **updateCallRestrict**：设置单通呼叫限制。
     * - **updateCallDisplayType**：更新呼叫显号逻辑。
     * - **updateOutId**：更新OutId字段。
     * - **updateIsRecordingEnabled**：更新绑定中录音状态。
     * - **updateAsr**：更新绑定中ASR状态。
     * @example `updateNoA`
     */
    "OperateType": string;
    /**
     * 更新绑定关系中的企业彩铃放音编码。
     * 此参数请填写**铃音字段**和**彩铃编码**。
     * **铃音字段**取值：
     * AXB产品：
     * - AXB中，A号码打X的铃音设置：AXBRing_A
     * - AXB中，B号码打X的铃音设置：AXBRing_B
     * - AXB中，A号码拨打X接通后的铃音设置：AXBRing_A_PICKUP
     * - AXB中，B号码拨打X接通后的铃音设置：AXBRing_B_PICKUP
     * AXN产品（含AXN隐私号、AXN分机号）：
     * - AXN中，A号码打X接通前的铃音设置（有回拨号码）：AXNRing_AB
     * - AXN中，A号码打X接通前的铃音设置（无回拨号码）：AXNRing_A
     * - AXN中，N侧号码打X接通前的铃音设置：AXNRing_N
     * - AXN中，A号码打X接通后的铃音设置：AXNRing_A_PICKUP
     * - AXN中，N号码打X接通后的铃音设置：AXNRing_N_PICKUP
     * AXG产品：
     * - AXG中，A号码打X的铃音设置（有回拨号码）：AXGRing_AB
     * - AXG中，A号码打X的铃音设置（无回拨号码）：AXGRing_A
     * - AXG中，G组号码打X的铃音设置：AXGRing_G
     * **彩铃编码**：
     * 在号码隐私保护控制台[企业彩铃管理](https://dyplsnext.console.aliyun.com/number-pool/ringtone?resType=1)页面获取企业彩铃编码。
     * **填写示例**：
     * 如设置AXN分机号，A号码拨打X接通前的铃音（无回拨号码），填写："AXNRing_A": "1000****1"。
     * > 企业彩铃优先使用绑定级别设置的彩铃，如果未设置或设置未生效，则会使用号码池级别的彩铃音。
     * @example `{"AXBRing_B":"1000****1","AXBRing_A":"1000****1"}`
     */
    "RingConfig"?: string;
    /**
     * ASR状态。取值：
     * - **false**：关闭（默认值）
     * - **true**：开启
     * > 当OperateType为updateAsr时此参数必填。
     * @example `false`
     */
    "ASRStatus"?: boolean;
    /**
     * ASR模型ID。取值：
     * - 通用-电话-中文普通话模型 ID：7ee372834d2f4cc7ac0d0ab2d0ae1aac
     * - 通用-电话-中文粤语模型 ID：9b4afe3d224e4fa3bf963697113e2f77
     * - 通用-电话-地方口音模型 ID：3655a6cb94764145a1f9a38a3c3b3b4b
     * > 当ASRStatus为true时此参数必填。
     * @example `7ee372834d2f4cc7ac0d0ab2d0ae1aac`
     */
    "ASRModelId"?: string;
}
