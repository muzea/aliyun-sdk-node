export interface ModifySourceServerAttributeRequest {
    /**
     * 迁移源ID。
     * @example `s-bp17m1vi6x20c6g6****`
     */
    "SourceId": string;
    /**
     * 迁移源名称。长度为2~128个英文或中文字符。必须以大小写字母或中文开头，不能以`http://`或`https://`开头。可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。
     * @example `testSourceServerName`
     */
    "Name"?: string;
    /**
     * 迁移源描述。长度为0~256个字符，不能以`http://`或`https://`开头。
     * @example `This is a source server.`
     */
    "Description"?: string;
}
