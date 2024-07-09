export interface GetInternetTupleRequest {
    /**
     * 要查询的公网流量的地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 查询的元组类型。取值：
     * - **1**：表示一元组。
     * - **2**：表示二元组。
     * - **5**：表示五元组。
     * @example `1`
     */
    "TupleType": number;
    /**
     * 查询起始时间的毫秒时间戳。
     * @example `1684373600099`
     */
    "BeginTime": number;
    /**
     * 查询结束时间的毫秒时间戳。
     * @example `1684373700099`
     */
    "EndTime": number;
    /**
     * 查询流量方向，取值：
     * - **in**：入云方向。
     * - **out**：出云方向。
     * @example `in`
     */
    "Direction": string;
    /**
     * 数据排序的指标。默认值：**ByteCount**，表示按流量排序。
     * @example `ByteCount`
     */
    "OrderBy"?: string;
    /**
     * 阿里云端IP。
     * @example `112.74.XX.XX`
     */
    "CloudIp"?: string;
    /**
     * 阿里云端端口。
     * > 仅**TupleType**配置为**5**时，才需要配置该参数。
     * @example `443`
     */
    "CloudPort"?: string;
    /**
     * 对端IP。
     *  > 仅**TupleType**配置为**2**或**5**时，才需要配置该参数。
     * @example `122.112.XX.XX`
     */
    "OtherIp"?: string;
    /**
     * 对端端口。
     *  > 仅**TupleType**配置为**5**时，才需要配置该参数。
     * @example `40002`
     */
    "OtherPort"?: string;
    /**
     * 阿里云端实例ID。
     * @example `eip-sample*`
     */
    "InstanceId"?: string;
    /**
     * 协议号。
     * >支持全部协议， 仅**TupleType**配置为**5**时，才需要配置该参数。
     * @example `6`
     */
    "Protocol"?: string;
    /**
     * 流量数据的排序方式。
     * - **desc**：从大到小排序。
     * - **asc**：从小到大排序
     * @example `desc`
     */
    "Sort"?: string;
    /**
     * 展示排序靠前的数据。默认值：**10**。表示默认展示排序前10的数据。最大值：**100**。
     * @example `10`
     */
    "TopN"?: number;
    /**
     * 云端运营商。
     * > 通常为“阿里巴巴”或“阿里云”。
     * @example `阿里巴巴`
     */
    "CloudIsp"?: string;
    /**
     * 对端运营商。
     * > 查看运营商情况时，请指定此参数。
     * @example `移动`
     */
    "OtherIsp"?: string;
    /**
     * 对端国家。
     * >仅**TupleType**配置为**2**或**5**时，才需要配置该参数。
     * @example `中国`
     */
    "OtherCountry"?: string;
    /**
     * 对端城市。
     * >仅**TupleType**配置为**2**或**5**时，才需要配置该参数。
     * @example `杭州市`
     */
    "OtherCity"?: string;
    /**
     * 批量过滤时的实例ID列表。
     */
    "InstanceList"?: string[];
    /**
     * 批量过滤时的云上IP列表。
     */
    "CloudIpList"?: string[];
    /**
     * 是否使用多账号管理功能。默认值：**false**。表示不使用。
     * > 多账号管理功能默认不开放，如需使用，请联系商务经理申请使用权限。
     * @example `false`
     */
    "UseMultiAccount"?: boolean;
    /**
     * 成员账号ID列表。
     */
    "AccountIds"?: number[];
}
