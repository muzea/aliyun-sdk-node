export interface SwitchoverInstanceRequest {
    /**
     * 主备实例 ID，默认可以使用需要切换为主实例的实例 ID。
     * @example `ob317v4uif****`
     */
    "InstanceId": string;
    /**
     * 需要切换为主实例的实例 ID。
     * @example `ob4bv8o7sp****`
     */
    "TargetInstanceId": string;
    /**
     * 是否强制切换主备实例。取值范围：
     * - **true**：表示强制切换主备实例。
     * - **false**：表示不强制切换主备实例。
     * @example `true`
     */
    "Forced"?: boolean;
}
