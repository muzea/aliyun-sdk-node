export interface GetCheckConfigResponse {
    /**
     * 周期检测时间。
     */
    CycleDays: number[];
    /**
     * 检查时间段开始时间，表示每天几点。
     * @example `0`
     */
    StartTime: number;
    /**
     * 检查时间段结束时间，表示每天几点。 查询的开始时间和结束只能在以下时间区间中选择。
     * - **0~6**当开始时间为0时，结束时间需要设置为当日6时。
     * - **6~12** 当开始时间为6时，结束时间需要设置为当日12时。
     * - **12~18** 当开始时间为12时，结束时间需要设置为当日18时。
     * - **18~24**当开始时间为18时，结束时间需要设置为当日24时。
     * @example `6`
     */
    EndTime: number;
    /**
     * 检测项信息列表。
     */
    Standards: {
        /**
         * 检测项编号。
         * @example `1`
         */
        Id: number;
        /**
         * 检测项名称。
         * @example `云产品配置管理`
         */
        ShowName: string;
        /**
         * 检测项类型。可取值：
         * - **RISK：** 云产品配置管理
         * - **IDENTITY_PERMISSION：**  身份权限管理
         * - **COMPLIANCE：** 合规
         * @example `RISK`
         */
        Type: string;
        /**
         * 检测项开启状态。可取值：
         * - **ON：** 开启
         * - **OFF：** 关闭
         * @example `ON`
         */
        Status: string;
    }[];
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `5A3D5C8F-2A42-5477-BDD8-27E64B5F1739`
     */
    RequestId: string;
    /**
     * 是否开启自动周期检测。可取值：
     * - **true：** 开启
     * - **false：** 关闭
     * @example `true`
     */
    EnableAutoCheck: boolean;
    /**
     * 当所选条例中有新增检查项时，是否默认检查。可取值：
     * - **true：** 开启
     * - **false：** 关闭
     * @example `false`
     */
    EnableAddCheck: boolean;
    /**
     * 策略中选择的检查项。
     */
    SelectedChecks: {
        /**
         * 检查项ID。
         * @example `3`
         */
        CheckId: number;
        /**
         * 检查项的章节ID。
         * @example `69`
         */
        SectionId: number;
    }[];
}
