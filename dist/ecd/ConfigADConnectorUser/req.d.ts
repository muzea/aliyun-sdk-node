export interface ConfigADConnectorUserRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * AD办公网络的ID。
     * @example `cn-hangzhou+dir-778418****`
     */
    "OfficeSiteId": string;
    /**
     * AD域的组织单元OU。您可以调用[ListUserAdOrganizationUnits](~~311259~~)获取。
     * @example `example.com/Domain Controllers`
     */
    "OUName"?: string;
    /**
     * 具有加域权限的AD用户的用户名。
     * 此处配置的AD用户需具备将计算机加入域的权限。配置成功后，在对应AD办公网络下创建的云电脑将加入到指定的组织单元OU中。
     * @example `Administrator`
     */
    "DomainUserName": string;
    /**
     * 具有加域权限的AD用户的密码。
     * @example `testPassword`
     */
    "DomainPassword": string;
}
