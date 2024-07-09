export interface DescribeCommonBandwidthPackagesRequest {
    /**
     * 是否包含未生效的订购数据。取值：
     * -  **false**（默认值）：不包含。
     * - **true**：包含。
     * @example `false`
     */
    "IncludeReservationData"?: boolean;
    /**
     * 共享带宽所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     *  共享带宽实例的ID。
     * @example `cbwp-2ze2ic1xd2qeqk145****`
     */
    "BandwidthPackageId"?: string;
    /**
     * 资源组ID。
     * @example `rg-acfmxazb4ph****`
     */
    "ResourceGroupId"?: string;
    /**
     * 共享带宽实例名称。
     * @example `test123`
     */
    "Name"?: string;
    /**
     *  列表的页码。默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时每页的行数。最大值：**50**。默认值：**10**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会查询实例信息。检查项包括是否填写了必需参数、请求格式、实例状态。如果检查不通过，则返回对应错误。如果检查通过，则返回`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回HTTP 2xx状态码并直接进行操作。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 共享带宽实例的标签列表。
     */
    "Tag"?: {
        /**
         * 资源的标签键。最多支持输入20个标签键。如需传入该值，则不能输入空字符串。
         * 一个标签键最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `KeyTest`
         */
        Key: string;
        /**
         * 资源的标签值。最多支持输入20个标签值。如需传入该值，可以输入空字符串。
         * 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `ValueTest`
         */
        Value: string;
    }[];
    /**
     * 是否开启DDoS防护（增强版）。取值：
     * - **false**：不开启。
     * - **true**：开启。
     * > 该参数已废弃。
     * @example `false`
     */
    "SecurityProtectionEnabled"?: boolean;
}
