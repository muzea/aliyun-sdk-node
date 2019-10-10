interface ModifyControlPolicyPositionRequest {
    "RegionId"?: string;
    /**
    * 访问控制策略的流量方向。
    * - **in**：外对内流量访问控制
    * - **out**：内对外流量访问控制
    * @example `in`
    */ "Direction": string;
    /**
    * 新优先级。修改访问控制策略优先级为新设置的优先级。
    * @example `1`
    */ "NewOrder": string;
    /**
    * 老优先级。待修改访问控制策略的优先级。
    * @example `5`
    */ "OldOrder": string;
    /**
    * 访问者源IP地址。
    * @example `1.2.3.4`
    */ "SourceIp"?: string;
    /**
    * 指定请求和接收消息的语言类型。
    * - **zh**：中文
    * - **en**：英文
    * @example `zh`
    */ "Lang"?: string;
}
export { ModifyControlPolicyPositionRequest };