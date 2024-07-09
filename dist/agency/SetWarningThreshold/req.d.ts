export interface SetWarningThresholdRequest {
    /**
     * 分销客户账号UID
     * @example `1792155717328010`
     */
    "Uid": number;
    /**
     * 百分比，填写范围1到100，当可用信控额度低于信控额度百分比时，触发提示邮件给分销伙伴账号。
     * @example `20`
     */
    "WarningValue": string;
}
