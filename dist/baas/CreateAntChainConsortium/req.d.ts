export interface CreateAntChainConsortiumRequest {
    /**
     * 联盟名称，只能是英文大小写、数字、中文字符、短划线（-）的自由组合，不能有空格或特殊字符，限制1~100个字符。
     * @example `联盟名称`
     */
    "ConsortiumName": string;
    /**
     * 联盟描述，可以选填，如需填写，限制在1~255个字符。
     * @example `联盟描述`
     */
    "ConsortiumDescription"?: string;
}
