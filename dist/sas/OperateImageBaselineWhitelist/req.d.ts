export interface OperateImageBaselineWhitelistRequest {
    /**
     * 基线子项key的列表。
     * @example `hc.image.checklist.identify.hc_exploit_es_linux.item`
     */
    "BaselineItemKeyList": string;
    /**
     * 操作类型。取值：
     * - **add**：增加。
     * - **del**：删除。
     * @example `add`
     */
    "Operation": string;
    /**
     * 镜像UUID。
     * @example `a5250ebca765dc9eb1a84b790b0e****`
     */
    "ImageUuid"?: string;
    /**
     * 指定请求和接收消息的语言类型，默认值为**zh**。取值：
     * - **zh**：中文。
     * - **en**：英文。
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 扫描范围集合。
     */
    "ScanRange"?: string[];
}
