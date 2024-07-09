export interface ModifyInstanceNameRequest {
    /**
     * 实例的ID。
     * @example `alikafka_post-cn-v0h1fgs2****`
     */
    "InstanceId": string;
    /**
     * 实例的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例名称。取值：
     * -  只能包含字母，数字，下划线（_）和短划线（-）。
     * -  长度限制在3～64字符，多于64字符将被自动截取。
     * @example `dev-test`
     */
    "InstanceName": string;
}
