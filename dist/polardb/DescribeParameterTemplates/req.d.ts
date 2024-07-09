export interface DescribeParameterTemplatesRequest {
    /**
     * 数据库引擎类型，当前仅支持**MySQL**。
     * @example `MySQL`
     */
    "DBType": string;
    /**
     * 数据库版本，取值范围如下：
     * * **5.6**
     * * **5.7**
     * * **8.0**
     * @example `5.7`
     */
    "DBVersion": string;
    /**
     * 地域ID。
     * > 您可以通过[DescribeRegions](~~98041~~)接口查看当前账号下的所有可用地域信息，包括地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源组ID。
     * @example `rg-************`
     */
    "ResourceGroupId"?: string;
}
