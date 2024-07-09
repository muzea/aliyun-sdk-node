export interface GenerateAssetOperationTokenRequest {
    /**
     * 指定要申请运维令牌操作所在堡垒机的实例ID。
     * > 您可以调用[DescribeInstances](~~153281~~)接口获取该参数。
     * @example `bastionhost-cn-st220aw****`
     */
    "InstanceId": string;
    /**
     * 堡垒机的地域ID。
     * > 地域ID和地域名称的对应关系，请参见[地域和可用区](~~40654~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 指定要申请令牌的资产类型。取值：
     * - **Host**：主机。
     * - **Database**：数据库。
     * @example `Host`
     */
    "AssetType": string;
    /**
     * 需要申请运维令牌的资产ID。
     * @example `11`
     */
    "AssetId": string;
    /**
     * 申请运维令牌的资产账户ID。
     * > AssetAccountId和AssetAccountName需要至少指定一个，当同时指定时，优先使用AssetAccountId
     * @example `2`
     */
    "AssetAccountId"?: string;
    /**
     * 主机账号名，当为自定义账号时，填写真实账户名。
     * > 当AssetAccountId和AssetAccountName同时指定时，优先使用AssetAccountId
     * @example `root`
     */
    "AssetAccountName"?: string;
    /**
     * base64后的密码。当为自定义账号申请运维令牌时必填,
     * @example `dGVzdHBhc3N3b3Jk`
     */
    "AssetAccountPassword"?: string;
    /**
     * 协议名称。取值：
     * - SSH
     * - RDP
     * - Oracle
     * - PostgreSQL
     * - MySQL
     * - SQLServer
     * @example `SSH`
     */
    "AssetAccountProtocolName"?: string;
}
