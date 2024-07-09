export interface LabelBuildRequest {
    /**
     * 场景ID
     * @example `1234****`
     */
    "SceneId": string;
    /**
     * MANUAL（手动）：仅限使用标注工具重建时使用此参数（默认调用参数）；
     * SEMI_AUTOMATIC（自动）：仅限基于App端进行自动化建模时使用；
     * @example `MANUAL（手动）/SEMI_AUTOMATIC（自动）`
     */
    "Mode"?: string;
    /**
     * 墙高，默认0不设置，范围200-1000. 单位cm
     * @example `0`
     */
    "WallHeight"?: number;
    /**
     * 墙宽优化，OFF：关闭（默认） NORMAL：标准 ENHANCED：加强
     * @example `OFF`
     */
    "OptimizeWallWidth"?: string;
    /**
     * 模型效果 PATCH：切片模型（默认） DEPTH：深度模型
     * @example `PATCH`
     */
    "ModelStyle"?: string;
    /**
     * 户型图，DEFAULT（默认），STANDARD（标准）
     * @example `DEFAULT`
     */
    "PlanStyle"?: string;
}
