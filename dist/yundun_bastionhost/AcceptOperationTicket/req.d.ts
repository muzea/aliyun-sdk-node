export interface AcceptOperationTicketRequest {
    /**
     * 堡垒机实例的ID。
     * > 您可以调用[DescribeInstances](~~153281~~)接口获取该参数。
     * @example `bastionhost-cn-st220aw****`
     */
    "InstanceId": string;
    /**
     * 堡垒机的地域ID。
     * > 地域ID和地域名称的对应关系，请参见[地域和可用区](~~40654~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 需要允许的运维申请的ID。您可以通过接口ListOperationTickets查询所有需要审批的OperationTicketId。
     * @example `1`
     */
    "OperationTicketId": string;
    /**
     * 允许登录的次数限制。取值：
     * - 0：不限制登录次数，运维员在有效期内可以无限次数登录。
     * - 1：运维员在有效期内只允许登录一次。
     * > 数据库资产运维审批的登录次数限制只能设置为不限制登录次数。
     * @example `1`
     */
    "EffectCount": string;
    /**
     * 允许登录的有效期开始时间。（秒，时间戳格式）
     * @example `1685600242`
     */
    "EffectStartTime": string;
    /**
     * 允许登录的有效期结束时间。（秒，时间戳格式）
     * @example `1679393152`
     */
    "EffectEndTime": string;
}
