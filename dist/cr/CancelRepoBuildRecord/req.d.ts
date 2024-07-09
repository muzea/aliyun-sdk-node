export interface CancelRepoBuildRecordRequest {
    /**
     * 实例ID
     * @example `cri-kmsiwlxxdcva****`
     */
    "InstanceId": string;
    /**
     * 镜像仓库ID
     * @example `crr-tquyps22md8p****`
     */
    "RepoId": string;
    /**
     * 构建记录ID
     * @example `74FDBA62-30C0-4F22-BE7B-F1D36FD1****`
     */
    "BuildRecordId": string;
}
