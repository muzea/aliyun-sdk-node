interface ModifyCenRouteMapRequest {
    "RegionId"?: string;
    /**
    * 云企业网ID。
    * @example `cen-7qthudw0ll6jmc****`
    */ "CenId": string;
    /**
    * 云企业网所在的地域。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-hangzhou`
    */ "CenRegionId": string;
    /**
    * 路由策略的ID。
    * @example `cenrmap-abcdedfghij****`
    */ "RouteMapId": string;
    /**
    * 所有匹配条件通过后的策略行为，取值：
    * - **Permit**：允许通过被匹配的路由。
    * - **Deny**：拒绝通过被匹配的路由。
    * @example `Permit`
    */ "MapResult": string;
    /**
    * 路由策略的优先级，取值：**1**~**100**。优先级数字越小，优先级越高。
    * > 同地域同策略应用方向的路由策略优先级唯一。执行路由策略时，系统从优先级数字最小的路由策略开始匹配条件语句，因此在指定路由策略优先级时，要注意符合期望的匹配顺序。
    * @example `10`
    */ "Priority": number;
    /**
    * @example `111`
    */ "OwnerId"?: number;
    /**
    * 路由策略的描述。
    * @example `test`
    */ "Description"?: string;
    /**
    * 关联的下一条路由策略的优先级，取值：**1**~**100**。
    * - 当未配置关联优先级时，路由策略无关联的下一条路由策略。
    * - 当关联优先级取值为1时，路由策略关联当前路由策略的下一条路由策略。
    * - 当关联优先级取值非1时，路由策略关联优先级必须大于当前路由策略的优先级。
    * 仅**MapResult**取值为**Permit**时，匹配通过的路由才会继续匹配关联的下一条路由策略。
    * @example `20`
    */ "NextPriority"?: number;
    "SourceInstanceIds"?: string[];
    "DestinationInstanceIds"?: string[];
    "SourceRouteTableIds"?: string[];
    "DestinationRouteTableIds"?: string[];
    "SourceRegionIds"?: string[];
    "SourceChildInstanceTypes"?: string[];
    "DestinationChildInstanceTypes"?: string[];
    "DestinationCidrBlocks"?: string[];
    /**
    * 匹配前缀模式，为match语句，取值：
    * - **Include**：模糊匹配。匹配条件中的路由前缀包含被匹配路由的路由前缀即判定为匹配成功。
    *  例如：定义1.1.0.0/16的策略可以模糊匹配到1.1.1.0/24的路由。
    * - **Complete**：精确匹配。匹配条件中的路由前缀必须与被匹配路由的路由前缀一致，才判定为匹配成功。
    *  例如：定义1.1.0.0/16的策略仅可以精确匹配到1.1.0.0/16的路由。
    * @example `Include `
    */ "CidrMatchMode"?: string;
    "RouteTypes"?: string[];
    "MatchAsns"?: number[];
    /**
    * 匹配as-path模式，为match语句，取值：
    * - **Include**：模糊匹配，匹配条件中的AS Path与被匹配路由的AS Path有重叠即判定为匹配成功。
    * - **Complete**：精确匹配，匹配条件中的AS Path必须与被匹配路由的AS Path一致，才判定为匹配成功。
    * @example `Include`
    */ "AsPathMatchMode"?: string;
    "MatchCommunitySet"?: string[];
    /**
    * 匹配community模式，为match语句，取值：
    * - **Include**：模糊匹配，匹配条件中的Community与被匹配路由的Community有重叠即判定为匹配成功。
    * - **Complete**：精确匹配，匹配条件中的Community必须与被匹配路由的Community一致，才判定为匹配成功。
    * @example `Include`
    */ "CommunityMatchMode"?: string;
    "OperateCommunitySet"?: string[];
    /**
    * 操作community的模式，为action语句，取值：
    * - **Additive**：添加。
    * - **Replace**：替换。
    * @example `Additive`
    */ "CommunityOperateMode"?: string;
    /**
    * 修改路由的优先级，为action语句，取值：**1**~**100**，路由默认优先级为**50**，取值越小优先级越高。
    * @example `22`
    */ "Preference"?: number;
    /**
    * 路由传递源实例ID列表排除匹配模式，取值：
    * - **false**（默认）：路由传递源实例ID在`SourceInstanceIds`中时，匹配通过。
    * - **true**：路由传递源实例ID不在`SourceInstanceIds`中时，匹配通过。
    * @example `false`
    */ "SourceInstanceIdsReverseMatch"?: boolean;
    /**
    * 路由传递目的实例ID列表排除匹配模式，取值：
    * - **false**（默认）：路由传递目的实例ID在`DestinationInstanceIds`中时，匹配通过。
    * - **true**：路由传递目的实例ID不在`DestinationInstanceIds`中时，匹配通过。
    * @example `false`
    */ "DestinationInstanceIdsReverseMatch"?: boolean;
}
export { ModifyCenRouteMapRequest };