export interface DeleteRoutineConfEnvsRequest {
    /**
     * Routine函数名, 同一个账号下命名唯一。
     * @example `test`
     */
    "Name": string;
    /**
     * 需要删除的Env列表中的自定义灰度环境。
     * @example `["presetCanaryZheJiang"]`
     */
    "Envs": any;
}
