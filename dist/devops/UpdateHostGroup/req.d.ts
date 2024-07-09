export interface UpdateHostGroupRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
     * @example `5ebbc0228123212b59xxxxx`
     */
    "organizationId": string;
    /**
     * 暂只支持ECS
     * @example `ECS`
     */
    "type": string;
    /**
     * 环境id
     * @example `0`
     */
    "envId"?: string;
    /**
     * 主机组名称
     * @example `主机组`
     */
    "name": string;
    /**
     * 服务连接id
     * @example `123`
     */
    "serviceConnectionId": number;
    /**
     * 标签id，多个逗号分割
     * @example `12,23`
     */
    "tagIds"?: string;
    /**
     * 暂只支持ECS_ALIYUN
     * @example `ECS_ALIYUN`
     */
    "ecsType"?: string;
    /**
     * ecs标签Key
     * @example `ecs`
     */
    "ecsLabelKey"?: string;
    /**
     * ecs标签value
     * @example `ecs`
     */
    "ecsLabelValue"?: string;
    /**
     * 阿里云区域
     * @example `cn-hangzhou`
     */
    "aliyunRegion"?: string;
    /**
     * 机器信息，aliyunRegionId 机器所在aliyun region，machineSn 机器的sn, instanceName,主机名，ip主机ip
     * @example `[{"aliyunRegionId":"cn-beijing","machineSn":"i-sssssss","instanceName":"ceshi","ip":"120.0.0.0"}]`
     */
    "machineInfos"?: string;
    /**
     * 主机组id
     * @example `123`
     */
    "id": number;
}
