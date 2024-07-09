export interface VerifyCheckInstanceResultRequest {
    /**
     * 检查项的ID。
     * > 您可调用[ListCheckResult](~~ListCheckResult~~)接口获取检查项ID。
     * @example `16`
     */
    "CheckId"?: number;
    /**
     * 检查项影响资产的实例ID列表。
     */
    "InstanceIds"?: string[];
}
