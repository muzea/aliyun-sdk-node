export interface ExportConversationDetailsRequest {
    /**
     * 实例id
     * @example `6c01a99f-1b72-4f75-a8bd-3875766bd19d`
     */
    "InstanceId": string;
    /**
     * 主叫号码。
     * @example `13581588**`
     */
    "CallingNumber"?: string;
    /**
     * 开始日期范围左区间
     * @example `1582266750353`
     */
    "BeginTimeLeftRange"?: number;
    /**
     * 开始日期范围右区间
     * @example `1640793599000`
     */
    "BeginTimeRightRange"?: number;
    /**
     * 可选参数
     */
    "Options"?: string[];
    "RoundsLeftRange"?: number;
    "RoundsRightRange"?: number;
    "Result"?: number;
}
