export interface RemoveMemberRequest {
    /**
     * 连麦唯一标识。由字母、数字和短横线（-）组成，长度为36个字符。
     * @example `fb0f-****-4cb1`
     */
    "ConferenceId": string;
    /**
     * 被踢者用户ID，在AppId下单独唯一。英文字母、数字、下划线（_）、短横线（-）、小数点（.）和@组成。长度为1到36个字符。
     * @example `45***9`
     */
    "ToUserId": string;
    /**
     * 踢人者用户ID，在AppId下单独唯一。英文字母、数字、下划线（_）、短横线（-）、小数点（.）和@组成。长度为1到36个字符。
     * @example `23***7`
     */
    "FromUserId": string;
}
