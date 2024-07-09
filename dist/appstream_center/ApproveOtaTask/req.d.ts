export interface ApproveOtaTaskRequest {
    /**
     * 交付组ID。可调用[ListAppInstanceGroup](~~428506~~)接口获取。
     * @example `aig-9ciijz60n4xsv****`
     */
    "AppInstanceGroupId": string;
    /**
     * 交付组所属的地域ID。可以调用[ListRegions](~~428500~~)查询无影云应用支持的地域列表。
     * @example `cn-hangzhou`
     */
    "BizRegionId": string;
    /**
     * OTA升级任务ID。可调用[ListAppInstanceGroup](~~428506~~)获取。
     * > 每次调用`ApproveOtaTask`成功后，都会导致`TaskId`变更。因此，再次调用本接口之前，请重新调用`ListAppInstanceGroup`以获取最新的`TaskId`。
     * @example `ota-be7jzm29wrrz5****`
     */
    "TaskId": string;
    /**
     * OTA升级任务类型。
     * @example `Fota`
     */
    "OtaType": string;
    /**
     * OTA升级任务的开始时间。按照ISO 8601格式填写。
     * @example `2022-08-04T14:36:00+08:00`
     */
    "StartTime": string;
}
