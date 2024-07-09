export interface CreateNetworkAclRequest {
    /**
     * 网络ACL的名称。
     * 长度为1~128个字符，不能以http://或https://开头。
     * @example `acl-1`
     */
    "NetworkAclName"?: string;
    /**
     * 网络ACL的描述信息。
     * 长度为1～256个字符，不能以http://或https://开头。
     * @example `This is my NetworkAcl.`
     */
    "Description"?: string;
}
