export interface AttachHostGroupAccountsToUserRequest {
    /**
     * 指定要授权主机组和主机账户的用户所在堡垒机的实例ID。
     * > 您可以调用[DescribeInstances](~~153281~~)接口获取该参数。
     * @example `bastionhost-cn-st220aw****`
     */
    "InstanceId": string;
    /**
     * 指定要授权主机组和主机账户的用户所在堡垒机的区域ID。
     * > 区域ID和区域名称的对应关系，请参见[地域和可用区](~~40654~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 指定要授权主机组和主机账户的用户ID。
     * > 您可以调用[ListUsers](~~204522~~)接口获取该参数。
     * @example `1`
     */
    "UserId": string;
    /**
     * 指定要为用户授权的主机组ID和主机账户名称。最多支持设置10个主机组ID，每个主机组最多支持设置10个主机账户名称。您可以不设置主机账户名称，不设置主机账户名称表示仅为用户授权主机组。该参数的具体结构请参考请求参数列表下的HostGroups参数结构说明。
     * > 您可以调用[ListHostGroups](~~201307~~)接口获取主机组ID，调用[ListHostAccounts](~~204372~~)接口获取主机账户名称。
     * @example `[ {"HostGroupId":"1"}, {"HostGroupId":"2","HostAccountNames":["root","111","abc"]}, {"HostGroupId":"3","HostAccountNames":["root","111","abc"]}, {"HostGroupId":"4","HostAccountNames":["root","111","abc"]} ]`
     */
    "HostGroups": string;
}
