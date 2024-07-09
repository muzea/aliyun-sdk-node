export interface ModifyDtsJobDedicatedClusterRequest {
    /**
     * 任务ID。取值可以由多个任务ID组成一个JSON数组，ID之间用半角逗号（,）隔开。
     * @example `["dtsxxxx01", "dtsxxx02"]`
     */
    "DtsJobIds"?: string;
    /**
     * 专属集群ID。
     * @example `dtsxxxx`
     */
    "DedicatedClusterId"?: string;
    /**
     * DTS实例所属的地域。
     * > 专属集群支持的地域，请参见[DTS专属集群](~~417481~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
