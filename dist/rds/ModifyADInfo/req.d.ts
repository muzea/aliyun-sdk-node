export interface ModifyADInfoRequest {
    /**
     * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
     * @example `ETnLKlblzczshOTUbOCz****`
     */
    "ClientToken"?: string;
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `rm-uf6wjk5****`
     */
    "DBInstanceId": string;
    /**
     * 地域ID。可调用DescribeRegions获取。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * AD域的域名（DNS）信息。
     * @example `example.com`
     */
    "ADDNS"?: string;
    /**
     * AD域的IP地址。
     * @example `47.100.XX.XX`
     */
    "ADServerIpAddress"?: string;
    /**
     * AD域的账号。
     * @example `test_account`
     */
    "ADAccountName"?: string;
    /**
     * AD域的密码。
     * @example `test_password`
     */
    "ADPassword"?: string;
}
