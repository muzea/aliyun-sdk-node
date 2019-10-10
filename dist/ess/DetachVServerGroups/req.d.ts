interface DetachVServerGroupsRequest {
    /**
    * 伸缩组所属地域的ID，如cn-hangzhou、cn-shanghai。更多详情，请参见[地域和可用区](~~40654~~)。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 伸缩组的ID。
    * @example `asg-****`
    */ "ScalingGroupId": string;
    "VServerGroup": string[];
    /**
    * @example `123456123456`
    */ "OwnerId"?: number;
    /**
    * 是否从待移除虚拟服务器组中移除当前伸缩组内的ECS实例。
    * - true：移除
    * - false：不移除
    * 默认值：false。
    * @example `false`
    */ "ForceDetach"?: boolean;
}
export { DetachVServerGroupsRequest };