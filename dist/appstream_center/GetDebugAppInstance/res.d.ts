export interface GetDebugAppInstanceResponse {
    /**
     * 请求ID。
     * @example `1CBAFFAB-B697-4049-A9B1-67E1FC5F****`
     */
    RequestId: string;
    /**
     * 交付组ID。
     * @example `aig-9ciijz60n4xsv****`
     */
    AppInstanceGroupId: string;
    /**
     * 应用实例ID。
     * @example `ai-7ybdeiyoeh5e****`
     */
    AppInstanceId: string;
    /**
     * 应用ID。
     * @example `__DEBUG_APP`
     */
    AppId: string;
    /**
     * 用户ID。
     * @example `__debug__`
     */
    UserId: string;
    /**
     * 授权码。该授权码有效期为3分钟，且无论校验成功或失败，只能被使用一次。当为一个用户生成多个授权码时，只有最后一次生成的有效。
     * @example `e4e169bea1cc48e8afac53**********`
     */
    AuthCode: string;
    /**
     * 应用版本ID。
     * @example `1.1`
     */
    AppVersion: string;
}
