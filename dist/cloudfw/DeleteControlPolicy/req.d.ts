interface DeleteControlPolicyRequest {
    "RegionId"?: string;
    /**
    * 访问控制策略唯一ID。
    * @example `00281255-d220-4db1-8f4f-c4df221ad84c`
    */ "AclUuid": string;
    /**
    * 访问控制策略的流量方向。
    * - **in**：外对内流量访问控制
    * - **out**：内对外流量访问控制
    * @example `in`
    */ "Direction": string;
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
export { DeleteControlPolicyRequest };