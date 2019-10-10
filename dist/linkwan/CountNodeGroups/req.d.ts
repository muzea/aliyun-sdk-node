interface CountNodeGroupsRequest {
    "RegionId"?: string;
    /**
    * 模糊匹配节点分组名称。
    * @example `group1`
    */ "FuzzyName"?: string;
    /**
    * 模糊匹配节点分组中节点所使用的 JoinEUI。
    * @example `d896e0`
    */ "FuzzyJoinEui"?: string;
    /**
    * 模糊匹配节点分组中节点的 DevEUI。
    * @example `d896e0`
    */ "FuzzyDevEui"?: string;
}
export { CountNodeGroupsRequest };