export interface ModifyNetworkAttributeRequest {
    /**
     * 网络ID。
     * @example `n-****`
     */
    "NetworkId": string;
    /**
     * 网络名称。命名规则如下：
     * - 长度为2~128个英文或中文字符。
     * - 必须以大小写字母或中文开头，不能以 http://和https://开头。
     * - 可以包含数字、英文冒号（:）、下划线（_）或者短划线（-）。
     * @example `abc`
     */
    "NetworkName"?: string;
    /**
     * 描述信息。
     * 长度为2~256个字符，必须以字母或中文开头，但不能以http://或https://开头。
     * @example `this is my first network`
     */
    "Description"?: string;
}
