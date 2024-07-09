export interface StopMeetingTransRequest {
    /**
     * 会议ID。
     * @example `meeting_123`
     */
    "MeetingId": string;
    /**
     * 请求body。
     */
    "body"?: {
        /**
         * 会后进行识别结果角色区分人数，在AudioOutputEnabled=true、MeetingResultEnabled=true且DocResultEnabled=true 时生效，默认是1。
         * 0：按多人进行角色区分。
         * 1：按1人进行角色区分，即不区分。
         * 2：按2人进行角色区分。
         * @example `1`
         */
        MeetingRoleNum: number;
        /**
         * 会后结果中docResult字段是否只存储角色时间戳映射信息，即不带转写文字结果，默认是false。
         * @example `false`
         */
        OnlyRoleSplitResult: boolean;
    };
}
