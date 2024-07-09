export interface BatchApplyAdviceByIdListRequest {
    /**
     * 集群ID。
     * > 您可以调用[DescribeDBClusters](~~129857~~)接口查看数仓版（3.0）集群的集群ID。
     * @example `am-uf6g8w25jacm7****`
     */
    "DBClusterId": string;
    /**
     * 地域ID，通过[DescribeRegions](~~143074~~)查看可用的地域。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 待批量应用的建议ID列表，多个建议ID之间用半角逗号（,）分隔。
     * @example `c2589ff3-e86c-4f19-80c8-2aeb7dd9****,53414470-ebf4-4a53-a312-8a1ad8fd****,6e8dce84-fec8-4b0b-9c04-b0cea12c****,b3b9703d-55ca-47e0-96dd-6a4a9dbf****`
     */
    "AdviceIdList"?: string;
    /**
     * 建议生成的日期。格式：yyyyMMdd（UTC时间）。
     * @example `20221115`
     */
    "AdviceDate"?: number;
}
