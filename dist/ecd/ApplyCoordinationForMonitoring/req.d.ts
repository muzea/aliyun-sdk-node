export interface ApplyCoordinationForMonitoringRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](https://next.api.aliyun.com/document/ecd/2020-09-30/DescribeRegions)获取无影云桌面支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 设备的UUID（通用唯一识别码）。
     * @example `62f2f1f252f04e0e9d8bc****`
     */
    "Uuid": string;
    /**
     * 发起者类型。
     * @example `ADMIN_INITIATE`
     */
    "InitiatorType"?: string;
    /**
     * 协同策略，暂时只支持桌面及桌面完全控制
     * @example `FULL_CONTROL`
     */
    "CoordinatePolicyType": string;
    /**
     * 待协同桌面列表。
     */
    "ResourceCandidates": {
        /**
         * 资源类型。
         * @example `CLOUD_DESKTOP`
         */
        ResourceType: string;
        /**
         * 资源所在地域。
         * @example `cn-hangzhou`
         */
        ResourceRegionId: string;
        /**
         * 桌面属性。
         * @example `TestProperty`
         */
        ResourceProperties: string;
        /**
         * 当前使用者的终端用户ID。
         * @example `alice`
         */
        OwnerEndUserId: string;
        /**
         * 桌面ID。
         * @example `ecd-08zhejm3h7ilr****`
         */
        ResourceId: string;
        /**
         * 桌面名称。
         * @example `TestDesktop`
         */
        ResourceName: string;
        /**
         * 当前桌面拥有者的阿里云账号ID。
         * @example `130247021517****`
         */
        OwnerAliUid: number;
    }[];
    /**
     * 发起流协同的终端用户ID。若管理员发起，则不需要填写。
     * @example `alice`
     */
    "EndUserId"?: string;
}
