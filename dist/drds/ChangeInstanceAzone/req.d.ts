export interface ChangeInstanceAzoneRequest {
    /**
     * 实例ID。
     * @example `drdsjiii1b49****`
     */
    "DrdsInstanceId": string;
    /**
     * 原可用区ID。
     * @example `cn-hangzhou-B`
     */
    "OriginAzoneId": string;
    /**
     * 目标可用区ID。
     * @example `cn-hangzhou-A`
     */
    "TargetAzoneId": string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "DrdsRegionId": string;
    /**
     * 是否更新交换机，取值如下：
     * - **true**：是
     * - **false**：否
     * @example `true`
     */
    "ChangeVSwitch"?: boolean;
    /**
     * 新交换机的ID。
     * @example `vsw-wz9ckkba51zrh********`
     */
    "NewVSwitch"?: string;
}
