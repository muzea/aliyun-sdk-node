export interface UpdateNotificationsHandleStateRequest {
    /**
     * 通知ID列表。
     * @example `1`
     */
    "NotificationId": number[];
    /**
     * 要设置的处理状态，可取值为**HANDLED**（已处理）, **UNHANDLED**（未处理）。
     * @example `UNHANDLED`
     */
    "TargetHandleState": string;
}
