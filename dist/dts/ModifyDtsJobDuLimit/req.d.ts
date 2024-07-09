export interface ModifyDtsJobDuLimitRequest {
    /**
     * DTS迁移、同步或订阅任务ID。
     * @example `dtsxxx`
     */
    "DtsJobId": string;
    /**
     * 任务DU上限。
     * > 最小取值为**1**。
     * @example `1`
     */
    "DuLimit": number;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
