export interface DescribeTrafficControlsByApiRequest {
    /**
     * 指定要查询的API所属分组
     * @example `0009db9c828549768a200320714b8930`
     */
    "GroupId": string;
    /**
     * 指定要查询的Api编号
     * @example `3b81fd160f5645e097cc8855d75a1cf6`
     */
    "ApiId": string;
    /**
     * 指定要查询的环境。
     * - **RELEASE**：线上
     * - **TEST**：测试
     * @example `RELEASE`
     */
    "StageName": string;
}
