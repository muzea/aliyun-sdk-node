export interface CreateScheduleResponse {
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 创建时间 (UTC+8)。
         * @example `2020-01-01 12:00:00`
         */
        CreatedTime: string;
        /**
         * 终止时间（UTC+8）。
         * @example `2020-01-01`
         */
        EndTime: string;
        /**
         * 执行时间 (UTC+8)，为空立即执行。
         * @example `2020-01-01 12:00:00`
         */
        ExecuteTime: string;
        /**
         * 人群ID。
         * @example `0a54e195-03e2-40bd-869d-b71cb302783e`
         */
        GroupId: string;
        /**
         * 触达计划ID。
         * @example `0a54e195-03e2-40bd-869d-b71cb302783e`
         */
        Id: string;
        /**
         * 触达计划名称。
         * @example `增长-2021-0101`
         */
        Name: string;
        /**
         * 重复周期，按重复周期与重复周期单位执行。
         * @example `0`
         */
        RepeatCycle: number;
        /**
         * 重复周期单位，若指定执行时间，则重复周期生效。
         * - 0: 从不（默认）。
         * - 1: 小时。
         * - 2: 天。
         * - 3: 周。
         * - 4: 月。
         * @example `0`
         */
        RepeatCycleUnit: number;
        /**
         * 重复次数。
         * - -1: 不设终止时间（默认）。
         * - 0: 不重复。
         * - N: 重复N次后终止。
         * @example `1`
         */
        RepeatTimes: number;
        /**
         * 签名。
         * @example `PAI`
         */
        SignName: string;
        /**
         * 签名ID，或指定签名。
         * @example `0a54e195-03e2-40bd-869d-b71cb302783e`
         */
        SignatureId: string;
        /**
         * 状态。
         * - 0: 检查中。
         * - 1: 检查成功。
         * - 2: 检查失败。
         * - 3: 发送中。
         * - 4: 发送成功。
         * - 5: 发送失败。
         * @example `0`
         */
        Status: number;
        /**
         * 模板Code。
         * @example `SMS_123456`
         */
        TemplateCode: string;
        /**
         * 模板ID，或指定模板Code。
         * @example `0a54e195-03e2-40bd-869d-b71cb302783e`
         */
        TemplateId: string;
        /**
         * 更新时间 (UTC+8)。
         * @example `2020-01-01 12:00:00`
         */
        UpdatedTime: string;
    };
    /**
     * 错误码。
     * @example `0`
     */
    ErrorCode: number;
    /**
     * 错误信息。
     * @example `OK`
     */
    ErrorMessage: string;
    /**
     * 请求ID。
     * @example `f8651828-609d-4de8-ab49-ab781d7fd85a`
     */
    RequestId: string;
}
