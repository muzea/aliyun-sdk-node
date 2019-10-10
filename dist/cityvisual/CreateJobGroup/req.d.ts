interface CreateJobGroupRequest {
    /**
    * 地域ID。
    * @example `cn-shanghai`
    */ "RegionId"?: string;
    /**
    * 资源参数集ID。
    * @example `6`
    */ "ResourceProfileId": string;
    /**
    * 算法库ID，
    * @example `3`
    */ "AlgoLibId": string;
    /**
    * 期望Job数量。
    * @example `10`
    */ "PlanedJobCount": number;
    /**
    * Job下视频流数量。
    * @example `5`
    */ "StreamPerJob": number;
    /**
    * 实例ID。
    * @example `cityvisual-Instance`
    */ "InstanceId": string;
    "JobGroupParams": string[];
    /**
    * Job数量。
    * @example `3`
    */ "JobCount"?: number;
    /**
    * 工作组名称。
    * @example `JobGroupName`
    */ "JobGroupName": string;
}
export { CreateJobGroupRequest };