export interface RejectOperationTicketRequest {
    /**
     * 堡垒机的实例ID。
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
     * 需要拒绝的运维申请的ID。
     * > 您可以通过接口[ListOperationTickets](~~2584313~~)查询所有需要审批的OperationTicketId。
     * @example `2`
     */
    "OperationTicketId": string;
}
