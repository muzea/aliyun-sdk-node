export interface CreateVersionPrepublishRequest {
    /**
     * 是否为总量预发布。取值：**Y | N**。
     * > 总量预发布表示该预发布允许的设备数不会按照机型数平均分配，而是所有机型共享同一个允许设备数。
     * @example `N`
     */
    "IsTotalPrepublish": string;
    /**
     * 版本ID
     * @example `1`
     */
    "VersionId": string;
    /**
     * 版本类型，取值：
     * - **FOTA**：系统版本
     * - **APP**：应用版本
     * @example `FOTA`
     */
    "VersionType": string;
    /**
     * 预发布名
     * @example `第一次预发布`
     */
    "Name": string;
    /**
     * 所属项目ID
     * @example `P0VFCREU`
     */
    "ProjectId": string;
    /**
     * 预发布允许设备数
     * @example `1000`
     */
    "BarrierCount": string;
}
