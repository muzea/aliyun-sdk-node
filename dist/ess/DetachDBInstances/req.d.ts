export interface DetachDBInstancesRequest {
    /**
     * 伸缩组的ID。
     * @example `asg-bp1igpak5ft1flyp****`
     */
    "ScalingGroupId": string;
    /**
     * 是否移除RDS实例IP白名单中属于伸缩组内实例的私网IP。取值范围：
     * - true：移除实例的私网IP。
     * - false：不移除实例的私网IP。
     * 默认值：false。
     * @example `false`
     */
    "ForceDetach"?: boolean;
    /**
     * 保证请求幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](~~25965~~)。
     * @example `123e4567-e89b-12d3-a456-42665544****`
     */
    "ClientToken"?: string;
    /**
     * RDS实例的ID，单次最多支持移除5个RDS实例。
     */
    "DBInstances": string[];
    /**
     * 伸缩组所属的地域ID。
     * @example `cn-qingdao`
     */
    "RegionId"?: string;
    /**
     * 仅针对`AttachMode`取值为`SecurityGroup`的数据库有效。取值范围：
     * - true：会移除伸缩组关联数据库时添加的安全组ID。
     * - false：会保留伸缩组关联数据库时添加的安全组ID。
     * 默认值：false。
     * @example `false`
     */
    "RemoveSecurityGroup"?: boolean;
}
