export interface DescribeDcdnSecFuncInfoRequest {
    /**
     * 下拉列表类型：RobotRuleName，RobotObject。
     * @example `RobotRuleName`
     */
    "SecFuncType": string;
    /**
     * 语言类型，将以此语言返回。取值范围：
     * - **en**：英文 (默认)。
     * - **zh**：中文。
     * @example `en`
     */
    "Lang": string;
}
