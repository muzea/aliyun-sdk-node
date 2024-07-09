export interface CreateSensitiveWordRequest {
    /**
     * 用户的应用ID，在控制台创建应用时生成。包含小写字母、数字，长度为6个字符。
     * @example `7m***q`
     */
    "AppId": string;
    /**
     * 敏感词列表，敏感词支持中文、字母数字，暂不支持英文敏感词，一次最多可以创建100个敏感词，单个敏感词的长度不得超过20个字符。
     */
    "WordList": string[];
}
