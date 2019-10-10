interface ModifyJobGroupRequest {
    /**
    * 地域ID。
    * @example `cn-shanghai`
    */ "RegionId"?: string;
    /**
    * JobGroup名称。
    * 长度为`[2,128]`个英文或中文字符。必须以大小字母或中文开头，不能以 http:// 和https:// 开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。
    * @example `JobGroupName`
    */ "JobGroupName"?: string;
    /**
    * 资源参数集ID。
    * @example `23`
    */ "ResourceProfileId"?: string;
    /**
    * 算法库ID。
    * @example `2`
    */ "AlgoLibId"?: string;
    /**
    * 期望的计算Job数量。
    * @example `10`
    */ "PlanedJobCount"?: number;
    /**
    * 计算Job处理的视频流数量。
    * @example `5`
    */ "StreamPerJob"?: number;
    /**
    * 实际计算Job数量。
    * @example `3`
    */ "JobCount"?: number;
    "JobGroupParams"?: string[];
    /**
    * JobGroup状态。取值范围：
    * *	Running: 运行中
    * *	Stopped: 已停止
    * @example `Running`
    */ "Status"?: string;
    /**
    * 待修改的JobGroup的ID。
    * @example `3`
    */ "JobGroupId": string;
    "InstanceId"?: string;
}
export { ModifyJobGroupRequest };