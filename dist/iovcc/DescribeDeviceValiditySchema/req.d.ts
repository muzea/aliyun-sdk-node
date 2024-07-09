export interface DescribeDeviceValiditySchemaRequest {
    /**
     * 机型信息
     * @example `model_2nd`
     */
    "DeviceModel"?: string;
    /**
     * schema版本
     * @example `1.0`
     */
    "SchemaVersion"?: string;
    /**
     * 项目ID
     * @example `PIC3UA0V`
     */
    "ProjectId": string;
}
