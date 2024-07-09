export interface RenewBackupPlanRequest {
    /**
     * 备份计划ID，可通过调用[DescribeBackupPlanList](~~437215~~)接口获取此参数的值。
     * @example `dbstooi01exxx`
     */
    "BackupPlanId": string;
    /**
     * 指定预付费实例为包年或者包月类型，取值：
     * - Year：包年
     * - Month：包月
     * @example `Month`
     */
    "Period": string;
    /**
     * 指定购买时长，取值：
     * - 当参数Period为Year时，UsedTime取值为1~5。
     * - 当参数Period为Month时，UsedTime取值为1~11。
     * @example `1`
     */
    "UsedTime": number;
    /**
     * 用于保证请求的幂等性，防止重复提交请求。
     * @example `HKAJHFIUEQWBFIJSNFOIWHN`
     */
    "ClientToken"?: string;
}
