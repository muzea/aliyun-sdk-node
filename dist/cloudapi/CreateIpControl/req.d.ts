export interface CreateIpControlRequest {
    /**
     * IP访问控制名称。支持大小写英文字母、中文、数字、下划线（_）、长度为`[4,50]`个字符, 且不能以下划线开头。
     * @example `controlNameTest`
     */
    "IpControlName": string;
    /**
     * IP访问控制类型：
     * - **ALLOW**：IP访问控制为白名单类型
     * - **REFUSE**：IP访问控制为黑名单类型
     * @example `ALLOW`
     */
    "IpControlType": string;
    /**
     * 描述，不超过200个字符
     * @example `test`
     */
    "Description"?: string;
    /**
     * 由ipcontrolpolicys组成的数组格式，返回策略的信息项
     */
    "IpControlPolicys"?: {
        /**
         * 策略限制的AppId，只有控制类型为白名单（即 IpControlType为ALLOW）时，才可同时增加AppId的限制。
         * - 一次只能增加一个；
         * - 为空表示没有AppId的限制；
         * - 当该值不为空，表示在有IP限制的同时，还限制访问的AppId；
         * - 当该值不为空，如果API的安全认证为“无认证”，将限制所有的API调用，请注意；
         * - 当黑名单（IpControlType为REFUSE）时，该值不为空，API网关会自动忽略该值，只设置IP的限制；
         * - IpControlPolicys.N 中N的取值范围：`[1,100]`；
         * @example `11111`
         */
        AppId: string;
        /**
         * 具体策略的IP或者IP段
         * - 当要在创建访问控制时指定策略，该值不能为空；
         * - 每条策略的IP或者IP段，多个请用英文分号（;）分割，最多添加10个；
         * - IpControlPolicys.N 中N的取值范围：`[1,100]`
         * @example `114.1.1.0/24`
         */
        CidrIp: string;
    }[];
}
