export interface AttachDBInstancesRequest {
    /**
     * 伸缩组的ID。
     * @example `asg-bp1avr6ensitts3w****`
     */
    "ScalingGroupId": string;
    /**
     * 当RDS实例添加到伸缩组时，是否把当前伸缩组内实例的私网IP全部添加到RDS实例IP白名单中。取值范围：
     * - true：添加。
     * - false：不添加。
     * 默认值：false。
     * @example `false`
     */
    "ForceAttach"?: boolean;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。
     * 只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25965~~)。
     * @example `123e4567-e89b-12d3-a456-42665544****`
     */
    "ClientToken"?: string;
    /**
     * RDS实例的ID。
     */
    "DBInstances": string[];
    /**
     * 伸缩组所属的地域ID。
     * @example `cn-qingdao`
     */
    "RegionId"?: string;
    /**
     * 伸缩组与数据库关联方式。取值范围：
     * - SecurityIp：修改SecurityIp（即数据库的IP白名单）模式，通过将扩容实例自动添加到数据库白名单（目前仅RDS数据库支持）。
     * - SecurityGroup：安全组模式，通过将伸缩配置安全组添加至数据库安全组白名单关联注册。
     * @example `SecurityIp`
     */
    "AttachMode"?: string;
    /**
     * 数据库类型。取值范围：
     * - RDS。
     * - Redis。
     * - MongoDB。
     * 默认值：RDS。
     * @example `RDS`
     */
    "Type"?: string;
}
