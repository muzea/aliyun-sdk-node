export interface AddFaceUserGroupAndDeviceGroupRelationRequest {
    /**
     * 隔离Id
     * @example `TestIsolationId`
     */
    "IsolationId": string;
    /**
     * 实例Id
     * @example `TestInstanceId`
     */
    "IotInstanceId"?: string;
    /**
     * 用户组Id
     * @example `avjyxurd`
     */
    "UserGroupId": string;
    /**
     * 设备组Id
     * @example `kvjyhurc`
     */
    "DeviceGroupId": string;
    /**
     * 人脸同步关系
     * @example `SYNC_INFO_PICTURE`
     */
    "Relation": string;
}
