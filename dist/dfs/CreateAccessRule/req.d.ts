export interface CreateAccessRuleRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "InputRegionId": string;
    /**
     * 权限组ID。
     * @example `acg-e3755fb0-358d-4286-9942-8d461048****`
     */
    "AccessGroupId": string;
    /**
     * 授权对象的IP地址或网段。
     * @example `192.0.2.0/24`
     */
    "NetworkSegment": string;
    /**
     * 授权对象对文件系统的读写权限。
     * 取值：
     * - RDWR：可读可写
     * - RDONLY：只读
     * @example `RDWR`
     */
    "RWAccessType": string;
    /**
     * 权限组规则优先级。
     * 当同一个授权对象匹配到多条规则时，高优先级规则生效。
     * 取值范围：1~100，1为最高优先级。
     * @example `2`
     */
    "Priority": number;
    /**
     * 权限组规则描述。
     * 长度不超过32个字符。
     * @example `日志上传机器网段`
     */
    "Description"?: string;
}
