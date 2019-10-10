interface DetachPolicyFromGroupRequest {
    "RegionId"?: string;
    /**
    * 指定权限策略的类型, 取值为：`System`或`Custom`。
    * @example `Custom`
    */ "PolicyType"?: string;
    /**
    * 指定权限策略名称。
    * @example `OSS-Administrator`
    */ "PolicyName"?: string;
    /**
    * 指定用户组名称。
    * @example `dev`
    */ "GroupName"?: string;
}
export { DetachPolicyFromGroupRequest };