export interface CreateACLRequest {
    /**
     * 访问控制实例所属的地域ID。
     * 您可以通过调用[DescribeRegions](~~69813~~)接口获取地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 访问控制实例名称。
     * 名称长度为2~128个字符，以大小写字母或中文开头，可包含数字、下划线（_）和短划线（-）。
     * @example `username`
     */
    "Name": string;
    /**
     * 访问控制实例待关联的智能接入网关实例类型。取值：
     * - **acl-hardware**（默认值）：智能接入网关硬件实例。
     * - **acl-software**：智能接入网关App实例。
     * @example `acl-hardware`
     */
    "AclType"?: string;
}
