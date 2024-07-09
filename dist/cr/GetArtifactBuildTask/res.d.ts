export interface GetArtifactBuildTaskResponse {
    /**
     * 结束时间
     * @example `1685415871`
     */
    EndTime: number;
    /**
     * 开始时间
     * @example `1685437471`
     */
    StartTime: number;
    /**
     * 制品构建类型，目前支持：
     * - `IMAGE_TO_ACCELERATED_IMAGE`：ACK场景优化的加速镜像制作
     * - `IMAGE_TO_ECI_ACCELERATED_IMAGE`：ECI场景优化的加速镜像制品
     * @example `IMAGE_TO_ACCELERATED_IMAGE`
     */
    ArtifactBuildType: string;
    /**
     * 请求ID
     * @example `C4C7DD0C-C9D6-437A-A7EE-121EFD70D002`
     */
    RequestId: string;
    /**
     * 制品制作状态，取值：
     * - `PENDING`：调度中
     * - `BUILDING`：制作中
     * - `SUCCESS`：制作成功
     * - `FAILED`：制作失败
     * @example `BUILDING`
     */
    TaskStatus: string;
    /**
     * 制品构建任务ID
     * @example `i2a-1yu****`
     */
    BuildTaskId: string;
    /**
     * 返回码
     * @example `success`
     */
    Code: string;
    /**
     * 是否成功
     * @example `true`
     */
    IsSuccess: boolean;
    Instructions: string[];
    /**
     * 源制品
     */
    SourceArtifact: {
        /**
         * 仓库ID，目前仅支持镜像仓库。
         * @example `cri-shac42yvqzvq****`
         */
        RepoId: string;
        /**
         * 制品版本，目前只支持镜像版本。
         * @example `latest`
         */
        Version: string;
        /**
         * 制品类型，目前仅支持IMAGE。
         * @example `IMAGE`
         */
        ArtifactType: string;
    };
    /**
     * 目的制品
     */
    TargetArtifact: {
        /**
         * 仓库ID，目前仅支持镜像仓库，且目的制品的仓库ID需要与源制品仓库ID保持一致。
         * @example `crr-1234567`
         */
        RepoId: string;
        /**
         * 制品版本，目前只支持镜像。
         * @example `latest_accelerated`
         */
        Version: string;
        /**
         * 制品类型，目前仅支持IMAGE。
         * @example `IMAGE`
         */
        ArtifactType: string;
    };
}
