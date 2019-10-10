interface AttachDBInstancesRequest {
    "RegionId"?: string;
    /**
    * 伸缩组的ID。
    * @example `AG6CQdPU8OKdwLjgZcJ****`
    */ "ScalingGroupId": string;
    "DBInstance": string[];
    /**
    * @example `123456123456`
    */ "OwnerId"?: number;
    /**
    * 是否把当前伸缩组内实例的私网IP全部添加到RDS实例IP白名单中：
    * -  true：添加
    * - false：不添加
    * 默认值：false。
    * @example `false`
    */ "ForceAttach"?: boolean;
}
export { AttachDBInstancesRequest };