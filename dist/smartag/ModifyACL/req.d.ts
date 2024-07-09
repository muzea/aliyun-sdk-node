export interface ModifyACLRequest {
    /**
     * 访问控制实例所属的地域ID。
     * 您可以通过调用[DescribeRegions](~~69813~~)接口获取地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 访问控制实例ID。
     * @example `acl-e30a66to95cs****`
     */
    "AclId": string;
    /**
     * 访问控制实例的新名称。
     * 名称长度为2~128个字符，以大小写字母或中文开头，可包含数字、下划线（_）和短划线（-）。
     * @example `newname`
     */
    "Name": string;
}
