interface ModifyInstanceRequest {
    /**
    * 地域ID
    * @example `cn-shanghai`
    */ "RegionId"?: string;
    /**
    * 实例名称
    * @example `实例名称`
    */ "InstanceName"?: string;
    /**
    * 实例描述
    * @example `实例描述`
    */ "Description"?: string;
    /**
    * 实例状态，取值范围：
    * * Running    运行中
    * * Stopped 已停止
    * @example `Running`
    */ "Status"?: string;
    /**
    * 实例ID
    * @example `cityvisual-Instance`
    */ "InstanceId": string;
}
export { ModifyInstanceRequest };