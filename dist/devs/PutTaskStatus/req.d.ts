export interface PutTaskStatusRequest {
    /**
     * 对象名称
     * @example `demo-name`
     */
    "name"?: string;
    /**
     * 流水线任务
     */
    "body"?: any;
    /**
     * 强制更新
     * @example `false`
     */
    "force"?: boolean;
}
