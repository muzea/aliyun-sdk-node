interface SmartCallOperateRequest {
    "RegionId"?: string;
    /**
    * 通话的唯一回执ID，由接口**SmartCall**返回。
    * @example `116012854210^102814279210`
    */ "CallId": string;
    /**
    * 在智能外呼通话中，指定被叫号码发起的动作。
    * > 当前仅支持参数**parallelBridge**，表示指定动作为被叫号码与呼叫中心坐席桥接。
    * @example `parallelBridge`
    */ "Command": string;
    /**
    * RAM用户的虚拟账号ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 扩展字段。
    * @example `Param`
    */ "Param"?: string;
}
export { SmartCallOperateRequest };