interface EnableSiteMonitorsRequest {
    "RegionId"?: string;
    /**
    * 要启用的任务ID，多个任务用逗号分隔。
    * @example `49f7b317-7645-4cc9-94fd-ea42e522****,49f7b317-7645-4cc9-94fd-ea42e522****`
    */ "TaskIds": string;
}
export { EnableSiteMonitorsRequest };