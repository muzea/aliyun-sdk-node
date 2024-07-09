export interface DeployApiRequest {
    /**
     * 分组编号
     * @example `63be9002440b4778a61122f14c2b2bbb`
     */
    "GroupId"?: string;
    /**
     * API编号
     * @example `d6f679aeb3be4b91b3688e887ca1fe16`
     */
    "ApiId": string;
    /**
     * 运行环境名称，取值：
     * - **RELEASE**：线上
     * - **PRE**：预发
     * - **TEST**：测试
     * @example `RELEASE`
     */
    "StageName": string;
    /**
     * 本次发布备注说明
     * @example `for_test1`
     */
    "Description": string;
}
