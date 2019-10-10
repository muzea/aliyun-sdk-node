interface TerminateAppEnvRequest {
    "RegionId"?: string;
    /**
    * 环境ID
    * @example `we-5d39b8ba6786bd4b149*****`
    */ "EnvId"?: string;
    /**
    * 是否模拟变更
    * - 若设定该参数为true，则不会创建变更，而是输出创建环境的操作步骤；否则会创建环境，并输出变更ID
    *  - 默认为false
    * @example `true`
    */ "DryRun"?: string;
}
export { TerminateAppEnvRequest };