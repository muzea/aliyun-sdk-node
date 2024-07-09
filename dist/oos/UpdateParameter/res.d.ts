export interface UpdateParameterResponse {
    /**
     * 请求ID
     * @example `AF1AE6DE-61C4-435E-8687-072CFACCCEC7`
     */
    RequestId: string;
    /**
     * 普通参数信息。
     */
    Parameter: {
        /**
         * 普通参数类型
         * @example `String`
         */
        Type: string;
        /**
         * 普通参数更新时间
         * @example `2020-09-01T08:04:23Z`
         */
        UpdatedDate: string;
        /**
         * 普通参数更新者
         * @example `root(130900000)`
         */
        UpdatedBy: string;
        /**
         * 标签
         * @example `{"k1": "v1", "k2": "v2"}`
         */
        Tags: string;
        /**
         * 普通参数描述信息
         * @example `update`
         */
        Description: string;
        /**
         * 参数约束条件
         * @example `"{'AllowedValues':['parameter'],'AllowedPattern':'parameter','MinLength':0,'MaxLength':20}"`
         */
        Constraints: string;
        /**
         * 资源组ID
         * @example `rg-acfmxsn4m4******`
         */
        ResourceGroupId: string;
        /**
         * 普通参数创建者
         * @example `root(130900000)`
         */
        CreatedBy: string;
        /**
         * 普通参数创建时间
         * @example `2020-09-01T08:01:43Z`
         */
        CreatedDate: string;
        /**
         * 普通参数版本
         * @example `2`
         */
        ParameterVersion: number;
        /**
         * 普通参数名称
         * @example `MyParameter`
         */
        Name: string;
        /**
         * 普通参数Id
         * @example `p-4c4b401cab6747xxxxxx`
         */
        Id: string;
        /**
         * 普通参数共享类型
         * @example `Private`
         */
        ShareType: string;
    };
}
