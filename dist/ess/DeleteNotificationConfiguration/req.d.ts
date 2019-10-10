interface DeleteNotificationConfigurationRequest {
    "RegionId"?: string;
    /**
    * 伸缩组的ID。
    * @example `AG6CQdPU8OKdwLjgZcJ****`
    */ "ScalingGroupId": string;
    /**
    * 通知对象标识符。格式为`acs:ess:{region}:{account-id}:{resource-relative-id}`，其中：
    * - region为伸缩组所在地域的ID。
    * - account-id为您账号的ID。
    * - resource-relative-id为通知方式。
    * @example `acs:ess:cn-hangzhou:123456:cloudmonitor`
    */ "NotificationArn": string;
    /**
    * @example `155780923770`
    */ "OwnerId"?: number;
}
export { DeleteNotificationConfigurationRequest };