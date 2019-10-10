interface ModifyInstanceAutoRenewAttributeRequest {
    /**
    * 实例所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 实例ID。支持批量设置最多100个包年包月实例，多个实例ID以英文逗号分隔。
    * @example `i-instance1,i-instance2`
    */ "InstanceId": string;
    "SourceRegionId"?: string;
    /**
    * RAM用户的虚拟账号ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * - `PeriodUnit`为`week`（周）时，`Duration`的取值范围为：{"1", "2", "3", "4"}
    * @example `2`
    */ "Duration"?: number;
    /**
    * 实例到期前是否自动续费。默认值：false
    * @example `true`
    */ "AutoRenew"?: boolean;
    /**
    * 置是否不再续费，参数`RenewalStatus`的优先级高于参数`AutoRenew`。如果不传入参数`RenewalStatus`，则默认以参数`AutoRenew`为准。取值范围：
    * - AutoRenewal：设置为自动续费。
    * - Normal：取消自动续费。
    * - NotRenewal：不再续费。传入该值后，系统不再发送到期提醒，只在到期前第三天发送不续费提醒。不再续费的ECS实例可以更改成待续费（`Noramal`）后，再自行续费或设置为自动续费。
    * @example `AutoRenewal`
    */ "RenewalStatus"?: string;
    /**
    * - week
    * @example `week`
    */ "PeriodUnit"?: string;
}
export { ModifyInstanceAutoRenewAttributeRequest };