export interface DescribeDeviceShadowRequest {
    /**
     * 项目ID
     * @example `PIC3UA0V`
     */
    "ProjectId": string;
    /**
     * 设备ID
     * @example `1ac5e182e9634252a02d442a4d5d16fc`
     */
    "DeviceId": string;
    /**
     * 机型名称
     * @example `model_2nd`
     */
    "DeviceModel"?: string;
    /**
     * 要获取的路径
     * @example `/`
     */
    "Path": string;
    /**
     * 是否只查看订阅的信息
     * @example `false`
     */
    "ViewSubscribed"?: boolean;
}
