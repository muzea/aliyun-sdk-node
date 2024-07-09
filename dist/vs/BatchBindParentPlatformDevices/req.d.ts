export interface BatchBindParentPlatformDevicesRequest {
    /**
     * 上级平台ID。
     * @example `361*****212-cn-qingdao`
     */
    "ParentPlatformId": string;
    /**
     * 设备ID，多值用逗号分隔
     * @example `348*****380-cn-qingdao`
     */
    "DeviceId": string;
}
