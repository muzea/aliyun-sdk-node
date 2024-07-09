export interface ResetDeviceInstanceRequest {
    /**
     * 应用ID。可以通过调用ListApplications接口获取，具体操作，请参见ListApplications。
     * @example `d0639abf-789a-4527-b420-031d2cd9ad9b`
     */
    "AppId": string;
    /**
     * 实例ID。
     * @example `i-5sfdblzjqf3zvjnr7oh0bhhj2`
     */
    "InstanceId": string;
    /**
     * 镜像ID。
     * @example `m-5si16wo6simkt267p8b7hcmy3`
     */
    "ImageId": string;
}
