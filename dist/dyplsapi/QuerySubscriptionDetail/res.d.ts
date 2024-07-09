export interface QuerySubscriptionDetailResponse {
    /**
     * 请求状态码。
     * * 返回OK代表请求成功。
     * * 其他错误码详见[错误码列表](~~109196~~)。
     * @example `OK`
     */
    Code: string;
    /**
     * 状态码的描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `066E6E47-04CB-4774-A976-4F73CB76D4A3`
     */
    RequestId: string;
    /**
     * 接口调用成功后返回的结构体。
     */
    SecretBindDetailDTO: {
        /**
         * 该绑定关系的状态。取值：
         * - **0**：已失效。
         * - **1**：生效中。
         * @example `1`
         */
        Status: number;
        /**
         * AXG分机号中的分机号码。
         * @example `130`
         */
        Extension: string;
        /**
         * 绑定关系中的B号码。
         * @example `138****0000`
         */
        PhoneNoB: string;
        /**
         * 绑定关系中的G号码组ID，即GID。
         * @example `200001234****`
         */
        GroupId: number;
        /**
         * 是否对该绑定关系产生的所有通话，进行通话录音。取值：
         * - **false**：不录音
         * - **true**：录音
         * @example `true`
         */
        NeedRecord: boolean;
        /**
         * ASR状态。取值：
         * - **false**：关闭
         * - **true**：开启
         * @example `true`
         */
        ASRStatus: boolean;
        /**
         * 绑定关系的创建时间。
         * @example `2019-03-05 12:00:00`
         */
        GmtCreate: string;
        /**
         * 绑定关系的过期时间。
         * @example `2019-09-05 12:00:00`
         */
        ExpireDate: string;
        /**
         * 绑定关系ID。
         * @example `100000076879****`
         */
        SubsId: string;
        /**
         * 绑定关系中的隐私号码，即X号码。
         * @example `139****1111`
         */
        PhoneNoX: string;
        /**
         * 单通呼叫限制的状态。如果没有设置单通呼叫限制，则不返回该参数。取值：
         * -  **CONTROL_AX_DISABLE**：A号码无法呼叫X号码。
         * -  **CONTROL_BX_DISABLE**：B号码无法呼叫X号码。
         * @example `CONTROL_BX_DISABLE `
         */
        CallRestrict: string;
        /**
         * ASR模型ID。取值：
         * - 通用-电话-中文普通话模型 ID：7ee372834d2f4cc7ac0d0ab2d0ae1aac
         * - 通用-电话-中文粤语模型 ID：9b4afe3d224e4fa3bf963697113e2f77
         * - 通用-电话-地方口音模型 ID：3655a6cb94764145a1f9a38a3c3b3b4b
         * @example `7ee372834d2f4cc7ac0d0ab2d0ae1aac`
         */
        ASRModelId: string;
        /**
         * 绑定关系中的A号码。
         * @example `139****0000`
         */
        PhoneNoA: string;
    };
}
