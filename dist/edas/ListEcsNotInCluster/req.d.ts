export interface ListEcsNotInClusterRequest {
    /**
     * 网络类型。
     * - 1：经典网络
     * - 2：VPC网络
     * @example `2`
     */
    "NetworkMode": number;
    /**
     * VPC ID，当NetworkMode为2时，该参数为必选。
     * @example `vpc-2zef6ob8****v8x3q46kp`
     */
    "VpcId"?: string;
}
