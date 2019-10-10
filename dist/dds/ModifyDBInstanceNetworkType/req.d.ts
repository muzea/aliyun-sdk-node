interface ModifyDBInstanceNetworkTypeRequest {
    /**
    * 实例所属的地域ID，您可以通过调用[DescribeDBInstanceAttribute](~~62010~~)进行查询。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * 实例要切换的目标网络类型，取值：
    * - **VPC**：将网络类型切换为专有网络。
    * - **Classic**：将网络类型切换为经典网络。
    * @example `VPC`
    */ "NetworkType": string;
    "OwnerId"?: number;
    /**
    * 实例ID。
    * @example `dds-bpxxxxxxxx`
    */ "DBInstanceId": string;
    /**
    * 专有网络ID。
    * > 当**NetworkType**参数取值为**VPC**时，本参数必须传入。
    * @example `vpc-bpxxxxxxxx`
    */ "VpcId"?: string;
    /**
    * 专有网络中的交换机ID。
    * > 当**NetworkType**参数取值为**VPC**时，本参数必须传入。
    * @example `vsw-bpxxxxxxxx`
    */ "VSwitchId"?: string;
    /**
    * 切换网络类型为VPC时，设置是否保留原经典网络地址，取值：
    * - **True**：保留原经典网络地址。
    * - **False**：不保留原经典网络地址。
    * > - 当**NetworkType**参数取值为**VPC**时，才可以传入本参数。
    * - 当本参数取值为**True**时，还需要传入**ClassicExpiredDays**参数。
    * @example `True`
    */ "RetainClassic"?: string;
    /**
    * 切换网络类型为VPC时，设置保留原经典网络地址的时长。 取值：**14**、**30**、**60**、**120**，单位为天。
    * > - 当**NetworkType**参数取值为**VPC**时，才可以传入本参数。
    * - 当**RetainClassic**参数取值为**True**时，本参数必须传入。
    * @example `30`
    */ "ClassicExpiredDays"?: number;
}
export { ModifyDBInstanceNetworkTypeRequest };