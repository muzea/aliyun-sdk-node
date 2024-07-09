export interface StartMicroOutboundRequest {
    /**
     * 产品名称。默认取值：**aiccs**。
     * @example `aiccs`
     */
    "ProdCode"?: string;
    /**
     * 账户类型。
     * @example `BUC_TYPE`
     */
    "AccountType"?: string;
    /**
     * 账户ID。
     * @example `223457****`
     */
    "AccountId"?: string;
    /**
     * 指令Code。
     * @example `outBound_Call`
     */
    "CommandCode"?: string;
    /**
     * 主叫号码。
     * @example `1367123****`
     */
    "CallingNumber"?: string;
    /**
     * 被叫号码。
     * @example `0571456****`
     */
    "CalledNumber"?: string;
    /**
     * 业务信息。
     * @example `{"caseId":23232****}`
     */
    "ExtInfo"?: string;
    /**
     * 业务自定义AppName。
     * @example `aliyun`
     */
    "AppName"?: string;
}
