interface GatherAppEnvLogRequest {
    "RegionId"?: string;
    /**
    * 环境ID，将收集此环境中实例的日志
    * @example `wa-5d1af9c802470221ab7*****`
    */ "EnvId"?: string;
    /**
    * 实例ID列表，将收集此列表中指定实例的日志
    * @example `["i-wz94zz7mx8kt5kz*****"]`
    */ "TargetInstances"?: string;
    /**
    * 日志路径，指定要收集的日志所在路径
    * @example `/home/admin/app/webplus-app.log`
    */ "LogPath"?: string;
}
export { GatherAppEnvLogRequest };