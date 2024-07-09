export interface CreateSceneRequest {
    /**
     * 实例ID。
     * @example `airec-cn-o400whm78004`
     */
    "instanceId": string;
    /**
     * 是否dryRun
     * **true：**校验场景ID是否存在
     * **false：**默认为false,创建场景。
     * @example `false`
     */
    "dryRun"?: boolean;
}
