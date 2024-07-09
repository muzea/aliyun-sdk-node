export interface UpgradeDBVersionRequest {
    /**
     * 地域ID。
     * > 您可以调用[DescribeRegions](~~86912~~)接口查看可用的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 实例ID。
     * > 您可以调用[DescribeDBInstances](~~86911~~)接口查看目标地域下所有的AnalyticDB PostgreSQL实例的详情，包括实例ID。
     * @example `gp-wz9kmr708m155j***`
     */
    "DBInstanceId": string;
    /**
     * 小版本。
     * @example `6.3.6.1-202112012048`
     */
    "MinorVersion"?: string;
    /**
     * 此参数已废弃，无需填写。
     * @example `null`
     */
    "MajorVersion"?: string;
    /**
     * 此参数已废弃，无需填写。
     * @example `null`
     */
    "SwitchTimeMode"?: string;
    /**
     * 此参数已废弃，无需填写。
     * @example `null`
     */
    "SwitchTime"?: string;
}
