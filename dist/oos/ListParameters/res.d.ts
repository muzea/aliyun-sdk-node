export interface ListParametersResponse {
    /**
     * 翻页标记的Token
     * @example `gAAAAABfTgv5ewUWmNdJ3g7JVLvX70sPH90GZOVGC6KPDUL0FIIb`
     */
    NextToken: string;
    /**
     * 请求ID
     * @example `A81E4B2E-6B33-4BAE-9856-55DB7C893E01`
     */
    RequestId: string;
    /**
     * 返回结果总数
     * @example `5`
     */
    TotalCount: number;
    /**
     * 分页大小
     * @example `50`
     */
    MaxResults: number;
    /**
     * 参数信息
     */
    Parameters: {
        /**
         * 参数类型
         * @example `String`
         */
        Type: string;
        /**
         * 参数更新时间
         * @example `2020-09-01T08:01:43Z`
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
         * 参数描述信息
         * @example `parameter`
         */
        Description: string;
        /**
         * 参数创建者
         * @example `root(130900000)`
         */
        CreatedBy: string;
        /**
         * 资源组
         * @example `rg-acfmxsn4m4******`
         */
        ResourceGroupId: string;
        /**
         * 参数创建时间
         * @example `2020-09-01T08:01:43Z`
         */
        CreatedDate: string;
        /**
         * 参数版本
         * @example `1`
         */
        ParameterVersion: string;
        /**
         * 参数名称
         * @example `MyParameter`
         */
        Name: string;
        /**
         * 普通参数Id
         * @example `p-4c4b401cab6747xxxxxx`
         */
        Id: string;
        /**
         * 参数共享类型
         * @example `Private`
         */
        ShareType: string;
    }[];
}
