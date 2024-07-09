export interface ListRepoBuildRecordLogRequest {
    /**
     * 实例ID
     * @example `cri-nmbv37dlv5d3****`
     */
    "InstanceId": string;
    /**
     * 镜像仓库ID
     * @example `crr-z4dvahhku9wv4****`
     */
    "RepoId"?: string;
    /**
     * 构建记录ID
     * @example `C5B4D5D7-A1C6-4E9B-ABD2-401361C4****`
     */
    "BuildRecordId": string;
    /**
     * 日志行偏移量
     * @example `0`
     */
    "Offset"?: number;
}
