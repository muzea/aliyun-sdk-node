interface DescribeScalingActivitiesRequest {
    /**
    * 伸缩活动所属伸缩组的地域ID。
    * @example `cn-qingdao`
    */ "RegionId": string;
    /**
    * @example `123456123456`
    */ "OwnerId"?: number;
    /**
    * 伸缩活动列表的页码，起始值：1。
    * 默认值：1 。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 分页查询时设置的每页行数，最大值：50。
    * 默认值：10 。
    * @example `50`
    */ "PageSize"?: number;
    /**
    * 伸缩组的ID。
    * @example `AG6CQdPU8OKdwLjgZcJ****`
    */ "ScalingGroupId"?: string;
    /**
    * 伸缩活动的状态，取值范围：
    *
    * - Successful：执行成功的伸缩活动。
    * - Warning：部分执行成功的伸缩活动。
    * - Failed：执行失败的伸缩活动。
    * - InProgress：正在执行的伸缩活动。
    * - Rejected：执行伸缩活动请求被拒绝。
    *
    * @example `Successful`
    */ "StatusCode"?: string;
    /**
    * ScalingActivityId.N为待查询伸缩活动的ID，N的取值范围：1～20。
    * @example `ebta5WbUzC8gcwUWvfch****`
    */ "ScalingActivityId.1"?: string;
    /**
    * @example `ebta5WbUzC8gcwUWvfch****`
    */ "ScalingActivityId.2"?: string;
    /**
    * @example `ebta5WbUzC8gcwUWvfch****`
    */ "ScalingActivityId.3"?: string;
    /**
    * @example `ebta5WbUzC8gcwUWvfch****`
    */ "ScalingActivityId.4"?: string;
    /**
    * @example `ebta5WbUzC8gcwUWvfch****`
    */ "ScalingActivityId.5"?: string;
    /**
    * @example `ebta5WbUzC8gcwUWvfch****`
    */ "ScalingActivityId.6"?: string;
    /**
    * @example `ebta5WbUzC8gcwUWvfch****`
    */ "ScalingActivityId.7"?: string;
    /**
    * @example `ebta5WbUzC8gcwUWvfch****`
    */ "ScalingActivityId.8"?: string;
    /**
    * @example `ebta5WbUzC8gcwUWvfch****`
    */ "ScalingActivityId.9"?: string;
    /**
    * @example `ebta5WbUzC8gcwUWvfch****`
    */ "ScalingActivityId.10"?: string;
    /**
    * @example `ebta5WbUzC8gcwUWvfch****`
    */ "ScalingActivityId.11"?: string;
    /**
    * @example `ebta5WbUzC8gcwUWvfch****`
    */ "ScalingActivityId.12"?: string;
    /**
    * @example `ebta5WbUzC8gcwUWvfch****`
    */ "ScalingActivityId.13"?: string;
    /**
    * @example `ebta5WbUzC8gcwUWvfch****`
    */ "ScalingActivityId.14"?: string;
    /**
    * @example `ebta5WbUzC8gcwUWvfch****`
    */ "ScalingActivityId.15"?: string;
    /**
    * @example `ebta5WbUzC8gcwUWvfch****`
    */ "ScalingActivityId.16"?: string;
    /**
    * @example `ebta5WbUzC8gcwUWvfch****`
    */ "ScalingActivityId.17"?: string;
    /**
    * @example `ebta5WbUzC8gcwUWvfch****`
    */ "ScalingActivityId.18"?: string;
    /**
    * @example `ebta5WbUzC8gcwUWvfch****`
    */ "ScalingActivityId.19"?: string;
    /**
    * @example `ebta5WbUzC8gcwUWvfch****`
    */ "ScalingActivityId.20"?: string;
}
export { DescribeScalingActivitiesRequest };