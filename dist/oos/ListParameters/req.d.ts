export interface ListParametersRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 参数名称。**本Action下的Name为模糊匹配。**
     * @example `MyParameter`
     */
    "Name"?: string;
    /**
     * 分页大小。取值范围：10-100。默认为50。
     * @example `50`
     */
    "MaxResults"?: number;
    /**
     * 翻页标记的Token。
     * @example `MTRBMDc0NjAtRUJFNy00N0NBLTk3NTctMTJDQzA`
     */
    "NextToken"?: string;
    /**
     * 根据字段排序。取值范围：
     * - Name（参数名称）
     * - CreatedDate（创建时间）
     * @example `Name`
     */
    "SortField"?: string;
    /**
     * 排序顺序。取值范围：
     * - Ascending（升序）
     * - Descending（默认值）：降序
     * @example `Descending`
     */
    "SortOrder"?: string;
    /**
     * 参数类型。取值范围：
     * - String
     * - StringList
     * @example `String`
     */
    "Type"?: string;
    /**
     * 参数路径。例如：Name为/path/path1/Myparameter 此时包含参数路径。
     * @example `/path1/path2/`
     */
    "Path"?: string;
    /**
     * 参数路径是否递归。
     * 默认：false
     * @example `false`
     */
    "Recursive"?: boolean;
    /**
     * 标签。
     * @example `{"k1": "v1", "k2": "v2"}`
     */
    "Tags"?: any;
    /**
     * 资源组ID。
     * @example `rg-acfmxsn4m4******`
     */
    "ResourceGroupId"?: string;
    /**
     * 是否为公共参数，取值范围
     * - Public
     * - Private
     *  默认为 'Private'
     * @example `‘Private’`
     */
    "ShareType"?: string;
}
