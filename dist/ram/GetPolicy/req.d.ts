interface GetPolicyRequest {
    "RegionId"?: string;
    /**
    * 指定Policy的类型, 取值`System`或`Custom`。
    * @example `Custom`
    */ "PolicyType"?: string;
    /**
    * 指定权限策略名称。
    * @example `OSS-Administrator`
    */ "PolicyName"?: string;
}
export { GetPolicyRequest };