interface SwitchNetworkRequest {
    "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * 需要切换网络类型的实例的ID。
    * @example `r-j6cxxxxxxxxxxxxxx`
    */ "InstanceId": string;
    /**
    * 需要切换到的网络类型，当前仅支持经典网络切换到VPC，因此该参数仅有默认值VPC。
    * @example `VPC`
    */ "TargetNetworkType"?: string;
    /**
    * 实例切换到VPC网络后所属的VPC ID。
    * @example `vpc-bp1xxxxxxxxxxxxxxxxxx`
    */ "VpcId"?: string;
    /**
    * 实例切换网络类型后VPC内的交换机ID，如果传入了VpcId则此参数为必选。
    * @example `vsw-sdrxxxxxxxxxxxxxxxxxx`
    */ "VSwitchId"?: string;
    /**
    * 是否保留经典网络 IP：
    * * True（保留）
    * * False（不保留）
    * > 默认值为False。
    * @example `True`
    */ "RetainClassic"?: string;
    /**
    * 保留经典网络IP的时间，单位：天。 可选值：14、30、60、120。若选择保留经典网络地址，则该参数必选。
    * > 切换到VPC网络后，如需修改经典网络IP的保留时间请参见[ModifyInstanceNetExpireTime](~~61010~~)。
    * @example `30`
    */ "ClassicExpiredDays"?: string;
}
export { SwitchNetworkRequest };