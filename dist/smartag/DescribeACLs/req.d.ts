export interface DescribeACLsRequest {
    /**
     * 访问控制实例所属的地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 访问控制实例ID。
     * - 若同时查询多个访问控制实例，多个实例ID请以半角逗号（,）隔开。
     * - 若不填写该项，则表示查询当前地域下所有访问控制实例的信息。
     * @example `acl-xhwhyuo43l*******`
     */
    "AclIds"?: string;
    /**
     * 访问控制实例名称。
     * 名称长度为2~100个字符，以大小写字母或中文开头，可包含数字、下划线（_）、半角句号（.）和短划线（-）。
     * @example `test`
     */
    "Name"?: string;
    /**
     * 分页查询时每页的条目数。最大值为**50**，默认值为**10**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 查询页码，默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 访问控制实例支持绑定的智能接入网关实例类型。取值：
     * - **acl-hardware**：智能接入网关硬件实例。
     * - **acl-software**：智能接入网关App实例。
     * @example `acl-hardware`
     */
    "AclType"?: string;
}
