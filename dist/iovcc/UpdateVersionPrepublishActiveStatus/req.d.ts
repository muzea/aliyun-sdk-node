export interface UpdateVersionPrepublishActiveStatusRequest {
    /**
     * 所属项目ID
     * @example `P0VFCREU`
     */
    "ProjectId": string;
    /**
     * 预发布ID
     * @example `1`
     */
    "PrepublishId": string;
    /**
     * 预发布是否为启用状态
     * @example `Y`
     */
    "IsActive": string;
}
