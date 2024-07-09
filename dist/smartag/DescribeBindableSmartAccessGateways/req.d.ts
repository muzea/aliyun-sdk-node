export interface DescribeBindableSmartAccessGatewaysRequest {
    /**
     * 智能接入网关实例的地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 云连接网实例ID。
     * @example `ccn-fu75a6m4clv7ai****`
     */
    "CcnId": string;
    /**
     * 是否只查询跨账号所属的智能接入网关实例。取值：
     * - **false**（默认值）：否。
     * - **true**：是。
     * @example `false`
     */
    "CrossAccount"?: boolean;
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
    /**
     * 智能接入网关实例ID。
     * @example `sag-00uc4vgxch1zsu****`
     */
    "SmartAGId"?: string;
    /**
     * 智能接入网关实例名称。
     * 名称长度为2~128个字符，以大小写字母或中文开头，可包含数字、下划线（_）和短划线（-）。
     * @example `sdggd111`
     */
    "Name"?: string;
}
