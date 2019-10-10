interface DisableSiteMonitorsRequest {
    "RegionId"?: string;
    /**
    * 要禁用的任务ID，多个任务ID之间用逗号分隔。
    * @example `49f7b317-7645-4cc9-94fd-ea42e522****,49f7b317-7645-4cc9-94fd-ea42e522****`
    */ "TaskIds": string;
}
export { DisableSiteMonitorsRequest };