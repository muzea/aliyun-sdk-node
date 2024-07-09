export interface UpdateScriptRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 集群ID。
     * @example `c-b933c5aac8fe****`
     */
    "ClusterId": string;
    /**
     * 脚本ID。
     * @example `cs-da7476a7679a4d4c9cede62ebe09****`
     */
    "ScriptId": string;
    /**
     * 脚本类型。取值范围：
     * - BOOTSTRAP：ECS实例引导脚本。
     * - NORMAL：普通脚本。
     * @example `BOOTSTRAP`
     */
    "ScriptType": string;
    /**
     * 脚本。
     */
    "Script": any;
}
