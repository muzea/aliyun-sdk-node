export interface ListTagResourcesRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源ID，资源ID数量限制为1至50。
     * @example `["templateNam1","templateName2"]`
     */
    "ResourceIds"?: any;
    /**
     * 资源类型定义。取值范围：
     * template:OOS模版
     * execution:OOS执行
     * @example `template`
     */
    "ResourceType": string;
    /**
     * 标签键及值，键值对数量限制为1至20。
     * @example `{"k1":"v2","k2":"v2"}`
     */
    "Tags"?: any;
    /**
     * 查询返回结果承接上一页的Token，该参数需从上一页返回结果中获取。
     * @example `MTRBMDc0NjAtRUJFNy00N0NBLTk3NTctMTJDQzQ`
     */
    "NextToken"?: string;
}
