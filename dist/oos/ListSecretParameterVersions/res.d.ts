export interface ListSecretParameterVersionsResponse {
    /**
     * 参数类型
     * @example `Secret`
     */
    Type: string;
    /**
     * 翻页标记的Token
     * @example `MTRBMDc0NjAtRUJFNy00N0NBLTk3NTctMTJDQzQ3NjFENDdB`
     */
    NextToken: string;
    /**
     * 请求ID
     * @example `DBA6E6C8-F75D-41DE-AFF5-1FA03F551CA3`
     */
    RequestId: string;
    /**
     * 参数描述信息
     * @example `SecretParameter`
     */
    Description: string;
    /**
     * 分页大小
     * @example `50`
     */
    MaxResults: number;
    /**
     * 参数创建者
     * @example `root(130900000)`
     */
    CreatedBy: string;
    /**
     * 参数创建时间
     * @example `2020-09-01T08:01:43Z`
     */
    CreatedDate: string;
    /**
     * 参数名称
     * @example `MySecretParameter`
     */
    Name: string;
    /**
     * 返回结果总数
     * @example `1`
     */
    TotalCount: number;
    /**
     * 参数Id
     * @example `p-4c4b401cab6747xxxxxx`
     */
    Id: string;
    /**
     * 参数版本信息
     */
    ParameterVersions: {
        /**
         * 参数版本号
         * @example `1`
         */
        ParameterVersion: number;
        /**
         * 参数值
         * @example `SecretParameter`
         */
        Value: string;
        /**
         * 参数更新日期
         * @example `2020-09-01T08:01:43Z`
         */
        UpdatedDate: string;
        /**
         * 参数更新者
         * @example `root(130900000)`
         */
        UpdatedBy: string;
    }[];
}
