export interface DetectStackGroupDriftRequest {
    /**
     * 保证请求的幂等性。该值由客户端生成，并且必须是全局唯一的。
     * 长度最大为64个字符，可包含英文字母、数字、短划线（-）和下划线（_）。
     * 更多详情，请参见[如何保证幂等性](~~134212~~)。
     * @example `123e4567-e89b-12d3-a456-42665544****`
     */
    "ClientToken"?: string;
    /**
     * 资源栈组所属的地域ID。您可以调用[DescribeRegions](~~131035~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源栈组名称。名称在单个地域内唯一。
     * 长度不超过255个字符，必须以数字或英文字母开头，可包含数字、英文字母、短划线（-）和下划线（_）。
     * @example `MyStackGroup`
     */
    "StackGroupName": string;
    /**
     * 操作设置。类型为JSON字典。可包含如下字段：
     * - FailureToleranceCount
     * 失败容错数。一个资源栈组操作中，若操作结果的失败总数不超过失败容错数，则操作成功，反之操作失败。
     * 若不指定FailureToleranceCount，则默认为0。不能同时指定FailureToleranceCount和FailureTolerancePercentage。
     * 取值范围：0~20。
     * - FailureTolerancePercentage
     * 失败容错百分比。一个资源栈组操作中，若操作结果的失败百分比不超过失败容错百分比，则操作成功，反之操作失败。
     * 不能同时指定FailureToleranceCount和FailureTolerancePercentage。
     * 取值范围：0~100。
     * - MaxConcurrentCount
     * 最大账号并发数，即一个资源栈组中，最多能有多少个账号同时执行偏差检测。
     * 不能同时指定MaxConcurrentCount和MaxConcurrentPercentage。
     * 取值范围：1~20。
     * - MaxConcurrentPercentage
     * 最大账号并发百分比，即一个资源栈组中，最多能有多少百分比的账号同时执行偏差检测。
     * 不能同时指定MaxConcurrentCount和MaxConcurrentPercentage。
     * 取值范围：1~100。
     * @example `{"FailureToleranceCount": 1, "MaxConcurrentCount": 2}`
     */
    "OperationPreferences"?: any;
}
