export interface ModifyAccessRuleRequest {
    /**
     * 权限组ID。
     * @example `acg-e3755fb0-358d-4286-9942-8d461048****`
     */
    "AccessGroupId": string;
    /**
     * 权限组规则ID。
     * @example `acr-c38028f0-f313-4385-9456-3501b1f5****`
     */
    "AccessRuleId": string;
    /**
     * 授权对象对文件系统的读写权限。
     * 取值：
     * - RDWR：可读可写
     * - RDONLY：只读
     * @example `RDWR`
     */
    "RWAccessType"?: string;
    /**
     * 权限组规则优先级。
     * 取值范围：1~100，其中1为最高优先级。
     * @example `2`
     */
    "Priority"?: number;
    /**
     * 权限组规则描述。
     * 长度不超过32个字符。
     * @example `日志上传机器网段`
     */
    "Description"?: string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "InputRegionId": string;
}
