export interface DescribePurchasedApisRequest {
    /**
     * 分组编号
     * @example `d27ad517be5f4c95ac3631780a8f4d50`
     */
    "GroupId"?: string;
    /**
     * 指定要操作API的环境。
     * - **RELEASE**: 线上
     * - **PRE**: 预发
     * - **TEST**: 测试
     * @example `RELEASE`
     */
    "StageName"?: string;
    /**
     * API编号
     * @example `3b81fd160f5645e097cc8855d75a1cf6`
     */
    "ApiId"?: string;
    /**
     * API名称
     * @example `纯真IP库查询接口`
     */
    "ApiName"?: string;
    /**
     * API是否公开，目前可以取值：
     * - **PUBLIC**：公开，如选择此类型，该API的线上环境，会在所有用户的控制台“发现API”页面展示
     * - **PRIVATE**：不公开，如选择此类型，当该组API在云市场上架时，私有类型的API不会上架
     * @example `PUBLIC`
     */
    "Visibility"?: string;
    /**
     * 每页条目
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 返回指定的页码
     * @example `1`
     */
    "PageNumber"?: number;
}
