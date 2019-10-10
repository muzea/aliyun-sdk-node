interface SetDefaultPolicyVersionRequest {
    "RegionId"?: string;
    /**
    * 指定权限策略名称。
    * @example `OSS-Administrator`
    */ "PolicyName"?: string;
    /**
    * 新默认版本的ID。
    * @example `v2`
    */ "VersionId"?: string;
}
export { SetDefaultPolicyVersionRequest };