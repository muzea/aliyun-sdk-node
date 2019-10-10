interface GetPolicyVersionRequest {
    "RegionId"?: string;
    /**
    * 指定权限策略的类型, 取值`System`或`Custom`。
    * @example `Custom`
    */ "PolicyType"?: string;
    /**
    * 权限策略名称。
    * @example `OSS-Administrator`
    */ "PolicyName"?: string;
    /**
    * 指定目标版本的ID。
    * @example `v3`
    */ "VersionId"?: string;
}
export { GetPolicyVersionRequest };