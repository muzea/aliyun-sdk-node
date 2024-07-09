export interface ListAccessRulesResponse {
    /**
     * 返回结果的数量。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `55C5FFD6-BF99-41BD-9C66-FFF39189****`
     */
    RequestId: string;
    NextToken: string;
    /**
     * 权限组规则集合。
     */
    AccessRules: {
        /**
         * 权限组规则ID。
         * @example `acr-c38028f0-f313-4385-9456-3501b1f5****`
         */
        AccessRuleId: string;
        /**
         * 授权对象的IP地址或网段。
         * @example `192.0.2.0/24`
         */
        NetworkSegment: string;
        /**
         * 权限组规则的描述信息。
         * @example `日志上传机器网段`
         */
        Description: string;
        /**
         * 权限组ID。
         * @example `acg-e3755fb0-358d-4286-9942-8d461048****`
         */
        AccessGroupId: string;
        /**
         * 权限组规则的创建时间。
         * @example `2022-04-18T08:02:09.986217Z`
         */
        CreateTime: string;
        /**
         * 授权对象对文件系统的读写权限。
         * 包括：
         * - RDWR：可读可写
         * - RDONLY：只读
         * @example `RDWR`
         */
        RWAccessType: string;
        /**
         * 权限组规则优先级。
         * 当同一个授权对象匹配到多条规则时，高优先级规则生效。
         * 取值范围：1~100，1为最高优先级。
         * @example `2`
         */
        Priority: number;
        /**
         * 地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
    }[];
}
