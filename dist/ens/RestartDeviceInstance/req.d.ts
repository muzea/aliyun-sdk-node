export interface RestartDeviceInstanceRequest {
    /**
     * 应用ID。可以通过调用ListApplications接口获取，具体操作，请参见ListApplications。
     * @example `f829265e-2f6f-4088-a4be-c1fb95ab45f9`
     */
    "AppId": string;
    /**
     * 实例ID。
     * @example `i-5slvdwcxf6ch81nl4r7p04j5q`
     */
    "InstanceId": string;
}
