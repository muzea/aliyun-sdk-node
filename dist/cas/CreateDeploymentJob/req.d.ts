export interface CreateDeploymentJobRequest {
    /**
     * 部署任务名称。
     * @example `jobName`
     */
    "Name": string;
    /**
     * 任务类型。
     * @example `user`
     */
    "JobType": string;
    /**
     * 证书ID，多个证书ID用半角逗号（,）分隔。此处ID为[ListUserCertificateOrder](~~455804~~)返回的**CertificateId**。
     * @example `12342649,12304338,12067351,9957285`
     */
    "CertIds": string;
    /**
     * 云产品资源ID。多个资源ID用半角逗号（,）分隔。此处ID为[ListCloudResources](~~2712230~~)返回的主键**Id**。
     * @example `6591316,6585549,6190248,5811894,5775176,5772504`
     */
    "ResourceIds": string;
    /**
     * 联系人ID。多个联系人ID用半角逗号（,）分隔。此处ID为[ListContact](~~2712221~~)返回的主键**Id**。
     * @example `1,2`
     */
    "ContactIds": string;
    /**
     * 设置任务开始调度的时间（Unix时间戳）。如果不设置，默认创建任务后立即执行部署。
     * @example `1706613560008`
     */
    "ScheduleTime"?: number;
}
