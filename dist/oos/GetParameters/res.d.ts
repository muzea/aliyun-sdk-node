export interface GetParametersResponse {
    /**
     * 请求ID
     * @example `2597E94B-5346-42D1-BB58-D3333EDD0975`
     */
    RequestId: string;
    /**
     * 无效参数列表。
     */
    InvalidParameters: string[];
    /**
     * 参数信息
     */
    Parameters: {
        /**
         * 参数类型
         * @example `StringList`
         */
        Type: string;
        /**
         * 参数更新时间
         * @example `2020-10-22T03:30:45Z`
         */
        UpdatedDate: string;
        /**
         * 参数更新者
         * @example `root(130900000)`
         */
        UpdatedBy: string;
        /**
         * 标签
         * @example `{"k1": "v1", "k2": "v2"}`
         */
        Tags: any;
        /**
         * 参数值
         * @example `parameter,parameter1`
         */
        Value: string;
        /**
         * 参数的描述信息
         * @example `parameter`
         */
        Description: string;
        /**
         * 参数的约束条件
         * @example `{\"MaxLength\": 2}`
         */
        Constraints: string;
        /**
         * 资源组ID
         * @example `rg-acfmxsn4m4******`
         */
        ResourceGroupId: string;
        /**
         * 参数创建者
         * @example `root(130900000)`
         */
        CreatedBy: string;
        /**
         * 参数创建时间
         * @example `2020-10-22T03:30:45Z`
         */
        CreatedDate: string;
        /**
         * 参数版本号
         * @example `1`
         */
        ParameterVersion: number;
        /**
         * 参数名称
         * @example `MyParameter`
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
