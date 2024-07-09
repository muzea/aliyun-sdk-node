export interface DescribeAccountsRequest {
    /**
     * AnalyticDB MySQL数仓版（3.0）集群ID。
     * >您可以调用[DescribeDBClusters](~~129857~~)接口查看目标地域下所有AnalyticDB MySQL数仓版（3.0）集群的集群ID。
     * @example `amv-bp11q28kvl688****`
     */
    "DBClusterId": string;
    /**
     * 数据库账号。
     * > 此参数不填写时，默认返回所有数据库账号信息。
     * @example `test_accout`
     */
    "AccountName"?: string;
    /**
     * 账号类型，不填写时默认查询所有类型的账号信息。取值说明：
     * - **Normal**：普通账号。
     * - **Super**：高权限账号。
     * @example `Super`
     */
    "AccountType"?: string;
}
