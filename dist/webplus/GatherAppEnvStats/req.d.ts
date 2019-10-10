interface GatherAppEnvStatsRequest {
    "RegionId"?: string;
    /**
    * 环境ID，将收集此环境中指定实例的诊断信息
    * @example `we-5d3eaaea2977ca5251e*****`
    */ "EnvId"?: string;
    /**
    * 实例ID列表，将收集此列表中指定实例的诊断信息
    * @example `["i-wz94zz7mx8kt5kz*****"]`
    */ "TargetInstances"?: string;
}
export { GatherAppEnvStatsRequest };