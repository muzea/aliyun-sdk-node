export interface GetSecretParametersByPathResponse {
    /**
     * 翻页标记的Token
     * @example `gAAAAABfTgv5ewUWmNdJ3g7JVLvX70sPH90GZOVGC`
     */
    NextToken: string;
    /**
     * 请求ID
     * @example `25156E99-7437-4590-AA58-2ACA17DE405C`
     */
    RequestId: string;
    /**
     * 查询到的加密参数总数
     * @example `10`
     */
    TotalCount: number;
    /**
     * 分页大小
     * @example `10`
     */
    MaxResults: number;
    /**
     * 参数信息
     */
    Parameters: {
        /**
         * 参数类型
         * @example `Secret`
         */
        Type: string;
        /**
         * 参数更新时间
         * @example `2020-10-21T06:22:48Z`
         */
        UpdatedDate: string;
        /**
         * 参数更新者
         * @example `root(130900000)`
         */
        UpdatedBy: string;
        /**
         * 密钥ID
         * @example `090xxbex-xexx-xxxx-axfc-ddxxcxxxxcex`
         */
        KeyId: string;
        /**
         * 参数内容
         * @example `secretParameter`
         */
        Value: string;
        /**
         * 参数的描述信息
         * @example `secretParameter`
         */
        Description: string;
        /**
         * 参数的约束条件
         * @example `{\"AllowedPattern\": \"^[a-g]*$\"}`
         */
        Constraints: string;
        /**
         * 参数创建者
         * @example `root(130900000)`
         */
        CreatedBy: string;
        /**
         * 参数更新时间
         * @example `2020-10-21T06:22:48Z`
         */
        CreatedDate: string;
        /**
         * 参数版本号
         * @example `1`
         */
        ParameterVersion: number;
        /**
         * 参数名称
         * @example `mySecretParameter`
         */
        Name: string;
        /**
         * 参数ID
         * @example `p-7cdc0000000000000000`
         */
        Id: string;
        /**
         * 参数共享类型
         * @example `Private`
         */
        ShareType: string;
    }[];
}
