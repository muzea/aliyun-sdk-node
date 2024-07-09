export interface PutPipelineTriggerRequest {
    /**
     * 流水线触发器
     */
    "body"?: any;
    /**
     * 对象名称
     * @example `demo-name`
     */
    "name"?: string;
    /**
     * 强制更新
     * @example `false`
     */
    "force"?: boolean;
}
