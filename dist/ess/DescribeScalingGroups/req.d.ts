interface DescribeScalingGroupsRequest {
    /**
    * 伸缩组所属地域的ID。
    * @example `cn-qingdao`
    */ "RegionId": string;
    /**
    * @example `123456123456`
    */ "OwnerId"?: number;
    /**
    * 伸缩组列表的页码。起始值：1。
    * 默认值：1 。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 分页查询时设置的每页行数。最大值：50。
    * 默认值：10。
    * @example `10`
    */ "PageSize"?: number;
    /**
    * ScalingGroupId.N为待查询伸缩组的ID，N的取值范围：1～20。查询结果会忽略失效的伸缩组ID，并且不报错。
    * @example `dyrSuvBOtO1dEdIlIbp****`
    */ "ScalingGroupId.1"?: string;
    /**
    * @example `dyrSuvBOtO1dEdIlIbp****`
    */ "ScalingGroupId.2"?: string;
    /**
    * @example `dyrSuvBOtO1dEdIlIbp****`
    */ "ScalingGroupId.3"?: string;
    /**
    * @example `dyrSuvBOtO1dEdIlIbp****`
    */ "ScalingGroupId.4"?: string;
    /**
    * @example `dyrSuvBOtO1dEdIlIbp****`
    */ "ScalingGroupId.5"?: string;
    /**
    * @example `dyrSuvBOtO1dEdIlIbp****`
    */ "ScalingGroupId.6"?: string;
    /**
    * @example `dyrSuvBOtO1dEdIlIbp****`
    */ "ScalingGroupId.7"?: string;
    /**
    * @example `dyrSuvBOtO1dEdIlIbp****`
    */ "ScalingGroupId.8"?: string;
    /**
    * @example `dyrSuvBOtO1dEdIlIbp****`
    */ "ScalingGroupId.9"?: string;
    /**
    * @example `dyrSuvBOtO1dEdIlIbp****`
    */ "ScalingGroupId.10"?: string;
    /**
    * @example `dyrSuvBOtO1dEdIlIbp****`
    */ "ScalingGroupId.12"?: string;
    /**
    * @example `dyrSuvBOtO1dEdIlIbp****`
    */ "ScalingGroupId.13"?: string;
    /**
    * @example `dyrSuvBOtO1dEdIlIbp****`
    */ "ScalingGroupId.14"?: string;
    /**
    * @example `dyrSuvBOtO1dEdIlIbp****`
    */ "ScalingGroupId.15"?: string;
    /**
    * @example `dyrSuvBOtO1dEdIlIbp****`
    */ "ScalingGroupId.16"?: string;
    /**
    * @example `dyrSuvBOtO1dEdIlIbp****`
    */ "ScalingGroupId.17"?: string;
    /**
    * @example `dyrSuvBOtO1dEdIlIbp****`
    */ "ScalingGroupId.18"?: string;
    /**
    * @example `dyrSuvBOtO1dEdIlIbp****`
    */ "ScalingGroupId.19"?: string;
    /**
    * @example `dyrSuvBOtO1dEdIlIbp****`
    */ "ScalingGroupId.20"?: string;
    /**
    * @example `dyrSuvBOtO1dEdIlIbp****`
    */ "ScalingGroupName"?: string;
    /**
    * ScalingGroupName.N为待查询伸缩组的名称，N的取值范围：1～20。查询结果会忽略失效的伸缩组名称，并且不报错。
    * @example `dyrSuvBOtO1dEdIlIbp****`
    */ "ScalingGroupName.1"?: string;
    /**
    * @example `dyrSuvBOtO1dEdIlIbp****`
    */ "ScalingGroupName.2"?: string;
    /**
    * @example `dyrSuvBOtO1dEdIlIbp****`
    */ "ScalingGroupName.3"?: string;
    /**
    * @example `dyrSuvBOtO1dEdIlIbp****`
    */ "ScalingGroupName.4"?: string;
    /**
    * @example `dyrSuvBOtO1dEdIlIbp****`
    */ "ScalingGroupName.5"?: string;
    /**
    * @example `dyrSuvBOtO1dEdIlIbp****`
    */ "ScalingGroupName.6"?: string;
    /**
    * @example `dyrSuvBOtO1dEdIlIbp****`
    */ "ScalingGroupName.7"?: string;
    /**
    * @example `dyrSuvBOtO1dEdIlIbp****`
    */ "ScalingGroupName.8"?: string;
    /**
    * @example `dyrSuvBOtO1dEdIlIbp****`
    */ "ScalingGroupName.9"?: string;
    /**
    * @example `dyrSuvBOtO1dEdIlIbp****`
    */ "ScalingGroupName.10"?: string;
    /**
    * @example `dyrSuvBOtO1dEdIlIbp****`
    */ "ScalingGroupName.11"?: string;
    /**
    * @example `dyrSuvBOtO1dEdIlIbp****`
    */ "ScalingGroupName.12"?: string;
    /**
    * @example `dyrSuvBOtO1dEdIlIbp****`
    */ "ScalingGroupName.13"?: string;
    /**
    * @example `dyrSuvBOtO1dEdIlIbp****`
    */ "ScalingGroupName.14"?: string;
    /**
    * @example `dyrSuvBOtO1dEdIlIbp****`
    */ "ScalingGroupName.15"?: string;
    /**
    * @example `dyrSuvBOtO1dEdIlIbp****`
    */ "ScalingGroupName.16"?: string;
    /**
    * @example `dyrSuvBOtO1dEdIlIbp****`
    */ "ScalingGroupName.17"?: string;
    /**
    * @example `dyrSuvBOtO1dEdIlIbp****`
    */ "ScalingGroupName.18"?: string;
    /**
    * @example `dyrSuvBOtO1dEdIlIbp****`
    */ "ScalingGroupName.19"?: string;
    /**
    * @example `dyrSuvBOtO1dEdIlIbp****`
    */ "ScalingGroupName.20"?: string;
}
export { DescribeScalingGroupsRequest };