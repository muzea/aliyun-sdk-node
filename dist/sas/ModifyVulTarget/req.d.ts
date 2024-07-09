export interface ModifyVulTargetRequest {
    /**
     * 配置项目标。该参数为JSON格式，包含以下字段：
     * - **vulType**  漏洞类型，取值为：
     *      - **cve**  linux系统漏洞
     *     - **sys**  windows系统漏洞
     *     - **cms**   Web-Cms漏洞
     *     - **emg**  应急漏洞
     * @example `{\"vulType\":\"sys\"}`
     */
    "Config"?: string;
    /**
     * 操作目标。该参数为JSON格式，包含以下字段：
     * - **target** 目标机器的uuid
     * - **targetType** 目标类型，固定为uuid。
     * - **flag**  标记，取值为：
     *     - **add** 选中
     *     - **del** 取消选中
     * @example `[{\"target\": \"9cd5c684-7201-4de5-ad2c-cea89a5e****\", \"targetType\": \"uuid\", \"flag\": \"add\"}]`
     */
    "Target"?: string;
}
