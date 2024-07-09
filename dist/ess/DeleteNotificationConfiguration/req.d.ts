export interface DeleteNotificationConfigurationRequest {
    /**
     * 伸缩组的ID。
     * @example `asg-bp18p2yfxow2dloq****`
     */
    "ScalingGroupId": string;
    /**
     * 通知对象标识符，各通知方式的参数格式如下：
     * - 云监控，参数取值格式：acs:ess:{region-id}:{account-id}:cloudmonitor。
     * - 消息服务MNS队列，参数取值格式：acs:mns:{region-id}:{account-id}:queue/{queuename}。
     * - 消息服务MNS主题，参数取值格式：acs:mns:{region-id}:{account-id}:topic/{topicname}。
     * 参数格式中的变量含义如下：
     * - region-id：伸缩组所属的地域ID。
     * - account-id：阿里云账号ID。
     * - queuename：MNS队列的名称。
     * - topicname：MNS主题的名称。
     * @example `acs:ess:cn-beijing:161456884340****:cloudmonitor`
     */
    "NotificationArn": string;
    /**
     * 伸缩组所属的地域ID。
     * @example `cn-beijing`
     */
    "RegionId"?: string;
}
