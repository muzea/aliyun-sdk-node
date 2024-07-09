export interface CancelOtaTaskRequest {
    /**
     * 交付组ID。可调用[ListAppInstanceGroup](~~428506~~)接口获取。
     * @example `aig-53fvrq1oanz6c****`
     */
    "AppInstanceGroupId": string;
    /**
     * OTA升级任务ID。可调用[ListAppInstanceGroup](~~428506~~)获取。
     * > 每次调用`ApproveOtaTask`成功后，都会导致`TaskId`变更。因此，再次调用本接口之前，请重新调用`ListAppInstanceGroup`以获取最新的`TaskId`。
     * @example `ota-be7jzm29wrrz5****`
     */
    "TaskId": string;
}
