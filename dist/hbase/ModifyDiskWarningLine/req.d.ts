export interface ModifyDiskWarningLineRequest {
    /**
     * 集群Id。
     * @example `ld-m5eznlga4k5bcxxxx`
     */
    "ClusterId": string;
    /**
     * 告警线，取值范围[50, 90]。
     * @example `80`
     */
    "WarningLine": number;
}
