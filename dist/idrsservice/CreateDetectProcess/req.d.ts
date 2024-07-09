export interface CreateDetectProcessRequest {
    /**
     * 检测流程名称
     * @example `Android检测流程`
     */
    "Name": string;
    /**
     * 流程配置草稿内容
     * @example `{}`
     */
    "Draft"?: string;
    /**
     * 流程配置正式内容
     * @example `{}`
     */
    "Content"?: string;
    /**
     * 类型：remote（远程双录），local（本地双录）
     * @example `LOCAL`
     */
    "Type"?: string;
}
