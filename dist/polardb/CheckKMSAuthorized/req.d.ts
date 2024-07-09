export interface CheckKMSAuthorizedRequest {
    /**
     * 地域ID。
     * > 您可以调用[DescribeRegions](~~98041~~)接口查看目标账号下的可用地域信息，包括地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 集群ID。
     * > 您可以调用[DescribeDBClusters](~~98094~~)接口查看目标地域下所有的集群信息，包括集群ID。
     * @example `pc-************`
     */
    "DBClusterId": string;
    /**
     * TDE密钥所在地域。
     * @example `cn-beijing`
     */
    "TDERegion"?: string;
}
