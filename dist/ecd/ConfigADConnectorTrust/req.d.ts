export interface ConfigADConnectorTrustRequest {
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
     * 信任密码。该密码为AD域中配置信任关系（即与无影ecd.acs建立信任关系）时设置的密码。
     * @example `password123***`
     */
    "TrustKey": string;
    /**
     * 判断是否是为AD办公网络的RDS License Domain配置信任密码。
     * @example `true`
     */
    "RdsLicenseDomain"?: boolean;
}
