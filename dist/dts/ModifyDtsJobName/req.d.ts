export interface ModifyDtsJobNameRequest {
    /**
     * 迁移、同步或订阅任务ID。
     * @example `l3m1213ye7l****`
     */
    "DtsJobId": string;
    /**
     * 修改后的任务名称。
     * > 建议配置具有业务意义的名称（无唯一性要求），便于后续识别。
     * @example `RDS间迁移`
     */
    "DtsJobName": string;
    /**
     * 任务所属地域ID，请参见[支持的地域列表](~~141033~~)。
     * @example `cn-beijing`
     */
    "RegionId"?: string;
    "ZeroEtlJob"?: boolean;
    "ResourceGroupId"?: string;
}
