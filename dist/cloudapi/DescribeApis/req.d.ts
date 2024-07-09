export interface DescribeApisRequest {
    /**
     * 指定的分组编号
     * @example `c4a4d2de657548a2bd485d5d4df42b4a`
     */
    "GroupId"?: string;
    /**
     * 指定的API编号
     * @example `f68c19ee3bd1478fb58aa05ce8ae9b5a`
     */
    "ApiId"?: string;
    /**
     * API名称(模糊匹配)
     * @example `weather`
     */
    "ApiName"?: string;
    /**
     * 分类 ID
     * @example `1553414085247362`
     */
    "CatalogId"?: string;
    /**
     * API是否公开，可以取值：
     * - **PUBLIC**：公开，如选择此类型，该API的线上环境定义，会在所有用户的控制台“发现API”页面可见。
     * - **PRIVATE**：不公开，如选择此类型，当该组API在云市场上架时，私有类型的API不会上架。
     * @example `PUBLIC`
     */
    "Visibility"?: string;
    /**
     * 指定分页查询时每页行数，默认值为10
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 指定要查询的页码，默认是1，起始是1
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 是否启用标签验证
     * @example `true`
     */
    "EnableTagAuth"?: boolean;
    /**
     * 指定规则所适用的对象标签，可设置多个。
     * @example `Key， Value`
     */
    "Tag"?: {
        /**
         * 标签键
         * @example `key`
         */
        Key: string;
        /**
         * 标签值
         * @example `value`
         */
        Value: string;
    }[];
    /**
     * API的请求Path
     * @example `/illegal/query`
     */
    "ApiPath"?: string;
    /**
     * API的请求HTTP方法
     * @example `GET`
     */
    "ApiMethod"?: string;
    /**
     * 是否过滤未发布的接口
     * @example `true`
     */
    "UnDeployed"?: boolean;
    /**
     * 指定要操作API的环境。
     * - **RELEASE**: 线上
     * - **PRE**: 预发
     * - **TEST**: 测试
     * @example `RELEASE`
     */
    "StageName"?: string;
}
