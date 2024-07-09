export interface ChangeCheckCustomConfigRequest {
    /**
     * 云安全中心实例地域。取值为：
     * - **cn-hangzhou：**  中心
     * - **ap-southeast-1：**  新加坡
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 检查项的ID。
     * > 您可调用[ListCheckResult](~~ListCheckResult~~)接口获取检查项ID。
     * @example `76`
     */
    "CheckId"?: number;
    /**
     * 检查项自定义配置项列表。
     */
    "CustomConfigs"?: {
        /**
         * 检查项自定义配置项名称，同检查项唯一。
         * @example `SessionTimeMax`
         */
        Name: string;
        /**
         * 检查项自定义配置项用户配置值字符串。
         * @example `13`
         */
        Value: string;
        /**
         * 检查项自定义配置项操作类型，只有删除时传DELETE，创建和更新不用传。
         * @example `DELETE`
         */
        Operation: string;
    }[];
    /**
     * 检查项修复功能支持的修复参数。
     */
    "RepairConfigs"?: {
        /**
         * 检查项修复参数名称，同检查项唯一。
         * @example `Port`
         */
        Name: string;
        /**
         * 检查项修复配置项用户配置值字符串。
         * @example `80`
         */
        Value: string;
        /**
         * 检查项自定义配置项操作类型，只有删除时传DELETE，创建和更新不用传。
         * @example `DELETE`
         */
        Operation: string;
        /**
         * 修复时对应修复流程的ID。
         * @example `ascgrmscyjgs*********`
         */
        FlowId: string;
    }[];
}
