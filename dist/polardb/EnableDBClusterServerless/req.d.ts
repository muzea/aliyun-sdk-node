export interface EnableDBClusterServerlessRequest {
    /**
     * 集群ID。
     * @example `pc-**************`
     */
    "DBClusterId": string;
    /**
     * 单节点伸缩下限。取值范围：1 PCU~8 PCU。
     * @example `1`
     */
    "ScaleMin"?: string;
    /**
     * 单节点伸缩上限。取值范围：1 PCU~8 PCU。
     * @example `2`
     */
    "ScaleMax"?: string;
    /**
     * 只读节点个数的伸缩下限。取值范围：0~7。
     * @example `1`
     */
    "ScaleRoNumMin"?: string;
    /**
     * 只读节点个数的伸缩上限。取值范围：0~7。
     * @example `2`
     */
    "ScaleRoNumMax"?: string;
    /**
     * 稳态AP只读节点个数下限。取值范围：0~7。
     * @example `1`
     */
    "ScaleApRoNumMin"?: string;
    /**
     * 稳态AP只读节点个数上限。取值范围：0~7。
     * @example `1`
     */
    "ScaleApRoNumMax"?: string;
}
