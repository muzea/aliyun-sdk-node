export interface CreateMessageGroupRequest {
    /**
     * 互动消息应用ID。
     * @example `a494caec-***-695ef345db77`
     */
    "AppId": string;
    /**
     * 创建人ID，仅支持英文和数字，最大长度36位。
     * @example `as****hs`
     */
    "CreatorId": string;
    /**
     * 拓展字段。
     */
    "Extension"?: any;
}
