interface GetVersionRequest {
    "RegionId"?: string;
    /**
    * 需要查询的工作流编排实例的 ID
    * @example `lc-abcdefg`
    */ "FlowId": string;
    /**
    * 需要查询的版本
    * @example `10`
    */ "VersionId": number;
}
export { GetVersionRequest };