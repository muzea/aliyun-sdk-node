export interface DescribeParameterGroupsRequest {
    /**
     * 地域ID。
     * > 您可以通过[DescribeRegions](~~98041~~)接口查看当前账号下的所有可用地域信息，包括地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 数据库引擎类型，当前仅支持**MySQL**类型。
     * @example `MySQL`
     */
    "DBType"?: string;
    /**
     * 数据库引擎版本号，取值范围如下：
     * * **5.6**
     * * **5.7**
     * * **8.0**
     * @example `8.0`
     */
    "DBVersion"?: string;
    /**
     * 资源组ID。
     * @example `rg-************`
     */
    "ResourceGroupId"?: string;
}
