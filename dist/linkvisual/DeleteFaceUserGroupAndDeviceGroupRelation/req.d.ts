export interface DeleteFaceUserGroupAndDeviceGroupRelationRequest {
    /**
     * 业务隔离ID，用于隔离同一个阿里云账号下不同业务应用之间的数据。请与调用[AddFaceUserGroupAndDeviceGroupRelation](~~288342~~)接口，添加用户组与设备组之间的人脸同步关系时设置的**IsolationId**保持一致。
     * @example `ZheJiangHZ`
     */
    "IsolationId": string;
    /**
     * 用户组与设备组同步关系控制ID。请传入调用[AddFaceUserGroupAndDeviceGroupRelation](~~288342~~)接口，添加用户组与设备组之间的人脸同步关系时，获取并保存到本地的**ControlId**参数值。
     * @example `qcb2yea4ha4d****`
     */
    "ControlId": string;
}
