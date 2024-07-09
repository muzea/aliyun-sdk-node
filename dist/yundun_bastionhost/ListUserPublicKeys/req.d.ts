export interface ListUserPublicKeysRequest {
    /**
     * 需要查询公钥的用户所在堡垒机的实例id。
     * >您可以调用[describeinstances](~~153281~~)接口获取该参数。
     * @example `bastionhost-cn-st220aw****
    `
     */
    "InstanceId": string;
    /**
     * 用户的堡垒机的区域id。
     * >区域id和区域名称的对应关系，请参见[地域和可用区](~~40654~~)。
     * @example `cn-shanghai`
     */
    "RegionId"?: string;
    /**
     * 指定分页查询时，当前页的页码。默认值为1。
     * @example `1`
     */
    "PageNumber"?: string;
    /**
     * 指定分页查询时，每页显示的数据最大条数。
     * PageSize参数最大取值为100。每页默认显示的数据条数为20条，PageSize参数值为空时，将默认返回20条数据。
     * > 建议PageSize取值不要为空。
     * @example `50`
     */
    "PageSize"?: string;
    /**
     * 指定要查询公钥的用户ID。
     * @example `2`
     */
    "UserId"?: string;
}
