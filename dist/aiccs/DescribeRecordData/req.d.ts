export interface DescribeRecordDataRequest {
    /**
     * 产品名称。默认取值：**aiccs**。
     * @example `aiccs`
     */
    "ProdCode"?: string;
    /**
     * 帐户类型。
     * @example `BUC_TYPE`
     */
    "AccountType"?: string;
    /**
     * 帐户ID。
     * @example `2235****`
     */
    "AccountId"?: string;
    /**
     * 会话ID。
     * @example `1004849****`
     */
    "Acid"?: string;
    /**
     * 录音脱敏等级。取值范围：**1-4**。
     * @example `2`
     */
    "SecLevel"?: number;
}
