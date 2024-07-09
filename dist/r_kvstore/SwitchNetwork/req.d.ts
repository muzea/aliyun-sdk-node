export interface SwitchNetworkRequest {
    /**
     * 需要切换到的网络类型，取值固定为**VPC**，即专有网络。
     * @example `VPC`
     */
    "TargetNetworkType"?: string;
    /**
     * 要切换到的目标专有网络ID，可调用专有网络VPC的[DescribeVpcs](~~35739~~)获取。
     * > * 目标专有网络所属的地域需和Redis实例相同。
     * > * 传入本参数后，您还需要传入**VSwitchId**参数。
     * @example `vpc-bp1nme44gek34slfc****`
     */
    "VpcId"?: string;
    /**
     * 要切换到的目标专有网络下的虚拟交换机ID，可调用专有网络VPC的[DescribeVpcs](~~35739~~)获取。
     * > 目标虚拟交换机所属的可用区需和Redis实例相同。
     * @example `vsw-bp1e7clcw529l773d****`
     */
    "VSwitchId"?: string;
    /**
     * 实例ID，可调用[DescribeInstances](~~60933~~)获取。
     * @example `r-bp1zxszhcgatnx****`
     */
    "InstanceId": string;
    /**
     * 如果实例当前为经典网络，将其切换至专有网络时，是否保留原经典网络连接地址，取值：
     * * **True**：保留。
     * * **False**：默认值，不保留。
     * > 当实例的网络类型为经典网络时，本参数才可用。
     * @example `True`
     */
    "RetainClassic"?: string;
    /**
     * 经典网络连接地址的保留时间，取值：**14**、**30**、**60**、**120**，单位为天。
     * > * 当**RetainClassic**取值为**True**，本参数才可用且必须传入。
     * > * 完成切换后，您还可以调用[ModifyInstanceNetExpireTime](~~61010~~)修改经典网络连接地址的保留时间。
     * @example `30`
     */
    "ClassicExpiredDays"?: string;
}
