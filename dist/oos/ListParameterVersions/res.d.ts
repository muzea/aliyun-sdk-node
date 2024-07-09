export interface ListParameterVersionsResponse {
    /**
     * 参数类型
     * @example `String`
     */
    Type: string;
    /**
     * 翻页标记的Token
     * @example `MTRBMDc0NjAtRUJFNy00N0NBLTk3NTctMTJDQzQ3NjFENDdB`
     */
    NextToken: string;
    /**
     * 请求ID
     * @example `FD08D89D-B6C8-4AA2-A2B4-521D3F4A39FA`
     */
    RequestId: string;
    /**
     * 参数描述信息
     * @example `parameter-description`
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
     * @example `2020-09-07T11:37:29Z`
     */
    CreatedDate: string;
    /**
     * 参数名称
     * @example `MyParameter`
     */
    Name: string;
    /**
     * 返回结果总数
     * @example `50`
     */
    TotalCount: number;
    /**
     * 参数Id
     * @example `p-a483b520e0axxxxxxxxx`
     */
    Id: string;
    /**
     * 参数版本信息
     */
    ParameterVersions: {
        /**
         * 参数版本
         * @example `1`
         */
        ParameterVersion: number;
        /**
         * 参数值内容
         * @example `MyParameter`
         */
        Value: string;
        /**
         * 参数更新时间
         * @example `2020-09-07T11:37:29Z`
         */
        UpdatedDate: string;
        /**
         * 参数更新者
         * @example `root(130900000)`
         */
        UpdatedBy: string;
    }[];
}
