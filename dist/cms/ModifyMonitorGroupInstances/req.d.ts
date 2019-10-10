interface ModifyMonitorGroupInstancesRequest {
    "RegionId"?: string;
    "Instances": string[];
    /**
    * 应用分组ID。
    * @example `12345`
    */ "GroupId": number;
}
export { ModifyMonitorGroupInstancesRequest };