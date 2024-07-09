export interface DescribeEcGrantRelationRequest {
    /**
     * 要查询授权关系的实例类型。取值：
     * - **VBR**：边界路由器VBR（Virtual border router）实例，表示查询VBR实例拥有哪些VPC实例的授权。
     * - **VPC**：专有网络VPC（Virtual Private Cloud）实例，表示查询VPC实例对哪些VBR实例进行了授权。
     * @example `VBR`
     */
    "InstanceType": string;
    /**
     * 要查询授权关系的实例ID。
     * - 当**InstanceType**取值为**VBR**时，此处配置为VBR实例ID。
     * - 当**InstanceType**取值为**VPC**时，此处配置为VPC实例ID。
     * @example `vbr-bp12mw1f8k3jgygk9****`
     */
    "InstanceId": string;
    /**
     * 列表的页码。默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时每页的行数。最大值：**50**。默认值：**10**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 要查询授权关系的VBR实例所在地域ID。
     * - 当**InstanceType**为**VBR**时，该参数需要配置。
     * - 当**InstanceType**为**VPC**时，该参数不需要配置。
     * @example `cn-hangzhou`
     */
    "VbrRegionNo"?: string;
}
