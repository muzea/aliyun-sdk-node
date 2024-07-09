export interface ApplyAdviceByIdRequest {
    /**
     * 集群ID。
     * > 您可以调用[DescribeDBClusters](~~129857~~)接口查看数仓版（3.0）集群的集群ID。
     * @example `am-uf6g8w25jacm7****`
     */
    "DBClusterId": string;
    /**
     * 地域ID。
     * > 您可以通过[DescribeRegions](~~143074~~)查看可用的地域。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 建议ID。
     * @example `0baf1f52-53df-487f-8292-99a03716****`
     */
    "AdviceId"?: string;
    /**
     * 建议生成的日期。格式：yyyyMMdd（UTC时间）。
     * @example `20221101`
     */
    "AdviceDate"?: number;
}
