export interface RenewAssetOperationTokenRequest {
    /**
     * 堡垒机的实例ID。
     * > 可通过调用[DescribeInstances](~~153281~~)接口获取堡垒机实例ID。
     * @example `bastionhost-cn-st220aw****`
     */
    "InstanceId": string;
    /**
     * 堡垒机的区域ID。
     * > 区域ID和区域名称的对应关系，请参见[地域和可用区](~~40654~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 要续期的运维令牌ID。
     * > 您可以调用[GenerateAssetOperationToken](~~2758861~~)接口获取该参数。
     * @example `NmYyMmEzNmMwYzljNGYxMjh******`
     */
    "TokenId"?: string;
}
