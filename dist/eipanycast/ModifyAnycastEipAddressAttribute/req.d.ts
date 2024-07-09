export interface ModifyAnycastEipAddressAttributeRequest {
    /**
     * Anycast EIP实例ID。
     * @example `aeip-bp1ix34fralt4ykf3****`
     */
    "AnycastId": string;
    /**
     * Anycast EIP实例名称。
     * 长度为0~128个字符，以大小字母或中文开头，可包含数字，下划线（_）或短划线（-）。
     * @example `docname`
     */
    "Name"?: string;
    /**
     * Anycast EIP实例描述。
     * 长度为0~256个字符，不能以`http://`或`https://`开头。
     * @example `docdesc`
     */
    "Description"?: string;
}
