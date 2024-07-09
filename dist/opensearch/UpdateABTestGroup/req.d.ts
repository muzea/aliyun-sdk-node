export interface UpdateABTestGroupRequest {
    /**
     * 应用名称
     * @example `“my_app_group_name”`
     */
    "appGroupIdentity": string;
    /**
     * 场景ID
     * @example `20404`
     */
    "sceneId": number;
    /**
     * 组ID
     * @example `13467`
     */
    "groupId": number;
    /**
     * 请求体，参考：[ABTestGroup](~~178935~~)
     */
    "body"?: any;
    /**
     * 是否只预检此次请求，取值含义如下：
     * - true：发送检查请求，不会创建终端节点。检查项包括AccessKey是否有效、RAM用户的授权情况和是否填写了必需参数。
     * - false（默认值）：立即触发创建终端节点。
     * @example `true`
     */
    "dryRun"?: boolean;
}
