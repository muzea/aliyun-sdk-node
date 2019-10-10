interface RebootInstanceRequest {
    "RegionId"?: string;
    /**
    * 指定实例的ID。
    * @example `i-instance1`
    */ "InstanceId": string;
    /**
    * @example `hide`
    */ "SourceRegionId"?: string;
    /**
    * RAM用户的虚拟账号ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 重启ECS实例前是否强制关机策略。取值范围：
    * -   true：重启ECS实例前强制关机。
    * -   false（默认）：重启ECS实例前正常关机。
    * @example `false`
    */ "ForceStop"?: boolean;
    /**
    * 是否只预检此次请求。
    * - true：发送检查请求，不会创建实例。检查项包括是否填写了必需参数、请求格式、业务限制和ECS库存。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
    * - false（默认）：发送正常请求，通过检查后直接重启实例。
    * @example `false`
    */ "DryRun"?: boolean;
}
export { RebootInstanceRequest };