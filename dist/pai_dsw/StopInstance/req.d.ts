export interface StopInstanceRequest {
    /**
     * 实例ID。如何获取实例ID，请参见[ListInstances](~~470439~~)。
     * @example `dsw-730xxxxxxxxxx`
     */
    "InstanceId": string;
    /**
     * 是否保存环境后再关闭实例。
     * -  打开开关：保存环境后再关闭实例。
     * - 关闭开关：不保存环境数据，直接关闭实例。
     * @example `false`
     */
    "SaveImage"?: boolean;
}
