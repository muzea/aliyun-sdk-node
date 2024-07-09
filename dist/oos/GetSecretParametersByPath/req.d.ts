export interface GetSecretParametersByPathRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 参数路径，参数长度小于200个字符串。例如参数/secretParameter/mySecretParameter，其中/secretParameter为此参数的路径。
     * @example `/secretParameter`
     */
    "Path": string;
    /**
     * 是否递归查询路径。如参数/secretParameter/mySecretParameter与/secretParameter/secretParameter1/mySecretParameter，取值范围：
     * - true（搜索出//secretParameter/mySecretParameter与/secretParameter/secretParameter1/mySecretParameter两个结果）
     * - false（仅能搜索出/secretParameter/mySecretParameter这一个结果）
     * @example `false`
     */
    "Recursive"?: boolean;
    /**
     * 翻页标记的Token。
     * @example `MTRBMDc0NjAtRUJFNy00N0NBLTk3NTctMTJDQzA`
     */
    "NextToken"?: string;
    /**
     * 分页大小。取值范围：1-10。默认为10。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 是否解密参数值。
     * 取值范围：
     * - true
     * - false（默认）
     * @example `true`
     */
    "WithDecryption"?: boolean;
}
