export interface ModifyStorageCapacityUnitAttributeRequest {
    /**
     * SCU所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * SCU ID。
     * @example `scu-bp67acfmxazb4p****`
     */
    "StorageCapacityUnitId": string;
    /**
     * SCU的新名称，长度为2~128个英文或中文字符。必须以大小写字母或中文开头，不能以http://和https://开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。
     * @example `testNewScuName`
     */
    "Name"?: string;
    /**
     * SCU的新描述信息，长度为2~256个英文或中文字符，不能以http://和https://开头。
     * @example `testNewScuDescription`
     */
    "Description"?: string;
}
