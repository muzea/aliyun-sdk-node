export interface AbolishApiRequest {
    /**
     * 指定分组编号
     * @example `123`
     */
    "GroupId"?: string;
    /**
     * 指定API编号
     * @example `d6f679aeb3be4b91b3688e887ca1fe16`
     */
    "ApiId": string;
    /**
     * 运行环境名称，取值：
     * - **RELEASE**：线上
     * - **TEST**：测试
     * @example `RELEASE`
     */
    "StageName": string;
}
