export interface ChangeCheckConfigRequest {
    /**
     * 云安全中心实例地域。取值为：
     * - **cn-hangzhou：**  中心
     * - **ap-southeast-1：**  新加坡
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 周期检测时间。
     */
    "CycleDays"?: number[];
    /**
     * 检查时间段开始时间，表示每天几点。 查询的开始时间和结束只能在以下时间区间中选择。取值：0、6、12、18。
     * - **0~6**：当开始时间为0时，结束时间需要设置为当日6时。
     * - **6~12**：当开始时间为6时，结束时间需要设置为当日12时。
     * - **12~18**：当开始时间为12时，结束时间需要设置为当日18时。
     * - **18~24**：当开始时间为18时，结束时间需要设置为当日24时。
     * @example `0`
     */
    "StartTime"?: number;
    /**
     * 检查时间段结束时间，表示每天几点。 查询的开始时间和结束只能在以下时间区间中选择。取值：6、12、18、24。
     * - **0~6**：当开始时间为0时，结束时间需要设置为当日6时。
     * - **6~12**：当开始时间为6时，结束时间需要设置为当日12时。
     * - **12~18**：当开始时间为12时，结束时间需要设置为当日18时。
     * - **18~24**：当开始时间为18时，结束时间需要设置为当日24时。
     * @example `6`
     */
    "EndTime"?: number;
    /**
     * 该参数作废，无需关注。
     */
    "StandardIds"?: number[];
    /**
     * 通过传入的条例的ID配置检查策略。
     * > 您可调用[ListCheckResult](~~ListCheckResult~~)接口获取条例ID。若配置 ConfigStandardIds 参数，则此参数不生效。
     */
    "ConfigRequirementIds"?: {
        /**
         * 向策略中增加的条例ID列表。
         */
        AddIds: number[];
        /**
         * 从策略中移除的条例ID列表。
         */
        RemoveIds: number[];
    };
    /**
     * 通过传入的标准的ID配置检查策略。
     * > 您可调用[ListCheckResult](~~ListCheckResult~~)接口获取标准ID。
     */
    "ConfigStandardIds"?: {
        /**
         * 向策略中增加的标准ID列表。
         */
        AddIds: number[];
        /**
         * 从策略中移除的标准ID列表。
         */
        RemoveIds: number[];
    };
    /**
     * 是否开启自动周期检测。可取值：
     * - **true：** 开启
     * - **false：** 关闭
     * @example `true`
     */
    "EnableAutoCheck"?: boolean;
    /**
     * 当所选条例中有新增检查项时，是否默认检查。可取值：
     * - **true：** 开启
     * - **false：** 关闭
     * @example `false`
     */
    "EnableAddCheck"?: boolean;
    /**
     * 策略中增加的检查项列表。
     * <notice> 若配置 ConfigStandardIds 参数或者 ConfigRequirementIds 参数，则此参数不生效。 ></notice>
     */
    "AddedCheck"?: {
        /**
         * 检查项的ID。
         * > 您可调用[ListCheckResult](~~ListCheckResult~~)接口获取检查项ID。
         * @example `5`
         */
        CheckId: number;
        /**
         * 检查项的章节ID。
         * @example `69`
         */
        SectionId: number;
    }[];
    /**
     * 策略中移除的检查项列表。
     * <notice> 若配置 ConfigStandardIds 参数或者 ConfigRequirementIds 参数，则此参数不生效。 ></notice>
     */
    "RemovedCheck"?: {
        /**
         * 检查项的ID。
         * > 您可调用[ListCheckResult](~~ListCheckResult~~)接口获取检查项ID。
         * @example `19`
         */
        CheckId: number;
        /**
         * 检查项的章节ID。
         * @example `69`
         */
        SectionId: number;
    }[];
    /**
     * 云厂商列表。
     */
    "Vendors"?: string[];
    /**
     * 字段配置。取值：
     * - **all**：添加所有检查项。
     * @example `all`
     */
    "Configure"?: string;
}
