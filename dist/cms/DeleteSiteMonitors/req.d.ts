interface DeleteSiteMonitorsRequest {
    "RegionId"?: string;
    /**
    * 要删除的任务ID，多个任务ID之间用英文逗号分隔。
    * @example `01adacc2-ece5-41b6-afa2-3143ab5da7a0,43bd1ead-514f-4524-813e-228ce091****`
    */ "TaskIds": string;
    /**
    * 删除任务的同时是否删除报警规则，默认值为True。
    * @example `true`
    */ "IsDeleteAlarms"?: boolean;
}
export { DeleteSiteMonitorsRequest };