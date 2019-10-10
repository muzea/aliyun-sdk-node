interface UpdateNotificationsHandleStateRequest {
    "RegionId"?: string;
    /**
    * 要设置的处理状态，可取值为**HANDLED**（已处理）, **UNHANDLED**（未处理）。
    * @example `HANDLED`
    */ "TargetHandleState": string;
    "NotificationId": number[];
}
export { UpdateNotificationsHandleStateRequest };