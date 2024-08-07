export interface ModifyPrepayInstanceSpecRequest {
    /**
     * 实例ID。
     * @example `i-bp67acfmxazb4ph****`
     */
    "InstanceId": string;
    /**
     * 实例所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 需要变配的目标实例规格。取值请参见[实例规格族](~~25378~~)或者调用[DescribeInstanceTypes](~~25620~~)。
     * @example `ecs.g5.xlarge`
     */
    "InstanceType": string;
    /**
     * 操作类型。取值范围：
     * >该参数可无需上传，系统可自动判断升配还是降配；如要上传，请按照下面的逻辑规则操作。
     * - upgrade：升级实例规格。请确保您的账户支付方式余额充足。
     * - downgrade：降配实例规格。当`InstanceType`设置的实例规格低于当前实例规格时，设置`OperatorType=downgrade`。
     * @example `upgrade`
     */
    "OperatorType"?: string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 升级实例规格时，是否自动支付。取值范围：
     * - true：自动支付。
     *     > 自动支付时，您需要确保支付方式余额充足，否则会生成异常订单，只能作废订单。如果您的支付方式余额不足，可以将参数`AutoPay`置为`false`，此时会生成未支付订单，您可以登录ECS管理控制台自行支付。
     * - false：只生成订单不扣费。
     * 默认值：true。
     * 当参数`OperatorType`被置为`downgrade`时，将忽略参数`AutoPay`。
     * @example `true`
     */
    "AutoPay"?: boolean;
    /**
     * 是否支持跨集群升级实例规格。取值范围：
     * - true：是。
     * - false：否。
     * 默认值：false。
     * 当参数`MigrateAcrossZone`取值为`true`时，一旦您根据返回信息升级了云服务器，请留意以下注意事项：
     * 经典网络类型实例：
     * - 对于[已停售的实例规格](~~55263~~)，非I/O优化实例变配到I/O优化实例时，实例私网IP地址、磁盘设备名和软件授权码会发生变化。对于Linux实例，普通云盘（cloud）会被识别为xvda或者xvdb等，高效云盘（cloud_efficiency）和SSD云盘（cloud_ssd）会被识别为vda或者vdb等。
     * - 对于[正常售卖的实例规格族](~~25378~~)，实例的私网IP地址会发生变化。
     * 专有网络VPC类型实例：对于已停售的实例规格，非I/O优化实例变配到I/O优化实例时，云服务器磁盘设备名和软件授权码会发生变化。Linux实例的普通云盘（cloud）会被识别为xvda或者xvdb等，高效云盘（cloud_efficiency）和SSD云盘（cloud_ssd）会被识别为vda或者vdb等。
     * @example `false`
     */
    "MigrateAcrossZone"?: boolean;
    /**
     * 更换系统盘类型。取值范围：
     * - cloud_efficiency：高效云盘。
     * - cloud_ssd：SSD云盘。
     * >该参数仅支持从[已停售的实例规格](~~55263~~)升级到[正常售卖的实例规格族](~~25378~~)，并将非I/O优化实例规格升级为I/O优化实例规格时有效。
     * @example `cloud_efficiency`
     */
    "SystemDisk.Category"?: string;
    /**
     * 实例的重启时间。按照[ISO 8601](~~25696~~)标准表示，使用UTC+0时间。格式为：yyyy-MM-ddTHH:mmZ。
     * @example `2018-01-01T12:05Z`
     */
    "RebootTime"?: string;
    /**
     * 临时变更的终止时间。按照[ISO 8601](~~25696~~)标准表示，使用UTC+0时间。格式为：yyyy-MM-ddTHH:mmZ。
     * @example `2018-01-01T12:05Z`
     */
    "EndTime"?: string;
    /**
     * 实例变配结束后是否立即重启。取值范围：
     * - true：是。
     * - false：否。
     * 默认值为false。
     * > 若实例处于**停止中**状态，即使您设置了`RebootWhenFinished=true`，也会保持原状态不变，并不会执行任何操作。
     * @example `false`
     */
    "RebootWhenFinished"?: boolean;
    /**
     * >该参数暂未开放使用。
     * @example `null`
     */
    "ModifyMode"?: string;
    /**
     * >该参数暂未开放使用。
     */
    "Disk"?: {
        /**
         * >该参数暂未开放使用。
         * @example `null`
         */
        DiskId: string;
        /**
         * >该参数暂未开放使用。
         * @example `null`
         */
        Category: string;
        /**
         * >该参数暂未开放使用。
         * @example `null`
         */
        PerformanceLevel: string;
    }[];
}
