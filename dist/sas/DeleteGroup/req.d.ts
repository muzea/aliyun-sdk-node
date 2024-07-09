export interface DeleteGroupRequest {
    /**
     * 访问源IP地址。
     * @example `192.172.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 指定要删除的服务器分组ID。
     * > 删除服务器分组，需要提供服务器分组ID，该ID可调用[DescribeAllGroups](~~DescribeAllGroups~~)接口获取。
     * @example `9454789`
     */
    "GroupId": number;
}
