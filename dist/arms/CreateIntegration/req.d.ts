export interface CreateIntegrationRequest {
    /**
     * 集成名称。
     * @example `云监控集成`
     */
    "IntegrationName": string;
    /**
     * 集成产品类型：
     * - CLOUD_MONITOR：云监控
     * - LOG_SERVICE：日志服务
     * @example `CLOUD_MONITOR`
     */
    "IntegrationProductType": string;
    /**
     * 集成描述信息。
     * @example `测试`
     */
    "Description"?: string;
    /**
     * 告警事件是否自动恢复：
     * - true（默认）
     * - false
     * @example `true`
     */
    "AutoRecover"?: boolean;
    /**
     * 告警事件自动恢复时间，默认时间为300秒。
     * @example `300`
     */
    "RecoverTime"?: number;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
