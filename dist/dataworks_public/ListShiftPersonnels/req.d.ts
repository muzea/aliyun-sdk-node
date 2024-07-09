export interface ListShiftPersonnelsRequest {
    /**
     * 值班表唯一标识。
     * @example `2ab6456ada634b2f938ee******9b45b`
     */
    "ShiftScheduleIdentifier": string;
    /**
     * 值班人查询条件：ALL（全部值班人）、PRIMARY（主值班人）、BACKUP（备值班人）、DESIGNATED_USER（指定人）
     * @example `ALL`
     */
    "UserType"?: string;
    /**
     * 阿里云账号ID。您可以登录DataWorks控制台，鼠标悬停至顶部菜单栏右侧的用户头像，查看账号ID。
     * @example `1933790****551`
     */
    "ShiftPersonUID"?: string;
    /**
     * 值班人开始时间，时间戳
     * @example `1593950832000`
     */
    "BeginTime": number;
    /**
     * 值班人结束时间，时间戳
     * @example `1593950832000`
     */
    "EndTime": number;
}
