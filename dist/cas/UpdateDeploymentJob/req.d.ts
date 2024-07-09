export interface UpdateDeploymentJobRequest {
    /**
     * 部署任务ID。此处ID为[CreateDeploymentJob](~~2712234~~)返回的任务ID。也可通过[ListDeploymentJob](~~2712223~~)接口获取。
     * @example `8888`
     */
    "JobId": number;
    /**
     * 部署任务名称。
     * @example `cert-1`
     */
    "Name"?: string;
    /**
     * 证书ID，多个证书ID用半角逗号（,）分隔。此处ID为[ListUserCertificateOrder](~~455804~~)返回的**CertificateId**。
     * @example `9957285,12067351,12304338,12342649`
     */
    "CertIds"?: string;
    /**
     * 云产品资源ID。多个资源ID用半角逗号（,）分隔。此处ID为[ListCloudResources](~~2712230~~)返回的主键**Id**。
     * @example `9957285,12067351,12304338,12342649`
     */
    "ResourceIds"?: string;
    /**
     * 联系人ID。多个联系人ID用半角逗号（,）分隔。此处ID为[ListContact](~~2712221~~)返回的主键**Id**。
     * @example `9957285,12067351,12304338,12342649`
     */
    "ContactIds"?: string;
    /**
     * 设置任务开始调度的时间（Unix时间戳）。如果不设置，默认创建任务后立即执行部署。
     * @example `1606482979000`
     */
    "ScheduleTime"?: number;
}
