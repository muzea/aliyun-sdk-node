export interface DescribeApiDocRequest {
    /**
     * 指定的分组编号
     * @example `123`
     */
    "GroupId"?: string;
    /**
     * 环境名称，可选值：
     * - **RELEASE**: 线上
     * - **TEST**: 测试
     * 若不传入，则默认为release。
     * @example `RELEASE`
     */
    "StageName"?: string;
    /**
     * 指定的API编号
     * @example `3b81fd160f5645e097cc8855d75a1cf6`
     */
    "ApiId": string;
}
