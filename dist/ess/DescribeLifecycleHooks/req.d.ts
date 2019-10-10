interface DescribeLifecycleHooksRequest {
    "RegionId"?: string;
    /**
    * @example `123456123456`
    */ "OwnerId"?: number;
    /**
    * 伸缩组的ID。
    * @example `asg-****`
    */ "ScalingGroupId"?: string;
    /**
    * 生命周期挂钩的名称。
    * @example `Test`
    */ "LifecycleHookName"?: string;
    "LifecycleHookId"?: string[];
    /**
    * 实例状态列表的页码。起始值：1。
    * 默认值：1。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 分页查询时设置的每页行数。最大值：50。
    * 默认值：50。
    * @example `50`
    */ "PageSize"?: number;
}
export { DescribeLifecycleHooksRequest };