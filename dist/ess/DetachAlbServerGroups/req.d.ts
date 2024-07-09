export interface DetachAlbServerGroupsRequest {
    /**
     * 伸缩组所属的地域ID，如cn-hangzhou、cn-shanghai。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 伸缩组的ID。
     * @example `asg-bp18p2yfxow2dloq****`
     */
    "ScalingGroupId": string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。
     * 只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25965~~)。
     * @example `123e4567-e89b-12d3-a456-42665544****`
     */
    "ClientToken"?: string;
    /**
     * 是否从待移出ALB服务器组中移出已有的ECS实例。取值范围：
     * - true：移出，并返回`ScalingActivityId`，您可以通过查看该伸缩活动ID来确定已有实例是否移出成功。
     * - false：不移出。
     * 默认值：false。
     * @example `false`
     */
    "ForceDetach"?: boolean;
    /**
     * ALB服务器组的相关信息集合。
     */
    "AlbServerGroups": {
        /**
         * ALB服务器组的ID。
         * @example `sgp-ddwb0y0g6y9bjm****`
         */
        AlbServerGroupId: string;
        /**
         * ALB服务器组中ECS实例使用的端口号。
         * @example `22`
         */
        Port: number;
    }[];
}
