export interface UpgradeTwoWayRequest {
    /**
     * 实例ID，可通过调用[DescribeDtsJobs](~~209702~~)获取。
     * @example `dtsh77p49x4k28****`
     */
    "InstanceId": string;
    /**
     * 双向同步的实例规格，取值为**large**、**medium**、**micro** 、**small**。
     * > 链路规格说明，请参见[数据同步链路规格说明](~~26605~~)。
     * @example `large`
     */
    "InstanceClass": string;
    /**
     * DTS实例所属的地域，详情请参见[支持的地域列表](~~141033~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
