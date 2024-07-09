export interface AddFaceDeviceGroupRequest {
    /**
     * 业务隔离ID，用于同一个阿里云账号下不同业务应用之间的数据隔离，支持英文大小写字母、数字。
     * 例如，您在A地区和B地区，均有人脸识别业务，那么可设置不同的业务隔离ID，区分A、B地区的人脸识别业务。
     * ><notice>
     * 请妥善保存业务隔离ID值，以便后续调用此业务隔离区其它接口时使用。
     * ></notice>
     * @example `ZheJiangHZ`
     */
    "IsolationId": string;
    /**
     * 设备组名称，请自定义参数值，长度不超过128个字符。
     * @example `TestDeviceGroup`
     */
    "DeviceGroupName": string;
}
