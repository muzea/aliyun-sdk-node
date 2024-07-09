export interface ModifyCommonBandwidthPackageAttributeRequest {
    /**
     * 共享带宽所在的地域。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     *  共享带宽实例的ID。
     * @example `cbwp-2ze2ic1xd2qeqk145****`
     */
    "BandwidthPackageId": string;
    /**
     *  共享带宽的名称。  长度为 2~128个字符，必须以字母或中文开头，可包含数字，半角句点（.），下划线（_）和短划线（-）。但不能以`http://` 或`https://`开头。
     * @example `test123`
     */
    "Name"?: string;
    /**
     *  共享带宽的描述信息。  长度为 2~256个字符，必须以字母或中文开头，但不能以`http:// `或`https://`开头。
     * @example `描述`
     */
    "Description"?: string;
}
