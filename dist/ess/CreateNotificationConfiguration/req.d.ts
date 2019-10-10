interface CreateNotificationConfigurationRequest {
    "RegionId"?: string;
    /**
    * 伸缩组的ID。
    * @example `AG6CQdPU8OKdwLjgZcJ****`
    */ "ScalingGroupId": string;
    /**
    * 通知对象标识符。格式为`acs:ess:{region}:{account-id}:{resource-relative-id}`，其中：
    * - region为伸缩组所在地域的ID。更多详情，请参见[地域和可用区](~~40654~~)。
    * - account-id为您账号的ID。
    * - resource-relative-id为通知方式，取值范围：
    *     - cloudmonitor：云监控
    *     - MNS队列：queue/{queuename}，其中topicname需要替换为具体的MNS队列名称。
    *     - MNS主题：topic/{topicname}，其中topicname需要替换为具体的MNS主题名称。
    * @example `acs:ess:cn-hangzhou:123456:cloudmonitor`
    */ "NotificationArn": string;
    "NotificationType": string[];
    /**
    * @example `123456123456`
    */ "OwnerId"?: number;
}
export { CreateNotificationConfigurationRequest };