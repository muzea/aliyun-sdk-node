export interface BatchCheckSessionRequest {
    /**
     * 疑似异常会话记录。
     * > 最多记录50个。
     */
    "Records": {
        /**
         * 异常类型。
         * 取值：
         * - L1：严重。
         * - L2：中级。
         * - L3：一般。
         * @example `L1`
         */
        Type: string;
        /**
         * 自定义会话ID。
         * @example `100XXXX`
         */
        CustomSessionId: string;
        /**
         * 平台会话ID。
         * @example `1ADE0XXXX`
         */
        PlatformSessionId: string;
        /**
         * 疑似异常的评定参考信息。
         * > 仅用于记录和后续排查分析。
         */
        ReferenceInfo: any;
    }[];
}
