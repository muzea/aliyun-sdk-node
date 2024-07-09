export interface CreateCustomGroupRequest {
    /**
     * 自定义类型，取值：
     * - landmark：自定义地标。
     * - object：自定义物体。
     * @example `landmark`
     */
    "Algorithm": string;
    /**
     * 自定义库名称，最长支持64字节。
     * @example `landmark测试库`
     */
    "CustomGroupName": string;
    /**
     * 自定义库描述，最长支持128字节。
     * @example `用于landmark测试`
     */
    "CustomGroupDescription"?: string;
}
