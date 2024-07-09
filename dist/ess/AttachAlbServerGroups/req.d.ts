export interface AttachAlbServerGroupsRequest {
    /**
     * 伸缩组所属地域的ID。
     * 例如`cn-hangzhou`、`cn-shanghai`，更多信息，请参见[地域和可用区](~~40654~~)。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 伸缩组的ID。
     * @example `asg-bp18p2yfxow2dloq****`
     */
    "ScalingGroupId": string;
    /**
     * 保证请求幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25965~~)。
     * @example `123e4567-e89b-12d3-a456-42665544****`
     */
    "ClientToken"?: string;
    /**
     * 是否将当前伸缩组内的ECS实例或ECI实例添加到新增的ALB服务器组。取值范围：
     * - true：添加，并返回`ScalingActivityId`，您可以通过查看该伸缩活动ID来确定已有实例是否添加成功。
     * - false：不添加。
     * 默认值：false。
     * @example `false`
     */
    "ForceAttach"?: boolean;
    /**
     * ALB服务器组的相关信息集合。
     */
    "AlbServerGroups": {
        /**
         * ALB服务器组的ID。
         * 一个伸缩组支持关联的ALB服务器组数量有限，如需查看或手动申请提升配额值，请前往[配额中心](https://quotas.console.aliyun.com/products/ess/quotas)。
         * @example `sgp-ddwb0y0g6y9bjm****`
         */
        AlbServerGroupId: string;
        /**
         * 弹性伸缩将ECS实例或ECI实例添加到ALB服务器组后，ECS实例或ECI实例作为后端服务器的权重。取值范围：0~100。
         * 权重越高，ECS实例或ECI实例将被分配到越多的访问请求。如果权重为0，则ECS实例或ECI实例不会收到访问请求。
         * @example `100`
         */
        Weight: number;
        /**
         * 弹性伸缩将ECS实例或ECI实例添加到ALB服务器组后，ECS实例或ECI实例使用的端口号。
         * 取值范围：1~65535。
         * @example `22`
         */
        Port: number;
    }[];
}
