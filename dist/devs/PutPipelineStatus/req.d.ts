export interface PutPipelineStatusRequest {
    /**
     * 对象名称
     * @example `demo-name`
     */
    "name"?: string;
    /**
     * 流水线执行
     */
    "body"?: any;
    /**
     * 强制更新
     * @example `false`
     */
    "force"?: boolean;
}
