export interface ModifyInstanceADAuthServerRequest {
    /**
     * 堡垒机的实例ID。
     * >您可以调用[DescribeInstances](~~153281~~)接口获取该参数。
     * @example `bastionhost-cn-st220aw****`
     */
    "InstanceId": string;
    /**
     * 堡垒机的地域ID。
     * > Region ID和地域名称的对应关系，请参见[地域和可用区](~~40654~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 服务器的地址。
     * @example `192.168.XX.XX`
     */
    "Server": string;
    /**
     * 备用服务器的地址。
     * @example `192.168.XX.XX`
     */
    "StandbyServer"?: string;
    /**
     * 访问服务器的端口。
     * @example `389`
     */
    "Port": string;
    /**
     * 是否支持SSL。取值：
     * - **true**：支持
     * - **false**：不支持
     * @example `true`
     */
    "IsSSL": string;
    /**
     * 基准域名（Base DN）。
     * @example `dc=test,dc=com`
     */
    "BaseDN": string;
    /**
     * AD服务器上的域。
     * @example `domain`
     */
    "Domain": string;
    /**
     * 服务器的账号。
     * @example `cn=Manager,dc=test,dc=com`
     */
    "Account": string;
    /**
     * 服务器账号的密码。
     * @example `******`
     */
    "Password"?: string;
    /**
     * 用户的筛选条件。
     * @example `(objectClass=top)`
     */
    "Filter"?: string;
    /**
     * 用户名称对应服务器的属性名。
     * @example `nameAttr`
     */
    "NameMapping"?: string;
    /**
     * 用户邮箱对应服务器的属性名。
     * @example `emailAttr`
     */
    "EmailMapping"?: string;
    /**
     * 用户手机号对应服务器的属性名。
     * @example `mobileAttr`
     */
    "MobileMapping"?: string;
}
