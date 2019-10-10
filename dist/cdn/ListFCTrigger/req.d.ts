interface ListFCTriggerRequest {
    "RegionId"?: string;
    /**
    * 事件名称。
    * @example `LogFileCreated`
    */ "EventMetaName": string;
    /**
    * 事件版本。
    * @example `1.0.0`
    */ "EventMetaVersion": string;
    "OwnerId"?: number;
}
export { ListFCTriggerRequest };