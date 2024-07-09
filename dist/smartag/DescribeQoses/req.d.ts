export interface DescribeQosesRequest {
    /**
     * QoS策略实例所属的地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * QoS策略实例ID。
     * - 如果要同时查询多个QoS策略实例，多个实例ID之间以半角逗号（,）分隔开。
     * - 如果不填写该项，则默认查询该地域下所有QoS策略实例信息。
     * @example `qos-oek3r2cmvk7m8q****`
     */
    "QosIds"?: string;
    /**
     * QoS策略实例名称。
     * 名称长度为2~100个字符，以大小写字母或中文开头，可包含数字、下划线（_）、半角句号（.）和短划线（-）。
     * @example `zxtest`
     */
    "QosName"?: string;
    /**
     * 分页查询时，每页包含的条目数。默认值为**10**，最大值为**50**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 查询页码。默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
}
