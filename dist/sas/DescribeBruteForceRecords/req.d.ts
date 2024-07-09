export interface DescribeBruteForceRecordsRequest {
    /**
     * 分页查询时，当前页的页码。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 暴力破解防御规则的状态。
     * 取值：
     * - **0**：失效
     * - **1**：启用
     * - **2**： 失败
     * @example `1`
     */
    "Status"?: number;
    /**
     * 防暴力破解IP地址。
     * @example `175.106.XX.XX`
     */
    "BlockIp"?: string;
    /**
     * 分页查询时，每页显示的数据最大条数。每页默认显示的数据条数为20条，PageSize参数值为空时，将默认返回20条数据。建议PageSize取值不要为空。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 指定要查询的服务器实例ID。
     * @example `i-bp1fu4aqltf1huhc****`
     */
    "InstanceId"?: string;
    /**
     * 要查询的服务器的名称或IP地址。
     * @example `222.185.XX.XX`
     */
    "Remark"?: string;
}
