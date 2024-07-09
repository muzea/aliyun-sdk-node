export interface DiagnosisVersionRequest {
    /**
     * 对应ID类型的ID值
     * @example `b8fe2e24ff2b48e0a3aa4e49809fc1b3`
     */
    "OriginalId": string;
    /**
     * 所属项目ID
     * @example `P0VFCREU`
     */
    "ProjectId": string;
    /**
     * 版本类型，取值有：
     * - **FOTA**：系统版本
     * - **APP**：应用版本
     * @example `FOTA`
     */
    "VersionType": string;
    /**
     * 版本ID
     * @example `1`
     */
    "VersionId": string;
    /**
     * 用于判断的OriginalId的类型，取值有：**device_id**, **sn**, **vin**, **hardware_id**, **uuid **。
     * @example `device_id`
     */
    "IdType": string;
    /**
     * 诊断类型
     * @example `1`
     */
    "DiagnoseStyle": string;
    /**
     * 待诊断的请求查询时间段开始时间点
     * @example `2019-09-18 10:44`
     */
    "StartTime"?: string;
    /**
     * 待诊断的请求查询时间段结束时间点
     * @example `2019-09-18 14:44`
     */
    "EndTime"?: string;
}
