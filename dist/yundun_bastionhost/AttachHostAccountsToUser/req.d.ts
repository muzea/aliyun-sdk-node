export interface AttachHostAccountsToUserRequest {
    /**
     * 指定要授权主机和主机账户的用户所在堡垒机的实例ID。
     * > 您可以调用[DescribeInstances](~~153281~~)接口获取该参数。
     * @example `bastionhost-cn-st220aw****`
     */
    "InstanceId": string;
    /**
     * 指定要授权主机和主机账户的用户所在堡垒机的区域ID。
     * > 区域ID和区域名称的对应关系，请参见[地域和可用区](~~40654~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 指定要授权主机和主机账户的用户ID。
     * > 您可以调用[ListUsers](~~204522~~)接口获取该参数。
     * @example `1`
     */
    "UserId": string;
    /**
     * 要为用户授权的主机ID和主机账户ID。最多支持设置10个主机ID，每个主机最多支持设置9个主机账户ID。您可以不设置主机账户ID，不设置主机账户ID表示仅为用户授权主机。该参数的具体结构请参考请求参数列表下的Hosts参数结构说明。
     * > 您可以调用[ListHosts](~~200665~~)接口获取主机ID，调用[ListHostAccounts](~~204372~~)接口获取主机账户ID。
     * @example `[ {"HostId":"1"}, {"HostId":"2","HostAccountIds":["1","2","3"]}, {"HostId":"3","HostAccountIds":["4","5","6"]}, {"HostId":"4","HostAccountIds":["9","8","7"]}  ]`
     */
    "Hosts": string;
}
