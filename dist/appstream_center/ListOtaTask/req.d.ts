export interface ListOtaTaskRequest {
    /**
     * 每页的查询结果数量。取值范围：1~100。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 当前展示的查询结果页码。
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 交付组ID。
     * @example `aig-53fvrq1oanz6c****`
     */
    "AppInstanceGroupId": string;
    /**
     * OTA升级任务类型。
     * @example `Fota`
     */
    "OtaType": string;
}
