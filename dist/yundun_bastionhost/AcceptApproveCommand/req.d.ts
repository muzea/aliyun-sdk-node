export interface AcceptApproveCommandRequest {
    /**
     * 堡垒机的实例ID。
     * > 可通过调用DescribeInstances接口获取堡垒机实例ID。
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
     * 需要允许执行的命令ID。
     * > 您可以通过接口[ListApproveCommands](~~2584310~~)查询所有需要审批的CommandId。
     * @example `7`
     */
    "CommandId": string;
}
