export interface CreateCloudDriveServiceRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 企业网盘名称。
     * @example `wuying-cds`
     */
    "Name"?: string;
    /**
     * 办公网络类型。
     * @example `SIMPLE`
     */
    "OfficeSiteType"?: string;
    /**
     * 办公网络ID，当办公网络类型为`AD_CONNECTOR`时有效。
     * @example `cn-hangzhou+dir-400695****`
     */
    "OfficeSiteId"?: string;
    /**
     * 当`OfficeSiteType`为`AD_CONNECTOR`时，表示AD办公网络的云企业网实例ID。当`OfficeSiteId`不为空时，此值可不填写。
     * @example `cen-g4ba1mkji8nj6****`
     */
    "CenId"?: string;
    /**
     * 当`OfficeSiteType`为`AD_CONNECTOR`时，表示AD办公网络对应的域控名称。当`OfficeSiteId`不为空时，此值可不填写。
     * @example `test.local`
     */
    "DomainName"?: string;
    /**
     * 分配用户个人盘时，个人盘的存储峰值。单位：Byte（字节）。
     * @example `104857600`
     */
    "UserMaxSize"?: number;
    /**
     * 网盘存储空间最大峰值。
     * - 创建按量付费网盘时，单位为Byte（字节）。
     * - 创建预付费网盘时，单位为GiB。例如，如需创建500GiB的预付费网盘，则填写500；如需创建2TiB的预付费网盘，则填写2048。
     * @example `536870912000`
     */
    "MaxSize": number;
    /**
     * 用户ID列表。
     */
    "EndUserId"?: string[];
    /**
     * > 该参数不开放使用。
     * @example `null`
     */
    "BizType"?: number;
    /**
     * > 该参数不开放使用。
     * @example `null`
     */
    "SolutionId"?: string;
    /**
     * 网盘付费类型。
     * @example `PostPaid`
     */
    "CdsChargeType"?: string;
    /**
     * 是否自动支付。
     * @example `false`
     */
    "AutoPay"?: boolean;
    /**
     * 是否自动续费。仅当付费类型为`PrePaid`时，该参数才生效且为可选参数。
     * @example `false`
     */
    "AutoRenew"?: boolean;
    /**
     * 购买资源的时长。单位由`PeriodUnit`指定。当参数`CdsChargeType`取值为`PrePaid`时才生效，且为必选值。
     * @example `1`
     */
    "Period"?: number;
    /**
     * 预付费网盘的购买时长单位。当参数`CdsChargeType`取值为`PrePaid`时才生效，且为必选值。
     * @example `Year`
     */
    "PeriodUnit"?: string;
    /**
     * 预付费网盘的用户数量限额。当参数`CdsChargeType`取值为`PrePaid`时才生效，且为必选值。
     * @example `5`
     */
    "UserCount"?: number;
}
