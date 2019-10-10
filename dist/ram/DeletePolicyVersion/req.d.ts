interface DeletePolicyVersionRequest {
    "RegionId"?: string;
    /**
    * 权限策略名称。
    * @example `OSS-Administrator`
    */ "PolicyName"?: string;
    /**
    * 指定目标版本的ID。
    * @example `v3`
    */ "VersionId"?: string;
}
export { DeletePolicyVersionRequest };