export interface CreateQosRequest {
    /**
     * QoS策略实例所在的地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * QoS策略实例名称。
     * 名称长度为2~100个字符，以大小写字母或中文开头，可包含数字、半角句号（.）、下划线（_）和短划线（-）。
     * @example `doctest`
     */
    "QosName": string;
    /**
     * QoS策略实例描述。
     * 描述长度为1~512个字符，以大小写字母或中文开头，可包含数字、下划线（_）和短划线（-）。
     * @example `testdesc`
     */
    "QosDescription"?: string;
}
