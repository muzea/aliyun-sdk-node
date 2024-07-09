export interface DeleteStateConfigurationsRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 终态配置ID列表。
     * @example `["sc-asfgdhj12345"]`
     */
    "StateConfigurationIds": string;
    /**
     * 幂等token。
     * @example `abcde3OARpx77No54nv6`
     */
    "ClientToken"?: string;
}
