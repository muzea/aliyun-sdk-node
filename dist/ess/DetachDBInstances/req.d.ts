interface DetachDBInstancesRequest {
    "RegionId"?: string;
    /**
    * 伸缩组的ID。
    * @example `AG6CQdPU8OKdwLjgZcJ****`
    */ "ScalingGroupId": string;
    "DBInstance": string[];
    /**
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 是否移除RDS实例IP白名单中属于伸缩组内实例的私网IP：
    * - true：移除
    * - false：不移除
    * 默认值：false。
    * @example `false`
    */ "ForceDetach"?: boolean;
}
export { DetachDBInstancesRequest };