export interface BatchDeployApisRequest {
    /**
     * 运行环境名称，取值：
     * - **RELEASE**：线上
     * - **TEST**：测试
     * - PRE：预发
     * @example `RELEASE`
     */
    "StageName": string;
    /**
     * 描述
     * @example `test`
     */
    "Description": string;
    /**
     * 指定要操作的api列表
     */
    "Api"?: {
        /**
         * API分组编号
         * @example `b4f5c342b8bc4ef88ccda0332402****`
         */
        GroupId: string;
        /**
         * API 唯一标识
         * @example `2b35dd68345b472f8051647306a1****`
         */
        ApiUid: string;
    }[];
}
