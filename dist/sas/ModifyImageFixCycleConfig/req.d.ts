export interface ModifyImageFixCycleConfigRequest {
    /**
     * 镜像定时修复开关。
     * - **on**：打开。
     * - **off**：关闭。
     * @example `on`
     */
    "ImageFixSwitch"?: string;
    /**
     * 定时修复周期。单位，天。
     * @example `7`
     */
    "ImageFixCycle"?: number;
    /**
     * 镜像定时修复的范围。该参数为JSON格式，包含以下字段：
     * - **type**：目标类型，固定为repo
     * - **target**：目标内容，格式：命名空间/镜像仓
     * @example `{\"type\":\"repo\",\"target\":[\"cdp-uat/zentao\",\"qa-dac/yyuan9\",\"cafdms-qa/xxl-job-admin\"]}`
     */
    "ImageFixTarget"?: string;
    /**
     * 镜像有过修改的时间范围。单位，天。
     * @example `30`
     */
    "ImageTimeRange"?: number;
}
