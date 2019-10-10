interface StopInstanceRequest {
    "RegionId"?: string;
    /**
    * 指定的实例ID。
    * @example `i-instanceid1`
    */ "InstanceId": string;
    "SourceRegionId"?: string;
    /**
    * RAM用户的虚拟账号ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 是否确认关机。仅对i1型实例规格族生效，且为i1型的实例规格族的必选参数。
    * 默认值：false。
    * @example `true`
    */ "ConfirmStop"?: boolean;
    /**
    * 停止实例时的是否强制关机策略。取值范围：
    * -   true：强制关机。
    * -   false（默认）：正常关机流程。
    * @example `false`
    */ "ForceStop"?: boolean;
    /**
    * 停止ECS实例后，实例依然计费。取值：KeepCharging
    * 开通[默认VPC内实例停机不收费](~~63353~~)功能后，您可以通过设置`StoppedMode=KeepCharging`保持停机收费，ECS实例停止后会继续计费，并为您保留ECS实例规格库存和公网IP地址。
    * @example `keepcharging`
    */ "StoppedMode"?: string;
    "DryRun"?: boolean;
    "Hibernate"?: boolean;
}
export { StopInstanceRequest };