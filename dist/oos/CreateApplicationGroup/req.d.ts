export interface CreateApplicationGroupRequest {
    /**
     * 地域ID，目前仅支持cn-hangzhou。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 应用分组的描述信息。
     * @example `ApplicationGroup`
     */
    "Description"?: string;
    /**
     * 部署地域ID（即资源所在地域ID）。
     * @example `cn-hangzhou`
     */
    "DeployRegionId": string;
    /**
     * 标签键，必须和标签值（ImportTagValue）同时传入或都不传入，不能只传入一个。ImportTagKey和ImportTagValue 都不填则默认为app-{ApplicationName}（应用名称）。
     * @example `k1`
     */
    "ImportTagKey"?: string;
    /**
     * 标签值，必须和标签键（ImportTagKey）同时传入或都不传入，不能只传入一个。ImportTagKey和ImportTagValue 都不填则默认为{Name}（应用分组名称）。
     * @example `v1`
     */
    "ImportTagValue"?: string;
    /**
     * 应用分组名称。
     * @example `MyApplicationGroup`
     */
    "Name": string;
    /**
     * 幂等Token。
     * @example `-`
     */
    "ClientToken"?: string;
    /**
     * 应用名称。
     * @example `MyApplication`
     */
    "ApplicationName": string;
    /**
     * 云监控分组ID。
     * @example `218026174`
     */
    "CmsGroupId"?: string;
}
