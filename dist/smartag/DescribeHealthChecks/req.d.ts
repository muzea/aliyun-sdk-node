export interface DescribeHealthChecksRequest {
    /**
     * 智能接入网关实例的地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 智能接入网关实例ID。
     * @example `sag-qi0p07ld5q86k3****`
     */
    "SmartAGId": string;
    /**
     * 健康检查实例ID。
     * @example `hc-ifflm5ygj3diwiu****`
     */
    "HcInstanceId"?: string;
    /**
     * 健康检查实例名称。
     * 长度为2~100个字符，以大小字母或中文开头，可包含数字、半角句号（.）、下划线（_）或短划线（-）。
     * @example `ddd3333`
     */
    "Name"?: string;
    /**
     * 当前分页页码。默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页展示时，每页的列表条目数。默认值为**10**，最大值为**50**。
     * @example `10`
     */
    "PageSize"?: number;
}
