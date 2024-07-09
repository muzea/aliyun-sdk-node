export interface DescribePluginsByApiRequest {
    /**
     * 指定要查询的API所属分组ID
     * @example `3c7a38392e764718ad7673e7b7f535d4`
     */
    "GroupId": string;
    /**
     * 指定要查询的API编号
     * @example `93f4ead4080c4b2da70b7f81f50ae459`
     */
    "ApiId": string;
    /**
     * 指定要查询的环境。
     * - **RELEASE**: 线上
     * - **PRE**: 预发
     * - **TEST**: 测试
     * @example `RELEASE`
     */
    "StageName": string;
    /**
     * 指定要查询的页码，默认是1，起始是1
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 返回指定的每页条数
     * @example `10`
     */
    "PageSize"?: number;
}
