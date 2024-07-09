export interface PublishRoutineCodeRevisionRequest {
    /**
     * 边缘函数名, 同一个账号下命名唯一。
     * @example `test`
     */
    "Name": string;
    /**
     * 将要发布的边缘函数ER代码版本。
     * @example `1620876959997924701`
     */
    "SelectCodeRevision": string;
    /**
     * 将要发布的Env环境。
     * > - production：环境名称，包含SpecName（环境名称）和AllowedHosts（域名白名单）。
     * > - presetCanary：选填，根据您业务需要添加的灰度环境。
     * @example `["production","presetCanaryZhejiang"]`
     */
    "Envs": any;
}
