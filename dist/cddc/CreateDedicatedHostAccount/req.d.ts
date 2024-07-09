export interface CreateDedicatedHostAccountRequest {
    /**
     * 主机ID。可调用[DescribeDedicatedHosts](~~200944~~)获取。
     * @example `ch-bp10a5id3boqi****`
     */
    "DedicatedHostId": string;
    /**
     * 自定义主机账号名称。
     * * 长度为2~16个字符。
     * * 以字母开头，以字母或数字结尾。
     * * 由小写字母、数字、下划线（_）组成。
     * @example `test`
     */
    "AccountName": string;
    /**
     * 主机账号名的密码。密码要求：
     * * 长度为6~32位。
     * * 大写字母、小写字母、数字、特殊字符。
     * * 特殊字符为：`!@#$%^&*()_+-=`
     * > 您的引擎为SQL Server时，密码要求不能包含账户名（忽略大小写）。
     * @example `testxxxxxx`
     */
    "AccountPassword": string;
    /**
     * 主机所在地域ID。可调用[DescribeDedicatedHostAttribute](~~213010~~)获取。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 关联的堡垒机ID，可以在云数据库专属集群控制台**堡垒机列表**查看。
     * @example `bastionhost-cn-xxxxxxxxxxx`
     */
    "BastionInstanceId"?: string;
    /**
     * 主机账号类型，取值：
     * - **Normal**：普通账号。
     * - **Admin**： 管理员账号。
     * 关于主机账号的权限说明，请参见[主机权限说明](~~176240~~)。
     * @example `Admin`
     */
    "AccountType"?: string;
    /**
     * 由客户端生成该参数值，用于保证请求的幂等性，防止重复提交请求。字符长度不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
     * @example `ETnLKlblzczshOTUbOCz*******`
     */
    "ClientToken"?: string;
}
