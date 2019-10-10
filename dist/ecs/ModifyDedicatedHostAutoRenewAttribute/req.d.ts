interface ModifyDedicatedHostAutoRenewAttributeRequest {
    /**
    * 专有宿主机所属的地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 专有宿主机ID。最多可以输入100个包年包月专有宿主机ID，ID之间用半角逗号（,）隔开。
    * @example `ddh-xxxxxxxxxxxxxxxxx`
    */ "DedicatedHostIds": string;
    /**
    * @example `cn-beijing`
    */ "SourceRegionId"?: string;
    "OwnerId"?: number;
    /**
    * 续费周期。取值范围：请参见**PeriodUnit**参数的描述部分。
    * @example `1`
    */ "Duration"?: number;
    /**
    * 续费时长单位。取值范围：
    * - Week：周。此时，参数**Duration**取值范围为 {1, 2, 3}。
    * - Month（默认）：月。此时，参数**Duration**的取值范围为 { 1, 2, 3, 6, 12}。
    * @example `Month`
    */ "PeriodUnit"?: string;
    /**
    * 是否自动续费包年包月专有宿主机。取值范围：
    * - true：自动续费包年包月专有宿主机。
    * - false（默认）：不自动续费包年包月专有宿主机。
    * @example `false`
    */ "AutoRenew"?: boolean;
    /**
    * 是否自动续费包年包月专有宿主机，参数**RenewalStatus**的优先级高于**AutoRenew**。取值范围：
    * - AutoRenewal：自动续费。
    * - Normal：待续费。
    * - NotRenewal：不续费，也不发送到期提醒。到期前第三天我们会发送不续费提醒。不续费的专有宿主机可以设置成待续费（Normal），再自行续费（[RenewDedicatedHosts](~~93287~~)）或设置为自动续费（AutoRenewal）。
    * @example `Normal`
    */ "RenewalStatus"?: string;
}
export { ModifyDedicatedHostAutoRenewAttributeRequest };