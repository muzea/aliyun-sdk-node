interface ListComputeJobLogsRequest {
    /**
    * 地域ID。
    * @example `cn-shanghai`
    */ "RegionId"?: string;
    /**
    * 计算工作组下指定计算Job的ID。
    * @example `173`
    */ "ComputeJobId": string;
    /**
    * 计算工作组ID。
    * @example `63`
    */ "JobGroupId": string;
}
export { ListComputeJobLogsRequest };