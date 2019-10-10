interface ModifyDBInstanceNetworkTypeRequest {
    "RegionId"?: string;
    /**
    * 实例ID。
    * @example `rm-uf6wjk5xxxxxxx`
    */ "DBInstanceId": string;
    /**
    * 目标网络类型，取值：
    * * **VPC**：专有网络；
    * * **Classic**：经典网络。
    * @example `Classic`
    */ "InstanceNetworkType": string;
    "OwnerId"?: number;
    /**
    * 是否保留经典网络地址，取值：
    * * **True**：保留；
    * * **False**：不保留。
    * 默认值：**False**。
    * >从经典网络切换到专有网络时该参数有效。
    * @example `True`
    */ "RetainClassic"?: string;
    /**
    * 经典网络地址保留的天数，取值**1-120**，单位：天。默认值：**7**。
    * >若传入参数**RetainClassic**=**True**，则该参数必传。
    * @example `7`
    */ "ClassicExpiredDays"?: string;
    /**
    * 读写分离的经典网络地址保留的天数，取值**1-120**，单位：天。默认值：**7**。
    * >* 当实例存在经典网络类型的读写分离地址，且**RetainClassic**=**True**，本参数有效。
    * @example `7`
    */ "ReadWriteSplittingClassicExpiredDays"?: number;
    /**
    * VPC ID。
    * @example `vpc-uf6f7l4fg90xxxxxx`
    */ "VPCId"?: string;
    /**
    * 交换机ID，若传入**VPCId**，则该参数必传。
    * @example `vsw-uf6adz52c2pxxxxx`
    */ "VSwitchId"?: string;
    /**
    * 设置实例的内网IP，需要在指定交换机的IP地址范围内。系统默认通过**VPCId**和**VSwitchId**自动分配。
    * @example `172.10.40.25`
    */ "PrivateIpAddress"?: string;
    /**
    * 设置实例的内网读写分离地址的IP，需要在指定交换机的IP地址范围内。系统默认通过**VPCId**和**VSwitchId**自动分配。
    * >当前实例存在经典网络类型的读写分离地址时，该值有效。
    * @example `192.168.0.22`
    */ "ReadWriteSplittingPrivateIpAddress"?: string;
}
export { ModifyDBInstanceNetworkTypeRequest };