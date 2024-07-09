export interface SendVerificationCodeRequest {
    /**
     * 客户请求唯一id，用于幂等校验，可以用uuid生成
     * @example `46c1341e-2648-447a-9b11-70b6a298d94d`
     */
    "ClientToken"?: string;
    /**
     * 实例ID
     * @example `ccc_xp_pre-cn-***`
     */
    "InstanceId": string;
    /**
     * 手机号（坐席绑定手机号码）
     * @example `136********`
     */
    "Phone": string;
}
