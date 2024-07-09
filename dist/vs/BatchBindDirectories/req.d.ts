export interface BatchBindDirectoriesRequest {
    /**
     * 目录ID
     * @example `399*****488-cn-qingdao`
     */
    "DirectoryId": string;
    /**
     * 设备ID，多值用逗号分隔
     * @example `348*****380-cn-qingdao`
     */
    "DeviceId": string;
}
