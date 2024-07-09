export interface DescribeDeployedApiRequest {
    /**
     * API分组ID，系统生成，全局唯一
     * @example `81750604ccff48c48f34d6c0165e09db`
     */
    "GroupId"?: string;
    /**
     * 指定API编号
     * @example `ab7c95a01a7e42f28718f34497bbf47c`
     */
    "ApiId": string;
    /**
     * 指定要操作API的环境。
     * - **RELEASE**: 线上
     * - **PRE**: 预发
     * - **TEST**: 测试
     * @example `RELEASE`
     */
    "StageName": string;
}
