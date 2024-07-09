export interface SignInGroupRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 坐席ID，不填默认使用当前RAM账号映射的坐席。
     * @example `agent@ccc-test`
     */
    "UserId"?: string;
    /**
     * 语音设备ID。当有多个语音设备可用时，通过此参数指定其中一个语音设备，比如浏览器WebRTC或者SIP话机等。
     * @example `CCC-xx.xx.xx.xx-chrome119-bse1b618bff3xxxxd`
     */
    "DeviceId": string;
    /**
     * 想要签入的技能组ID列表，格式为JSON数组字符串，数组元素是技能组ID。
     * @example `["skillgroup1@ccc-test","skillgroup2@ccc-test"]`
     */
    "SignedSkillGroupIdList": string;
    /**
     * Chat设备ID。
     * @example `4c51c9116c36537cb850dc1081d745df`
     */
    "ChatDeviceId"?: string;
    /**
     * 座席已经签入一些技能组后，如果指定此参数为True, 则可以签入更多新技能组。
     * @example `false`
     */
    "Additivity"?: boolean;
}
