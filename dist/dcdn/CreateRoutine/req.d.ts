export interface CreateRoutineRequest {
    /**
     * Routine函数名, 同一个账号下命名唯一。
     * @example `test`
     */
    "Name": string;
    /**
     * Routine描述。
     * @example `the description of this routine`
     */
    "Description"?: string;
    /**
     * Env环境配置。
     * @example `{"staging":{"SpecName":"50ms"},"production":{"SpecName":"50ms"}}`
     */
    "EnvConf"?: any;
}
